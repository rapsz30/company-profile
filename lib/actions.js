"use server"

import { revalidatePath } from "next/cache"
import prisma from "./prisma"

// Action untuk Menerima/Accept Buku
export async function acceptBookAction(bookId) {
  try {
    await prisma.book.update({
      where: { id: bookId },
      data: { status: "Published" }, // Mengubah status menjadi Published
    })

    revalidatePath("/dashboard/admin")
  } catch (error) {
    console.error("Gagal menerima buku:", error)
  }
}

// Action untuk Menghapus Buku (Tetap ada)
export async function deleteBookAction(bookId) {
  try {
    await prisma.book.delete({
      where: { id: bookId },
    })

    revalidatePath("/dashboard/admin")
  } catch (error) {
    console.error("Gagal menghapus buku:", error)
  }
}

// Action untuk Tambah Buku (Jika Anda masih menggunakannya)
export async function createBookAction(formData) {
  const title = formData.get("title")
  const author = formData.get("author")

  try {
    await prisma.book.create({
      data: {
        title,
        author,
        status: "Pending",
      },
    })
    revalidatePath("/dashboard/admin")
  } catch (error) {
    console.error("Gagal menambah buku:", error)
  }
}
