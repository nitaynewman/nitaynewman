import fastify from "fastify";
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client";
dotenv.config()

const app = fastify()
const prisma = new PrismaClient()

app.listen({ port: process.env.PORT })