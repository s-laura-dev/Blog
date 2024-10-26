// app/components/ButtonLink.tsx
import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink = ({ href, children, className }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex flex-row gap-2 items-center relative px-6 py-3 bg-beige text-electricBlue font-semibold
                 transition-all duration-300 ease-in-out 
                 transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#2563EB] ${className}`}
    >
      {children}
    </Link>
  );
};


