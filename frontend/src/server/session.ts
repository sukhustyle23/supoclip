
import type { auth } from "@/lib/auth";

type ServerSession = NonNullable<
  Awaited<ReturnType<typeof auth.api.getSession>>
>;

export async function getServerSession(): Promise<ServerSession> {
  const userId = "00000000-0000-4000-8000-000000000001";

  return {
    user: {
      id: userId,
      name: "Local User",
      email: "local@example.invalid",
      emailVerified: true,
      image: null,
      createdAt: new Date(0),
      updatedAt: new Date(0),
      is_admin: false,
    },
    session: {
      id: "local-session",
      token: "local-session",
      userId,
      expiresAt: new Date("2099-01-01"),
      createdAt: new Date(0),
      updatedAt: new Date(0),
    },
  } as ServerSession;
}
