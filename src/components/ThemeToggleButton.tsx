// src/components/ThemeToggleButton.tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggleButton() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="テーマ切り替え">
                    {/* Sun アイコン (ライトモード時) / Moon アイコン (ダークモード時) */}
                    {/* ここでは常に両方描画し、CSSでダークモード時の表示を制御 */}
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">テーマ切り替え</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    ライト
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    ダーク
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}