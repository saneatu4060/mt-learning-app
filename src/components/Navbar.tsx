import Link from "next/link";
import React from "react";
import { MobileMenu } from "./MobileMenu";
import { LogOut } from "lucide-react";

const navItems = [
    { label: "ホーム", href: "/" },
    { label: "問題演習", href: "/practice" },
    { label: "模擬試験", href: "/exam" },
]

const Navbar = async () => {
    return (
        <div className="container mx-auto flex h-2 items-center justify-between ">
            {/* モバイルメニュー（左側） */}
            <div className="md:hidden">
                <MobileMenu navItems={navItems} />
            </div>

            {/* ロゴ（モバイルでは中央、デスクトップでは左） */}
            <div className="absolute left-1/2 -translate-x-1/2 transform md:static md:left-0 md:translate-x-0">
                MT-Learning
            </div>

            {/* デスクトップナビゲーション（中央） */}
            <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
                <ul className="flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href} className="text-sm font-medium text-gray-800 hover:text-gray-600">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* ログアウトボタン（右側） */}
            <div className="hidden md:block">
                <Link
                    href="/logout"
                    className="rounded bg-[#ff7a7a] px-4 py-2 text-sm font-medium text-white hover:bg-[#ff6666]"
                >
                    ログイン（未実装）
                </Link>
            </div>

            {/* モバイルログアウトアイコン（右側） */}
            {/* <div className="md:hidden">
                <Link href="/logout" className="p-2">
                    <LogOut />
                </Link>
            </div> */}
        </div>
    );
};

export default Navbar;
