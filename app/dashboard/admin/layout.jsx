import prisma from "@/lib/prisma"
import AdminPage from "./page"

export default async function AdminLayout() {
  try {
    const books = await prisma.book.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return <AdminPage books={books} />
  } catch (error) {
    console.error("Error fetching books:", error)
    return <AdminPage books={[]} />
  }
}