import prisma from "@/lib/prisma"
import AdminPage from "./page"

async function getBooks() {
  try {
    return await prisma.book.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (error) {
    console.error("Error fetching books:", error)
    return []
  }
}

export default async function AdminLayout() {
  const books = await getBooks()

  return <AdminPage books={books} />
}