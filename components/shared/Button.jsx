'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 text-sm';

  const variants = {
    primary: 'px-6 py-2 bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/50 hover:scale-105',
    secondary: 'px-6 py-2 bg-card text-foreground border border-border hover:bg-secondary hover:border-accent',
    outline: 'px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground',
  };

  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
