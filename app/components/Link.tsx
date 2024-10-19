// app/components/Link.tsx
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink = ({ href, children, className }: CustomLinkProps) => {
  return (
    <Link href={href} className={`text-blue-600 hover:underline ${className}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
