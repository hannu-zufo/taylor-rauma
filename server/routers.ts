import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { ENV } from "./_core/env";
import { z } from "zod";
import { Resend } from "resend";

const OWNER_EMAIL = "taylorraumatattoo@gmail.com";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  booking: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          placement: z.string().optional(),
          size: z.string().optional(),
          description: z.string().min(1),
          availability: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const lines = [
          `Name: ${input.name}`,
          `Email: ${input.email}`,
          input.phone ? `Phone: ${input.phone}` : null,
          input.placement ? `Placement: ${input.placement}` : null,
          input.size ? `Size: ${input.size}` : null,
          `Description: ${input.description}`,
          input.availability ? `Availability: ${input.availability}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        const htmlLines = [
          `<p><strong>Name:</strong> ${input.name}</p>`,
          `<p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p>`,
          input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : null,
          input.placement ? `<p><strong>Placement:</strong> ${input.placement}</p>` : null,
          input.size ? `<p><strong>Size:</strong> ${input.size}</p>` : null,
          `<p><strong>Description:</strong><br/>${input.description.replace(/\n/g, "<br/>")}</p>`,
          input.availability ? `<p><strong>Availability / Budget:</strong> ${input.availability}</p>` : null,
        ]
          .filter(Boolean)
          .join("\n");

        const htmlBody = `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#111;">
            <h2 style="font-size:22px;margin-bottom:24px;">New Booking Request — Taylor Rauma Tattoo</h2>
            ${htmlLines}
            <hr style="margin:32px 0;border:none;border-top:1px solid #ddd;"/>
            <p style="font-size:12px;color:#999;">Sent from the booking form at taylorrauma.com</p>
          </div>
        `;

        // Send email via Resend
        if (ENV.resendApiKey) {
          try {
            const resend = new Resend(ENV.resendApiKey);
            await resend.emails.send({
              from: "Taylor Rauma Tattoo <bookings@taylorrauma.com>",
              to: [OWNER_EMAIL],
              replyTo: input.email,
              subject: `New Booking Request from ${input.name}`,
              html: htmlBody,
            });
          } catch (err) {
            console.error("[Booking] Resend email error:", err);
          }
        }

        // Also send Manus notification as a fallback
        try {
          await notifyOwner({
            title: `New Booking Request from ${input.name}`,
            content: lines,
          });
        } catch (err) {
          console.warn("[Booking] Manus notification error:", err);
        }

        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
