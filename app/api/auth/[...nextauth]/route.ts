import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? '',
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
    newUser: '/',
    verifyRequest: '/',
  },
});

export { handler as GET, handler as POST };
