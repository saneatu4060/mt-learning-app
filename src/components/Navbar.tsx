import Link from "next/link";
import React from "react";

import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";

const Navbar = async () => {
    const session = await getAuthSession();
    return (
        <div className="fixed inset-x-0 top-0 bg-pink-100 dark:bg-pink-900 z-[10] h-fit border-b border-pink-300 py-2 shadow-md">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
                {/* Logo */}
                <Link href={"/"} className="flex items-center gap-2">
                    <p className="rounded-lg text-xl font-bold transition-all bg-pink-300 text-pink-900 py-2 px-4 shadow">
                        MT-learning
                    </p>
                </Link>
                <div className="flex items-center">
                    <ThemeToggle className="mr-4" />
                    {session?.user ? (
                        <UserAccountNav user={session.user} />
                    ) : (
                        <SignInButton text={"ログイン"} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
