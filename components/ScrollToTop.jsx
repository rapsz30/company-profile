"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
const ScrollToTop = () => {
  const ScrollToTop = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setActive(true);
        } else {
          setActive(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return()=>{
      window.removeEventListener("scroll", handleScroll);
      }
    });
  };

  return (
    <Link
      href={"#beranda"}
      className={'fixed bottom-10 right-10 bg-slate-800 text-white w-12 h-12 rounded-full text-center hover:bg-slate-700 cursor-pointer transition-all ${active? "opacity-100" : "opacity-0" }'}
    >
      <i className="ri-arrow-up-line ri-2x"></i>
    </Link>
  );
};

export default ScrollToTop;
