import { ModeToggle } from "@/app/(navbar-components)/mode-toggle";
import { Toaster } from "@/components/ui/toaster";
import { type Database } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LoginPage from "./(login-components)/login-page";
import UserNav from "./(navbar-components)/user-nav";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "T4SG Starter Project",
  description: "T4SG starter project 2023. Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Create supabase server component client and obtain user session from stored cookie
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" suppressHydrationWarning>
      {/* Hydration warning suppressed because of next-themes https://github.com/pacocoursey/next-themes */}
      <body>
        <Providers>
          <div className="flex-col md:flex">
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <ModeToggle />
                  <UserNav session={session} />
                </div>
              </div>
            </div>
            {/* Conditionally display website if logged in, else display login page */}
            <div className="flex-1 space-y-4 p-8 pt-6">{session ? children : <LoginPage />}</div>
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
    </nav>
  );
}
