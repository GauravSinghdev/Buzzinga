import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--muted)] text-[var(--foreground)]">
      {/* Full-screen Animated Background */}
      <div className="absolute inset-0 animate-pulse bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 space-y-8 text-center">
        {/* 404 Title */}
        <h2 className="text-6xl font-extrabold tracking-tight text-primary">
          404
        </h2>

        {/* Error message */}
        <p className="text-xl font-semibold md:text-2xl">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        {/* Return Home Link */}
        <Link href={"/"}>
          <Button
            className="w-full py-7 tracking-widest"
          >
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
