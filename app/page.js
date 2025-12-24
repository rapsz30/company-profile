import Image from "next/image";
import DataImage from "@/public/data";
import HeroInfo from "@/components/HeroInfo";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center pt-10">
        <motion.div 
          className="py-10 text-center" 
          initial={{opacity:0, y:50, scale:0.8}} 
          animate={{opacity:1, y:0, scale:1}} 
          transition={{duration:1}}
        >
          <h1 className="sm:text-7xl text-5xl font-bold mb-12 bg-slate-800 bg-clip-text text-transparent">
            Cognifera Publishing
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Digital manuscript publishing system, upload your work, monitor the process, and publish.
          </p>
          <Link 
            href="/auth/login" 
            className="bg-slate-800 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl"
          >
            Start Publishing
          </Link>
        </motion.div>

        <div className="max-w-5xl mx-auto relative mt-10 w-full">
          <motion.div initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{delay:0.5}}>
            <Image 
              src={DataImage.Hero} 
              alt="Cognifera Hero" 
              className="rounded-3xl shadow-2xl object-cover h-[450px] w-full"
              priority 
            />
          </motion.div>
          <HeroInfo />
        </div>
      </section>

      <section className="mt-48" id="services">
        <motion.div 
          initial={{opacity:0}} 
          whileInView={{opacity:1}} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Layanan Utama Kami</h2>
          <div className="h-1.5 w-20 bg-slate-800 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">
          <motion.div className="shadow-2xl p-8 rounded-3xl border border-slate-50 bg-white" initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <i className="ri-book-open-fill ri-3x text-slate-700 mb-4 block"></i>
            <h3 className="font-bold text-2xl mb-3">Book Publishing</h3>
            <p className="text-base leading-relaxed text-slate-600">
              End-to-end services: Editing, Layout, ISBN, dan Penerbitan resmi.
            </p>
          </motion.div>

          <motion.div className="shadow-2xl p-8 rounded-3xl border border-slate-50 bg-white" initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}>
            <i className="ri-microscope-line ri-3x text-slate-700 mb-4 block"></i>
            <h3 className="font-bold text-2xl mb-3">Research Consultant</h3>
            <p className="text-base leading-relaxed text-slate-600">
              Pendampingan metodologi penelitian dan publikasi ilmiah berkualitas.
            </p>
          </motion.div>

          <motion.div className="shadow-2xl p-8 rounded-3xl border border-slate-50 bg-white" initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.4}}>
            <i className="ri-global-line ri-3x text-slate-700 mb-4 block"></i>
            <h3 className="font-bold text-2xl mb-3">OJS Management</h3>
            <p className="text-base leading-relaxed text-slate-600">
              Pengelolaan sistem jurnal ilmiah digital yang terintegrasi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mt-48 mb-20 py-20 bg-slate-50 rounded-[3rem] px-8 md:px-16" id="about">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
            <Image 
              src={DataImage.Proyek1} 
              alt="About Cognifera" 
              className="rounded-3xl shadow-xl border-4 border-white"
            />
          </motion.div>
          <motion.div initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
            <h2 className="text-4xl font-bold mb-6 text-slate-800">Tentang Cognifera</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Lahir dari pengalaman mengelola OJS dan resmi berdiri tahun 2024, <strong>PT Cognifera Education Academy</strong> hadir dengan visi membangun ekosistem digital terintegrasi bagi akademisi.
              </p>
              <p>
                Dengan legalitas resmi dari <strong>Puspresnas</strong>, kami menyediakan platform aman untuk mengelola alur kerja naskah mulai dari draf hingga mendapatkan ISBN.
              </p>
            </div>
            <div className="mt-8 p-5 bg-white rounded-2xl inline-flex items-center gap-4 shadow-sm border border-slate-200">
              <i className="ri-shield-check-fill text-green-600 ri-2x"></i>
              <span className="font-semibold text-slate-700 uppercase tracking-wider text-sm">Legalisasi Puspresnas Terverifikasi</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}