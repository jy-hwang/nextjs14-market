import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/helpers/prismadb';

import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { randomBytes, randomUUID } from 'crypto';
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text'},
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {

      if(!credentials?.email || !credentials?.password){
        throw new Error('Invalid credentials or no input');
      }

      const user = await prisma.user.findUnique({
        where :{ email : credentials.email}
      });

      console.log('=============================');
      
      if(!user || !user?.hashedPassword){
        throw new Error('Invalid credentials or no email');
      }

      const isCorrectPassword = await bcrypt.compare(
        credentials.password, user.hashedPassword
      );

      if(!isCorrectPassword){
        throw new Error('Invalid credentials or wrong password');
      }

      return user;

    },
    }),
    // ...add more providers here
  ],
  // pages:{
  //   signIn : '/auth/login'
  // },
  session: {
    strategy: 'jwt',
     maxAge: 30 * 24 * 60 * 1,
     updateAge: 24 * 60 * 1,
     generateSessionToken: () => {
       return randomUUID?.() ?? randomBytes(32).toString('hex');
     },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 30 * 24 * 60 * 1,
  },
  callbacks: {
     async jwt({ token, user }) {
       return { ...token, ...user };
     },
     async session({ session, token }) {
       session.user = token;
       return session;
     },
  },
};

export default NextAuth(authOptions);
