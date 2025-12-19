import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='container mx-auto px-4 mt-20'>
      <div className='py-10 border-t border-slate-100 flex items-center justify-between sm:flex-row flex-col sm:gap-0 gap-6'>
        <p className="text-slate-500 text-sm text-center">
          &copy; 2025 PT Cognifera Education Academy. All Rights Reserved.
        </p>
        <div className='flex gap-6 items-center text-slate-600'>
            <Link href={"#"} className="hover:text-slate-900 transition-colors">
              <i className="ri-facebook-circle-fill ri-xl"></i>
            </Link>
            <Link href={"#"} className="hover:text-slate-900 transition-colors">
              <i className="ri-instagram-line ri-xl"></i>
            </Link>
            <Link href={"#"} className="hover:text-slate-900 transition-colors">
              <i className="ri-linkedin-box-fill ri-xl"></i>
            </Link>
            <Link href={"#"} className="hover:text-slate-900 transition-colors">
              <i className="ri-twitter-x-line ri-xl"></i>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer