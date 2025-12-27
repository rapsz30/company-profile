"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Mail, Lock, Loader2, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    if (password !== "123") {
      alert("Password salah! Gunakan password demo: 123")
      setLoading(false)
      return
    }

    if (email.includes("admin")) {
      router.push("/dashboard/admin")
    } else if (email.includes("member")) {
      router.push("/dashboard/member")
    } else {
      alert("Gunakan email dengan kata 'admin' atau 'member' untuk demo!")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-slate-800">Selamat Datang</h1>
          <p className="mt-1 text-slate-500 text-sm">Masuk ke akun Cognifera Anda</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-all text-sm"
                  placeholder="nama@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-all text-sm"
                  placeholder="Masukkan password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-800 text-white py-2.5 rounded-lg font-medium hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Memproses...
                </>
              ) : (
                "Masuk"
              )}
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-5 pt-5 border-t border-slate-100">
            <p className="text-center text-xs text-slate-400 mb-2">Demo credentials</p>
            <div className="flex gap-2 justify-center flex-wrap">
              <p className="px-2 py-1 bg-slate-50 rounded text-xs text-slate-600">admin@demo.com</p>
              <p className="px-2 py-1 bg-slate-50 rounded text-xs text-slate-600">member@demo.com</p>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">Password: 123</p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          <Link href="/" className="text-slate-700 font-medium hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke beranda
          </Link>
        </p>
      </div>
    </div>
  )
}
