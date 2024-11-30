interface HamburgerMenuProps {
  toggleMenu: () => void;
  menuOpen: boolean;
}

export const HamburgerMenu = ({toggleMenu, menuOpen}:HamburgerMenuProps) => {
  return (
    <button onClick={toggleMenu} className="md:hidden h-8 w-8 focus:outline-none">
    <div className="grid justify-items-center gap-1.5">
      <span
        className={`h-1 w-8 bg-black transition-all duration-300 ${
          menuOpen ? 'rotate-45 translate-y-2.5' : ''
        }`}
      ></span>
      <span
        className={`h-1 w-8 bg-black transition-all duration-300 ${
          menuOpen ? 'scale-x-0' : ''
        }`}
      ></span>
      <span
        className={`h-1 w-8 bg-black transition-all duration-300 ${
          menuOpen ? '-rotate-45 -translate-y-2.5' : ''
        }`}
      ></span>
    </div>
  </button>
  )
}