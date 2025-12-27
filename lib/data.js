import prisma from "./prisma"

export async function getBooks() {
  return await prisma.book.findMany({
    orderBy: { createdAt: 'desc' }
  })
}