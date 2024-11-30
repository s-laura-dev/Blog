// app/components/Link.tsx
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export const CustomLink = ({ href, target, children, className, ...props }: CustomLinkProps) => {
  return (
    <Link href={href} target={target} className={`text-black ${className} `} {...props}>
      {children}
    </Link>
  );
};


