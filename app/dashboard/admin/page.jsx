"use client";

import { useState } from "react";
import { initialBooks } from "@/lib/data";
import { deleteBookAction } from "@/lib/actions"; // Import your new action

export default function MemberPage() {
  const [books, setBooks] = useState(initialBooks);
  const [title, setTitle] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();

    const newBook = {
      // FIX: Use Date.now() to ensure a unique ID regardless of array length
      id: Date.now(),
      title: title,
      author: "Me (Member)",
      status: "Pending",
    };

    setBooks([...books, newBook]);
    setTitle("");
    alert("Book uploaded successfully!");
  };

  const handleDelete = async (id) => {
    // Step B: Call the Server Action
    await deleteBookAction(id);
    
    // Update local state so the item disappears from the UI
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="min-h-screen p-8 bg-slate-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">My Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow border border-orange-100 h-fit">
          <h2 className="text-xl font-bold text-orange-600 mb-4">
            Upload Book
          </h2>

          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-600">
                Book Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="Enter title..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white p-2 rounded font-semibold hover:bg-orange-700 transition"
            >
              Submit Manuscript
            </button>
          </form>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            My Submissions
          </h2>

          <table className="w-full text-left rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-orange-50 text-gray-700">
                <th className="p-3">Title</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr
                  key={book.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-3 text-gray-600">{book.title}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold
                      ${
                        book.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : book.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {book.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    {/* Requirement: Delete (x) button calling the action */}
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="text-red-500 hover:text-red-700 font-bold px-2"
                    >
                      (x)
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {books.length === 0 && (
            <p className="text-center py-10 text-gray-400 italic">
              Belum ada naskah yang diunggah.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}