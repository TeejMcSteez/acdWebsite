"use client";

import { useState } from 'react';

export default function Menu() {
	const [open, setOpen] = useState(false);
	return (
    <nav className="relative m-2 p-2">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="p-2 focus:outline-none"
      >
        {/* Hamburger icon: three bars */}
        <div className="space-y-1 hover:invert-80">
          <span className={`block w-6 h-0.5 transition-transform ${open ? 'rotate-45 translate-y-[5px]' : ''} bg-gray-800`} />
          <span className={`block w-6 h-0.5 transition-opacity ${open ? 'opacity-0' : 'opacity-100'} bg-gray-800`} />
          <span className={`block w-6 h-0.5 transition-transform ${open ? '-rotate-45 -translate-y-[6px]' : ''} bg-gray-800`} />
        </div>
      </button>

      {/* Menu Panel */}
      <ul
        className={`
          absolute right-0 mt-2 w-40 bg-white shadow-lg rounded
          transition-[max-height,opacity] overflow-hidden
          ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
        style={{ transitionDuration: '300ms' }}
      >
        {['contact'].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}
               className="block px-4 py-2 hover:bg-gray-100"
            >
              {item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
	);
}
