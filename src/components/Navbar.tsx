import Link from "next/link"
import { MobileMenu } from "./MobileMenu" // MobileMenu コンポーネントがある想定

const navItems = [
    { label: "ホーム", href: "/" },
    { label: "問題演習", href: "/practice" },
    { label: "模擬試験", href: "/exam" },
]

const Navbar = () => {
    return (
        <>
            {/* モバイルメニュー（左側） */}
            <div className="md:hidden">
                <MobileMenu navItems={navItems} />
            </div>

            {/* ロゴ（モバイルでは中央、デスクトップでは左） */}
            <div className="absolute left-1/2 -translate-x-1/2 transform md:static md:left-0 md:translate-x-0">
                <Link href="/" className="text-base sm:text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors">
                    MT-Learning
                </Link>
            </div>

            {/* デスクトップナビゲーション（中央） */}
            <nav className="hidden md:flex md:items-center">
                <ul className="flex space-x-4 lg:space-x-6 xl:space-x-8">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                className="text-xs lg:text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* ログイン/ログアウトボタン（右側） */}
            <div className="hidden md:flex items-center">
                <Link
                    href="/login"
                    className="rounded bg-blue-600 px-2 py-1 sm:px-3 sm:py-1.5 text-xs font-medium text-white hover:bg-blue-700 transition-colors"
                >
                    ログイン
                </Link>
            </div>
        </>
    )
}

export default Navbar
