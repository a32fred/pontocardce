import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  href: string
  label: string
  primary?: boolean
}

export function CTAButton({ href, label, primary }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300",
        primary
          ? "bg-green-500 text-white hover:bg-green-600"
          : "border border-green-500 text-green-500 hover:bg-green-50"
      )}
    >
      {label}
    </Link>
  )
}
