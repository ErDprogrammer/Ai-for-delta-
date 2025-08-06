'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Leaf } from 'lucide-react'; // ✅ Added Leaf icon
import {
  Home,
  Info,
  Image as ImageIcon,
  Mail,
  Grid,
  Shield,
  Activity,
  Heart,
  Briefcase,
} from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiDeltaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectorOpen, setSectorOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setSectorOpen(false);
        setDesktopDropdownOpen(false);
      }
    };

    if (menuOpen || desktopDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, desktopDropdownOpen]);

  const navLinks = [
    { label: 'Home', href: '/', icon: <Home size={18} /> },
    { label: 'About', href: '/#about', icon: <Info size={18} /> },
    {
      label: 'Sectors',
      dropdown: true,
      icon: <Grid size={18} />,
      children: [
        {
          label: 'AI in Agriculture',
          href: '/#ai-agriculture',
          icon: <Leaf size={16} />, // ✅ Correct Agriculture Icon
        },
        {
          label: 'AI in Healthcare',
          href: '/#ai-healthcare',
          icon: <Heart size={16} />,
        },
        {
          label: 'AI in Business',
          href: '/#ai-business',
          icon: <Briefcase size={16} />,
        },
        {
          label: 'AI in Security',
          href: '/#ai-security',
          icon: <Shield size={16} />,
        },
        {
          label: 'AI in Innovation',
          href: '/#ai-innovation',
          icon: <Activity size={16} />,
        },
      ],
    },
    { label: 'Gallery', href: '/#gallery', icon: <ImageIcon size={18} /> },
    { label: 'Contact', href: '/#contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className='bg-white/70 backdrop-blur-md border-b shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link
            href='/'
            className='text-blue-800 text-xl font-extrabold uppercase tracking-wide'
          >
            <Image
              src='/queenLogo.png'
              alt='Queen of Delta'
              width={100}
              height={60}
            />
          </Link>

          {/* Desktop Nav */}
          <div className='hidden md:flex space-x-6 items-center'>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className='relative'>
                  <button
                    onClick={() => setDesktopDropdownOpen((prev) => !prev)}
                    className='flex items-center gap-2 px-2 py-1 text-[#10163c] font-medium hover:text-[#61699e]'
                  >
                    {link.icon}
                    {link.label}
                    {desktopDropdownOpen ? (
                      <ChevronUp className='w-4 h-4' />
                    ) : (
                      <ChevronDown className='w-4 h-4' />
                    )}
                  </button>

                  <AnimatePresence>
                    {desktopDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className='absolute left-0 mt-2 w-52 bg-white/80 backdrop-blur-md border rounded shadow-lg z-50'
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setDesktopDropdownOpen(false)} // ✅ close dropdown
                            className='block px-4 py-2 text-sm text-[#10163c] hover:text-[#61699e] hover:bg-white/20 hover:backdrop-blur-sm rounded transition flex items-center gap-2'
                          >
                            {child.icon}
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setDesktopDropdownOpen(false)} // ✅ close dropdown if open
                  className='flex items-center gap-2 px-2 py-1 text-[#10163c] font-medium hover:text-[#61699e]'
                >
                  {link.icon}
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label='Toggle menu'
              className='text-black'
            >
              {menuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='md:hidden fixed top-16 inset-x-0 z-40 backdrop-blur-md bg-white/80 border-t px-4 pb-4 space-y-2 shadow-md'
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className='space-y-1'>
                  <button
                    onClick={() => setSectorOpen(!sectorOpen)}
                    className='w-full px-2 py-1 flex items-center justify-between gap-2 text-[#10163c] font-medium hover:text-[#61699e] hover:bg-white/20 hover:backdrop-blur-sm rounded transition'
                  >
                    <span className='flex items-center gap-2'>
                      {link.icon}
                      {link.label}
                    </span>
                    {sectorOpen ? (
                      <ChevronUp className='w-4 h-4' />
                    ) : (
                      <ChevronDown className='w-4 h-4' />
                    )}
                  </button>

                  <AnimatePresence>
                    {sectorOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className='ml-4 space-y-1'
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setSectorOpen(false);
                            }}
                            className='block px-2 py-1 text-[#10163c] font-medium hover:text-[#61699e] hover:bg-black/20 hover:backdrop-blur-sm rounded transition flex items-center gap-2'
                          >
                            {child.icon}
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setSectorOpen(false);
                  }}
                  className='block px-2 py-1 text-[#10163c] font-medium hover:text-[#61699e] hover:bg-black/20 hover:backdrop-blur-sm rounded transition flex items-center gap-2'
                >
                  {link.icon}
                  {link.label}
                </Link>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
