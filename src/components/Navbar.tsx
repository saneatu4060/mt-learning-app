import Link from "next/link";
import React from "react";
// import UserAccountNav from "./UserAccountNav";
// import SignInButton from "./SignInButton";
// import { getAuthSession } from "@/lib/nextauth";

const Navbar = async () => {
    // const session = await getAuthSession();
    return (
        <div className="fixed inset-x-0 top-0  py-3 ">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
                {/* ロゴ */}
                <Link href={"/"} className="flex items-center gap-2">
                    <p className="text-2xl font-semibold text-gray-600">MT Learning</p>
                </Link>

                {/* ユーザーセッションの確認 */}
                {/* <div className="flex items-center">
                    {session?.user ? (
                        <UserAccountNav user={session.user} />
                    ) : (
                        <SignInButton text={"ログイン"} />
                    )}
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
