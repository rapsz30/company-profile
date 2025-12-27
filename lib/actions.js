"use server"

import { revalidatePath } from "next/cache"
import prisma from "./prisma"

export async function acceptBookAction(bookId) {
  try {
    await prisma.book.update({
      where: { id: bookId },
      data: { status: "Published" },
    })
    revalidatePath("/dashboard/admin")
  } catch (error) {
    console.error(error)
  }
}

export async function deleteBookAction(bookId) {
  try {
    await prisma.book.delete({
      where: { id: bookId },
    })
    revalidatePath("/dashboard/admin")
  } catch (error) {
    console.error(error)
  }
}

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
    console.error(error)
  }
}