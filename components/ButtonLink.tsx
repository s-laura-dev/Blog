// app/components/ButtonLink.tsx
import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  variant?: 'light' | 'dark'; // Add variant prop
}

export const ButtonLink = ({
  href,
  children,
  className,
  target,
  rel,
  variant = 'light', // Default to "light" variant
  ...rest
}: ButtonLinkProps) => {
  // Conditional styles based on the variant
  const textColor = variant === 'dark' ? 'text-beige' : 'text-electricBlue';
  const bgColor = variant === 'dark' ? 'bg-electricBlue' : 'bg-beige';
  const borderColor = variant === 'dark' ? 'border-beige' : 'border-electricBlue';
  const shadowColor = variant === 'dark' ? 'md:hover:shadow-[2px_2px_0px_#f5f3e7]' : 'md:hover:shadow-[2px_2px_0px_#2563EB]';

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
