"use client";

import { useState, useEffect, useRef } from "react"; // useRef を追加
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface NavItem {
    label: string;
    href: string;
}

interface MobileMenuProps {
    navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null); // メニュー要素への参照
    const buttonRef = useRef<HTMLButtonElement>(null); // ボタン要素への参照

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // メニュー外をクリックしたら閉じる処理
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // メニュー要素とボタン要素が存在し、クリックされた場所がそのどちらでもない場合
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // クリーンアップ
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]); // isOpen が変わるたびにイベントリスナーを再設定

    return (
        // ★ md:hidden は Navbar 側にあるので削除し、相対位置の基準点にするため relative を追加
        <div className="relative">
            {/* ハンバーガーメニューボタン */}
            <button
                ref={buttonRef}
                onClick={toggleMenu}
                // ★ 色をテーマ対応に
                className="p-2 text-foreground/70 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary rounded-md"
                aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu-items"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* ドロップダウンメニュー */}
            {/* ★ absolute に変更し、ボタンのすぐ下に表示 */}
            <div
                ref={menuRef}
                id="mobile-menu-items"
                className={cn(
                    // ★ 背景、文字色、境界線をテーマ対応に (popoverを使用)
                    "absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-popover text-popover-foreground border shadow-lg focus:outline-none",
                    "transition ease-out duration-100 transform",
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                )}
                role="menu"
                aria-orientation="vertical"
                tabIndex={-1}
            >
                {/* py-1 はリスト全体の上下の僅かな余白 */}
                <nav className="py-1" role="none">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            // ★ 色、ホバー色をテーマ対応に
                            className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm" // rounded-sm追加
                            onClick={() => setIsOpen(false)}
                            role="menuitem"
                            tabIndex={isOpen ? 0 : -1}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* モバイルメニューにログイン/ログアウトボタンも表示する場合 */}
                    <div className="mt-1 pt-1 border-t border-border px-3 pb-1"> {/* pb-1 追加 */}
                        {/* ★ Button コンポーネントを使用 (variant="default" or "secondary") */}
                        <Link href="/login" passHref legacyBehavior>
                            <Button
                                variant="default" // or "secondary"
                                size="sm"
                                className="w-full my-1 text-xs bg-blue-500 text-white" // text-xs
                                onClick={() => setIsOpen(false)}
                                role="menuitem"
                                tabIndex={isOpen ? 0 : -1}
                            >
                                ログイン (未実装)
                            </Button>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>

    );
}