"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { BookOpen, Users, FileText, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        <section id="beranda" className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image src="/assets/company.webp" alt="Cognifera Publishing" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-emerald-900/60" />
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">Cognifera Publishing</h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-100 animate-fade-in-delay leading-relaxed">
                Digital manuscript publishing system, upload your work, monitor the process, and publish
              </p>
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Publishing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Services</h2>
              <p className="text-slate-600 text-lg">Comprehensive publishing solutions for academics and researchers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <BookOpen className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Book Publishing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Upload, Review, ISBN, hingga Terbit. Kami mengelola seluruh proses penerbitan buku Anda dengan standar
                  profesional dan transparan.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Research Consultant</h3>
                <p className="text-slate-600 leading-relaxed">
                  Pendampingan riset berkualitas. Tim ahli kami siap membantu Anda menghasilkan penelitian yang
                  berkualitas dan berdampak.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <FileText className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">OJS Management</h3>
                <p className="text-slate-600 leading-relaxed">
                  Pengelolaan sistem jurnal digital. Platform Open Journal System yang efisien untuk publikasi jurnal
                  ilmiah Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/proyek2.jpeg"
                    alt="About Cognifera"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">About Cognifera</h2>
                  <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      Lahir dari pengalaman mengelola OJS dan resmi berdiri pada 2024,{" "}
                      <strong className="text-slate-900">PT Cognifera Education Academy</strong> hadir dengan visi
                      membangun ekosistem digital terintegrasi bagi para akademisi.
                    </p>
                    <p>
                      Dengan legalitas resmi dari <strong className="text-slate-900">Puspresnas</strong>, kami memadukan
                      standar penerbitan profesional dengan teknologi mutakhir. Kami menyediakan platform yang aman dan
                      transparan untuk mengelola seluruh alur naskah—mulai dari draft hingga mendapatkan ISBN.
                    </p>
                    <p className="font-semibold text-emerald-700">
                      Di Cognifera, kami mengubah riset menjadi jejak literasi yang abadi.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/auth/login"
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
