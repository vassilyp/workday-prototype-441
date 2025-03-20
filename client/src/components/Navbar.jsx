import React from 'react'
import { NavLinks } from '../constants'

const Navbar = () => {
  return (
    <div className="w-full p-8 bg-white flex flex-row justify-center gap-32">
      {NavLinks.map((link, index) => (
        <button key={link + index} onClick={() => window.location = link.path} className="hover:scale-125 font-bold text-primary">
          {link.title}
        </button>
      ))}
    </div>
  )
}

export default Navbar