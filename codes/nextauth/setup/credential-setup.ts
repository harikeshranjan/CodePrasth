const nextAuthDTS = `import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    username: string;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }
}`

const authTS = `import User from "@/models/User";
import { connectToDatabase } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password){
          throw new Error("Missing credentials");
        }

        try {
          await connectToDatabase();
          const user = await User.findOne({ email: credentials.email })

          if (!user) {
            throw new Error("No user found");
          }

          const isValid = bcrypt.compare(credentials.password, user.password);

          if (!isValid) {
            throw new Error("Invalid password");
          }

          return {
            id: user._id.toString(),
            email: user.email,
            username: user.username,
          };
        } catch (error) {
          console.error(error);
          throw new Error("An error occurred");
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};`

const providerTS = `"use client";

import { SessionProvider } from "next-auth/react";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}`

const nextauthRouteTS = `import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };`

const loginTS = `const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password,
    })

    if (response?.error) {
      toast("Error", {
        description: "Invalid email or password",
        duration: 5000,
      });
    } else {
      toast("Success", {
        description: "Logged in successfully",
        duration: 5000,
      });
      window.location.href = "/";
    }
  } catch (error) {
    console.error(error);
  }
};`

export const credentialSetupCodes = [
  {
    id: "next-auth",
    title: "next-auth.d.ts",
    code: nextAuthDTS,
    description: "This file extends the default NextAuth types to include custom user properties.",
    type: "Type Definitions",
  },
  {
    id: "auth",
    title: "auth.ts",
    code: authTS,
    description: "The auth.ts file configures NextAuth with your providers and database adapter.",
    type: "Configuration",
  },
  {
    id: "provider",
    title: "provider.tsx",
    code: providerTS,
    description: "The provider.tsx file wraps your application with the SessionProvider from NextAuth.",
    type: "Provider",
  },
  {
    id: "api",
    title: "route.ts",
    code: nextauthRouteTS,
    description: "The route.ts file handles the NextAuth API route for authentication.",
    type: "API Route",
  },
  {
    id: "login-api",
    title: "login.tsx",
    code: loginTS,
    description: "The login.tsx file handles the login form submission and redirects.",
    type: "Login API",
  }
]