// components/LeitorFacial_Components/CTAButton.tsx
import Link from 'next/link';

interface CTAButtonProps {
  label: string;
  href: string;
  className?: string;
}

export default function CTAButton({ label, href, className = '' }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl shadow transition duration-300 ${className}`}
    >
      {label}
    </Link>
  );
}
