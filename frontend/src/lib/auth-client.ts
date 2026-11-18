
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();

export const {
  signIn,
  signOut,
  signUp,
  requestPasswordReset,
  resetPassword,
} = authClient;

// Temporary no-login UI mode
const LOCAL_USER_ID = "00000000-0000-4000-8000-000000000001";

const localSession = {
  user: {
    id: LOCAL_USER_ID,
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
    userId: LOCAL_USER_ID,
    expiresAt: new Date("2099-01-01"),
    createdAt: new Date(0),
    updatedAt: new Date(0),
  },
};

export function useSession(
  ..._args: Parameters<typeof authClient.useSession>
) {
  return {
    data: localSession,
    isPending: false,
    isRefetching: false,
    error: null,
    refetch: async () => {},
  } as unknown as ReturnType<typeof authClient.useSession>;
}
