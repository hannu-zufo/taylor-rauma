import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner helper so tests don't call external services
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

import { notifyOwner } from "./_core/notification";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

describe("booking.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts a valid booking request and notifies the owner", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.booking.submit({
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "604-555-0100",
      placement: "Left forearm",
      size: "4 inches",
      description: "A rose with a dagger through it",
      availability: "Budget: $300–$500",
    });

    expect(result).toEqual({ success: true });
    expect(notifyOwner).toHaveBeenCalledOnce();
    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New Booking Request from Jane Doe",
        content: expect.stringContaining("jane@example.com"),
      })
    );
  });

  it("rejects a submission with a missing description", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.booking.submit({
        name: "Jane Doe",
        email: "jane@example.com",
        description: "", // empty — should fail zod validation
      })
    ).rejects.toThrow();
  });

  it("rejects a submission with an invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.booking.submit({
        name: "Jane Doe",
        email: "not-an-email",
        description: "A rose",
      })
    ).rejects.toThrow();
  });
});
