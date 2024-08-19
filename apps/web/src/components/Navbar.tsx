"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const session = useSession();

  return (
    <nav className="sticky top-0 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/">
            <h1 className="cursor-pointer text-xl font-bold">Logo</h1>
          </Link>

          <div className="flex cursor-pointer items-center gap-8 font-medium">
            <Link href="/">
              <h3>Home</h3>
            </Link>

            {session.data?.user.id ? (
              <>
                <Link href="/write">
                  <h3>Write</h3>
                </Link>
                <Link href="/profile">{session.data.user.name}</Link>
                <h3 onClick={() => signOut()}>Logout</h3>
              </>
            ) : (
              <Link href="login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
