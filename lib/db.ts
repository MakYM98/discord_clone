import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

// Prevent hot reload in dev mode from generating too many Prisma Client
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db