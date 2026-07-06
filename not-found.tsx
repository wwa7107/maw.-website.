import Link from "next/link";
import { Seal } from "@/components/ui/seal";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <Seal size={72} />
      <h1 className="mt-6 font-display text-3xl font-semibold text-navy-800 dark:text-cloud">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-slate-soft dark:text-navy-300">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-navy-800 px-7 py-3 text-sm font-semibold text-cloud transition hover:bg-royal-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
