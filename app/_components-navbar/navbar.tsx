import { type Database } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  // Create supabase server component client and obtain user session from stored cookie
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      {session && (
        <Link href="/species" className="text-sm font-medium transition-colors hover:text-primary">
          Species
        </Link>
      )}
    </nav>
  );
}
