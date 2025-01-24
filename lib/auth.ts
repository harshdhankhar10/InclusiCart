import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any): Promise<any> {
                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Email and password are required");
                }
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) throw new Error("No user found");

                const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordValid) throw new Error("Invalid password");

                const { password, ...rest } = user;
                return rest; 
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ token, user  }: any) => {
            if (user) {

                token.user = user; 
                const userInfo = await prisma.user.findUnique({
                    where: { email: user.email },
                });
                const { password, ...rest } = userInfo!;
                token.user = rest;
            }    
            return Object.assign(token, user);
        },
        session: ({ session, token }: any) => {
            
            session.user = {
                id: token.user.id,
                email: token.user.email,
                firstName: token.user.firstName,
                lastName: token.user.lastName,
                fullName: `${token.user.firstName} ${token.user.lastName}`,
                profilePicture: token.user.profilePicture,
                role: token.user.role,
                createdAt: token.user.createdAt,
                updatedAt: token.user.updatedAt,
            };
            return session;
        },
        
    },
};
