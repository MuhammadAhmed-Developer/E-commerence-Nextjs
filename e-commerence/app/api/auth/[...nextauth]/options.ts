import type { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import prisma from "@/app/prismadb";
import bcrypt from 'bcrypt'
import axios from "axios";

export const options:NextAuthOptions ={
    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                  email:{
                    lable :'email',
                    type :'text',
                    placeholder:'Your Email'
                  },
                  password:{
                    lable :'password',
                    type :'password',
                    placeholder:'********'
                  }
            },
            async authorize(credentials){
               if(!credentials?.email || credentials?.password){
                 throw new Error ('Invalid crediantials')
               }
               //check for user in db
               const user = await prisma.user.findUnique({
                where:{
                    email:credentials.email
                }
               })

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                     user.password
                )
               if(!isCorrectPassword){
                throw new Error('Invalid Crediantials')
               }
               return user
            }
        })

    ]
}