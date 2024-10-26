// app/components/Navbar.tsx
'use client'

import { useState } from 'react';
import { CustomLink } from './Link';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonLink } from './ButtonLink';
import { HamburgerMenu } from './HamburgerMenu';
import { Icon } from './Icon';


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
    <nav className="bg-beige w-full px-4 py-3 fixed shadow-electricBlue shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold">
        <ButtonLink variant="light" className='w-full md:hidden  px-5 py-2 border-0 font-bold' href="/">
            <Icon name="cube" className='w-8 h-8 ' />
          </ButtonLink>
          <ButtonLink variant='light' className='w-full hidden md:flex border-2 md:border px-5 py-2 font-bold' href="/">
            <span className=''>Home</span>
          </ButtonLink>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2">
          <ButtonLink href="/blog" variant="light" className="border font-bold px-5 py-2">
            Blog
          </ButtonLink>
          <ButtonLink href="/about" variant="light" className="border font-bold px-5 py-2">
            About
          </ButtonLink>
          <ButtonLink href="/contact" variant="light"  className="border font-bold px-5 py-2">
            Contact
          </ButtonLink>
          <ButtonLink href="/sign-up" variant="dark" className="font-bold px-5 py-2">
            Sign-up
          </ButtonLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <HamburgerMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
         <AnimatePresence>
         {menuOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="md:hidden bg-transparent absolute inset-x-0 top-16 "
           >
             {['HOME', 'BLOG', 'ABOUT','SIGN-UP'].map((text, i) => (
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
