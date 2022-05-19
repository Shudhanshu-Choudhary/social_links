import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
   providers: [
       GoogleProvider({
           clientId: "666675281460-ks7a5puao73dr2safma1n6ltdq55pa2i.apps.googleusercontent.com",
           clientSecret: "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",
           authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
       }),

       FacebookProvider({
        clientId: "396546469023170",
        clientSecret: "4d9a6c0b5efedd3629892de8a641fac1"
      })
   ]
})