// app/components/ButtonLink.tsx
import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  variant?: 'light' | 'dark'; 
}

export const ButtonLink = ({
  href,
  children,
  className,
  target,
  rel,
  variant = 'light', 
  ...rest
}: ButtonLinkProps) => {
  const textColor = variant === 'dark' ? 'text-white' : 'text-black';
  const bgColor = variant === 'dark' ? 'bg-black' : 'bg-white';
  const borderColor = variant === 'dark' ? 'border-white' : 'border-black';
  const shadowColor = variant === 'dark' ? 'md:hover:shadow-[2px_2px_0px_#fff]' : 'md:hover:shadow-[2px_2px_0px_#000]';

  return (
    <Link
      href={href}
      className={`flex flex-row gap-2 items-center relative ${textColor} ${bgColor} font-semibold border ${borderColor} 
                  transition-all duration-300 ease-in-out transform 
                  md:hover:-translate-x-0.5 md:hover:-translate-y-0.5 ${shadowColor} ${className}`}
      target={target}
      rel={rel}
      {...rest}
    >
      {children}
    </Link>
  );
};
