'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href = '', children }) => {
  const path = usePathname();

  // href না থাকলে সরাসরি লিখাই ভালো
  if (!href) return null;

  const isActive =
    href === '/'
      ? path === '/'
      : typeof path === 'string' && path.startsWith(href);

  return (
    <Link
      href={href}
      className={isActive ? 'text-primary font-medium' : ''}
    >
      {children}
    </Link>
  );
};

export default Navlink;
