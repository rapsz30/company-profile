"use client"

import { useState } from "react"
import Link from "next/link"
import { LogOut, Inbox, Check, Trash2 } from "lucide-react"
import { createBookAction, acceptBookAction, deleteBookAction } from "@/lib/actions"

export default function AdminPage({ books = [] }) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const totalBooks = books.length
  const publishedCount = books.filter((b) => b.status === "Published").length
  const pendingCount = books.filter((b) => b.status === "Pending").length

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!title || !author) return
    
    const formData = new FormData()
    formData.append("title", title)
    formData.append("author", author)

    await createBookAction(formData)
    setTitle("")
    setAuthor("")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </Link>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Admin Dashboard</h1>
              <p className="text-xs text-slate-500">Kelola buku dan publikasi</p>
            </div>
          </div>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1">
            <LogOut className="w-4 h-4" />
            Keluar
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Total</p>
            <p className="text-2xl font-bold text-slate-800">{totalBooks}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Published</p>
            <p className="text-2xl font-bold text-green-600">{publishedCount}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Pending</p>
            <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <h2 className="font-semibold text-slate-800">Tambah Buku</h2>
            </div>
            <form onSubmit={handleCreate} className="p-4 space-y-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Judul buku"
                className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                required
              />
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Nama penulis"
                className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-slate-800 text-white p-2.5 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                Simpan
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <h2 className="font-semibold text-slate-800">Daftar Buku</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {books.length === 0 ? (
                <div className="p-8 text-center text-slate-400">
                  <Inbox className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Belum ada buku</p>
                </div>
              ) : (
                books.map((book) => (
                  <div key={book.id} className="p-4 flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-slate-800 truncate">{book.title}</p>
                      <p className="text-sm text-slate-500">{book.author}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {book.status === "Published" ? (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          Published
                        </span>
                      ) : (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                          Pending
                        </span>
                      )}
                      {book.status === "Pending" && (
                        <button
                          onClick={() => acceptBookAction(book.id)}
                          className="p-1.5 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteBookAction(book.id)}
                        className="p-1.5 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}