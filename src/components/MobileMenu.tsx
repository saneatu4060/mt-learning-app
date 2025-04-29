"use client";

import { useState, useEffect, useRef } from "react"; // useRef を追加
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
                ref={buttonRef} // ボタンへの参照を設定
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" // focus スタイル追加
                aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu-items" // メニュー本体との関連付け
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* ドロップダウンメニュー */}
            {/* ★ absolute に変更し、ボタンのすぐ下に表示 */}
            <div
                ref={menuRef} // メニューへの参照を設定
                id="mobile-menu-items" // ボタンとの関連付け用ID
                className={cn(
                    "absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    "transition ease-out duration-100 transform", // アニメーション
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none" // 開閉状態
                )}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="mobile-menu-button" // ボタンとの関連付け (ボタンにid="mobile-menu-button"が必要だがaria-labelでも可)
                tabIndex={-1} // 直接フォーカスは不要
            >
                {/* py-1 はリスト全体の上下の僅かな余白 */}
                <nav className="py-1" role="none">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            // スタイル調整: block, px-4 py-2, text-sm
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => setIsOpen(false)} // クリックで閉じる
                            role="menuitem"
                            tabIndex={isOpen ? 0 : -1} // 開いている時だけフォーカス
                        >
                            {item.label}
                        </Link>
                    ))}
                    {/* モバイルメニューにログイン/ログアウトボタンも表示する場合 */}
                    <div className="mt-1 pt-1 border-t border-gray-100 px-3">
                        <Link
                            href="/login" // or logout
                            className="block w-full text-center rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-colors my-1" // 少し小さく
                            onClick={() => setIsOpen(false)}
                            role="menuitem"
                            tabIndex={isOpen ? 0 : -1}
                        >
                            ログイン {/* (未実装) */}
                        </Link>
                    </div>
                </nav>
            </div>
        </div>

    );
}