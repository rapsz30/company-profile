// src/components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar py-6 sticky top-0 bg-white/80 backdrop-blur-md z-999 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="text-3xl font-bold bg-slate-800 bg-clip-text text-transparent">
              Cognifera
            </h1>
          </div>
          <ul
            className={`menu flex items-center gap-10 md:static absolute ${
              active ? "top-20 opacity-100" : "top-400px opacity-0"
            } left-0 md:opacity-100 md:flex-row flex-col md:bg-transparent bg-slate-800 w-full md:w-auto md:py-0 py-10 text-white md:text-slate-700 transition-all duration-300 font-medium`}
          >
            <li>
              <Link href="/#home" onClick={() => setActive(false)}>
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/#services" onClick={() => setActive(false)}>
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setActive(false)}>
                Tentang Kami
              </Link>
            </li>
            <li className="md:ml-4">
              <Link
                href="/auth/login"
                className="bg-slate-800 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-all shadow-md inline-block"
              >
                Login
              </Link>
            </li>
          </ul>
          <div
            className="md:hidden flex items-center"
            onClick={() => setActive(!active)}
          >
            <i
              className={
                active
                  ? "ri-close-line ri-2x text-slate-800"
                  : "ri-menu-3-line ri-2x text-slate-800"
              }
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
