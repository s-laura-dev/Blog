// app/components/ButtonLink.tsx
import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  rest?: any;
}

export const ButtonLink = ({ href, children, className,target,rel, ...rest }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex flex-row gap-2 items-center relative  bg-beige font-semibold
                 transition-all duration-300 ease-in-out 
                 transform md:hover:-translate-x-0.5 md:hover:-translate-y-0.5 md:hover:shadow-[2px_2px_0px_#2563EB] ${className}`}
      target={target}
      rel={rel}
      {...rest}
    >
      {children}
    </Link>
  );
};


