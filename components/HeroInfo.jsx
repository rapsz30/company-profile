const HeroInfo = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-4 mt-6 sm:mt-0 sm:absolute sm:bottom-6 sm:left-6 sm:right-6">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 text-center shadow-lg border border-white/20">
        <p className="text-3xl font-bold text-slate-800">80+</p>
        <p className="text-sm text-slate-500 mt-1">Proyek Selesai</p>
      </div>
      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 text-center shadow-lg border border-white/20">
        <p className="text-3xl font-bold text-slate-800">15+</p>
        <p className="text-sm text-slate-500 mt-1">Mitra Kerja</p>
      </div>
      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 text-center shadow-lg border border-white/20">
        <p className="text-3xl font-bold text-slate-800">180+</p>
        <p className="text-sm text-slate-500 mt-1">Karyawan</p>
      </div>
    </div>
  )
}

export default HeroInfo
