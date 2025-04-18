// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    firstName: string;
    lastName: string;
    fullName: string;
    profilePicture: string;
    role: string;
    status: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}
