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
    <nav className="bg-white w-full px-4 py-3 fixed z-10 mx-auto">
      <div className="container max-w-[900px] mx-auto flex justify-between items-center">
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
          <ButtonLink target="_blank" href="https://medium.com/@info.lauraspina" variant="light" className="border font-bold px-5 py-2">
            Blog
          </ButtonLink>
          <ButtonLink href="/about" variant="light" className="border font-bold px-5 py-2">
            About
          </ButtonLink>
          <ButtonLink href="/contact" variant="light"  className="border font-bold px-5 py-2">
            Contact
          </ButtonLink>
          <ButtonLink
            href="https://github.com/s-laura-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="light"
            className=" px-2 py-2 flex-shrink-0"
          >
            <Icon name="github" className="w-6 h-6" />
          </ButtonLink>
          {/* <ButtonLink href="/sign-up" variant="dark" className="font-bold px-5 py-2">
            Sign-up
          </ButtonLink> */}
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
             {['HOME', 'BLOG', 'ABOUT' ,'CONTACT'].map((text, i) => (
               <motion.div
                 key={text}
                 custom={i}
                 initial="hidden"
                 animate="visible"
                 exit="hidden"
                 variants={linkVariants}
                 className="w-full border-t-2 border-x-2 flex align-center justify-center border-black h-12  bg-white text-center last:shadow-md last:border-b-2"
               >
                 <CustomLink target={text === 'BLOG' ? "_blank" : ''} href={text === 'BLOG' ? 'https://medium.com/@info.lauraspina' : `/${text.toLowerCase()}`} className="text-black py-3 w-full h-full font-bold hover:{}">
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
