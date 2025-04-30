import Link from "next/link"
import { MobileMenu } from "./MobileMenu"
import { ThemeToggleButton } from "./ThemeToggleButton"
import { User } from "lucide-react"
import { Button } from "./ui/button" // 想定: "@/components/ui/button"

const navItems = [
    { label: "ホーム", href: "/" },
    { label: "問題演習", href: "/practice" },
    { label: "模擬試験", href: "/exam" },
]

const Navbar = () => {
    return (
        // ★ 全体を justify-between するために w-full を追加
        <div className="flex items-center justify-between w-full">
            {/* 左側：モバイルメニュー or ロゴ */}
            <div className="flex items-center gap-2">
                {/* モバイルメニュー（md未満で表示） */}
                <div className="md:hidden">
                    <MobileMenu navItems={navItems} />
                </div>

                {/* ロゴ */}
                {/* ★ 色指定を修正 */}
                <Link
                    href="/"
                    className="text-base sm:text-lg font-bold text-foreground hover:text-primary transition-colors" // text-gray-800 -> text-foreground, hover:text-indigo-600 -> hover:text-primary
                >
                    MT-Learning
                </Link>
            </div>

            {/* 中央：デスクトップ用ナビゲーション */}
            <nav className="hidden md:flex md:items-center">
                <ul className="flex space-x-4 lg:space-x-6 xl:space-x-8">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            {/* ★ ここはテーマ変数を使っているのでOK */}
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 右側：テーマ切替・ログイン */}
            <div className="flex items-center gap-1 sm:gap-2"> {/* gap調整 */}
                <ThemeToggleButton />
                <Link href="/login" aria-label="ログイン">
                    {/* ★ ログインボタンのスタイル */}
                    <Button variant="ghost" size="icon"> {/* ghost ボタンに変更 */}
                        <User className="h-[1.2rem] w-[1.2rem] text-foreground" /> {/* アイコンの色を text-foreground に */}
                    </Button>
                    {/* テキストボタンの場合の例 (参考)
                     <Button variant="default" size="sm" className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs">
                         ログイン
                     </Button>
                     */}
                </Link>
            </div>
        </div>
    )
}

export default Navbar