import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

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

        await notifyOwner({
          title: `New Booking Request from ${input.name}`,
          content: lines,
        });

        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
