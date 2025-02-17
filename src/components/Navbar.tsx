import Link from "next/link";
import React from "react";

const Navbar = async () => {
    return (
        <div className="fixed inset-x-0 top-0  py-3 ">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
                <Link href={"/"} className="flex items-center gap-2">
                    <p className="text-2xl font-semibold text-gray-600">MT Learning</p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
