import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import { NextApiRequest } from "next";

const BASE_PATH: string = 'https://localhost:8080/api/login';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type:"password" }
            },
            async authorize(credentials, req) {
                const response = await fetch(BASE_PATH, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                });
                const user = await response.json();

                if(response.ok) {
                    return user;
                }
                return null;
            }
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        // })


    ],
    secret: process.env.NEXT_PUBLIC_SECRET
})