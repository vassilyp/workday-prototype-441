import React from 'react';
import { NavLinks } from '../constants';

const LandingPage = () => {
  return (
    <div className="relative">
      <div className="bg-white p-16 flex flex-col gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
        <div className="text-4xl text-primary font-bold self-center text-center">
          LINKS
        </div>
        {NavLinks.map((link, index) => (
          <button key={link.path + index + link.path} onClick={() => window.location = link.path} className="hover:scale-125 font-bold bg-primary text-white px-4 py-2 rounded-full whitespace-nowrap w-min self-center">
            {link.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LandingPage