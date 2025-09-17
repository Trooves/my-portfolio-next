'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Baptiste Kerroué</Link>
          
          {/* Menu pour mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">À propos</Link>
            <Link href="/projects" className="hover:text-blue-400 transition-colors">Projets</Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </nav>
        </div>
        
        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-3">
            <Link href="/" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>À propos</Link>
            <Link href="/projects" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projets</Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}