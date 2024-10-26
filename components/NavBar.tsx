// app/components/Navbar.tsx
'use client'

import { useState } from 'react';
import { CustomLink } from './Link';
import { Icon } from './Icon';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonLink } from './ButtonLink';
import Link from 'next/link';


const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i:any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-beige w-full px-4 py-3 fixed shadow-electricBlue">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold">
          <ButtonLink className='w-full' href="/">
            <Icon name="cube" className="w-6 h-6 block" />
            <span className=''>Home</span>
          </ButtonLink>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2">
          <ButtonLink href="/blog" className="border border-electricBlue font-bold">
            Blog
          </ButtonLink>
          <ButtonLink href="/about" className="text-electricBlue border border-electricBlue font-bold">
            About
          </ButtonLink>
          <ButtonLink href="/contact" className="text-electricBlue border border-electricBlue font-bold">
            Contact
          </ButtonLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button onClick={toggleMenu} className="md:hidden h-8 w-8 focus:outline-none">
          <div className="grid justify-items-center gap-1.5">
            <span
              className={`h-1 w-8 bg-electricBlue transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            ></span>
            <span
              className={`h-1 w-8 bg-electricBlue transition-all duration-300 ${
                menuOpen ? 'scale-x-0' : ''
              }`}
            ></span>
            <span
              className={`h-1 w-8 bg-electricBlue transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
         <AnimatePresence>
         {menuOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="md:hidden bg-transparent absolute inset-x-0 top-14 "
           >
             {['HOME', 'BLOG', 'ABOUT'].map((text, i) => (
               <motion.div
                 key={text}
                 custom={i}
                 initial="hidden"
                 animate="visible"
                 exit="hidden"
                 variants={linkVariants}
                 className="w-full border-t-2 border-x-2  border-electricBlue py-4  bg-beige text-center last:shadow-md last:border-b-2"
               >
                 <CustomLink href={`/${text.toLowerCase()}`} className="text-electricBlue font-bold hover:{}">
                   {text}
                 </CustomLink>
               </motion.div>
             ))}
           </motion.div>
         )}
       </AnimatePresence>
      
      )}
    </nav>
  );
};
