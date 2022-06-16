import login from "features/auth/login";
import register from "features/auth/register";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "john smith" },
        email: { label: "Email", type: "text", placeholder: "johnsmith@gmail.com"},
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, _req) {
        const { name, email, password } = credentials;

        if (typeof name === "undefined") {
          return login(email, password);
        } else {
          return register(name, email, password);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
