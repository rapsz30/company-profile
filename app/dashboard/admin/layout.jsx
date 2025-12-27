import prisma from "@/lib/prisma"
import AdminPage from "./page"

export default async function AdminLayout() {
  const books = await prisma.book.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return <AdminPage books={books} />
}