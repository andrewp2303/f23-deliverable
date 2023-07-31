import { Button } from "@/components/ui/button";
import { type Database } from "@/lib/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import UserNav from "./user-nav";

export default async function AuthStatus() {
  // Create supabase server component client and obtain user session from stored cookie
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/login">Log in</Link>
      </Button>
    );
  }

  return <UserNav session={session} />;
}
