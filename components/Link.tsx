// app/components/Link.tsx
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const CustomLink = ({ href, children, className, ...props }: CustomLinkProps) => {
  return (
    <Link href={href} className={`text-electricBlue hover-underline ${className} `} {...props}>
      {children}
    </Link>
  );
};


