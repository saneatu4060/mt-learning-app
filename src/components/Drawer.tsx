"use client"

import * as React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import SidebarComponent from "./Sidebar";
import { useEffect } from "react";

interface QuizDrawerProps {
    questions: {
        id: number;
        text: string;
    }[];
    currentQuestionIndex: number;
}

export function QuizDrawer({
    questions,
    currentQuestionIndex,
}: QuizDrawerProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // ドロワーが開いているときはスクロールを無効にする
        } else {
            document.body.style.overflow = "auto"; // ドロワーが閉じているときはスクロールを有効にする
        }

        // クリーンアップ関数で元の状態に戻す
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div className="relative flex min-h-screen">
            {/* トリガーボタン */}
            <button
                onClick={toggleDrawer}
                className={cn(
                    "fixed left-0 top-1/2 z-20 -translate-y-1/2 transform rounded-r-md bg-blue-600 p-2 text-white transition-all",
                    isOpen && "left-80"
                )}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
                {isOpen ? (
                    <ChevronLeft className="h-6 w-6" />
                ) : (
                    <ChevronRight className="h-6 w-6" />
                )}
            </button>

            {/* ドロワー */}
            <div
                className={cn(
                    "fixed rounded-lg left-0 top-20 z-50 w-80 -translate-x-full transform overflow-y-auto bg-white transition-transform duration-200 ease-in-out",
                    isOpen && "translate-x-0"
                )}
            >
                <div className="p-4">
                    <h2 className="text-lg font-bold p-2">問題一覧</h2>
                    <SidebarComponent
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                    />
                </div>
            </div>

            {/* オーバーレイ */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-0 bg-black/50"
                    onClick={toggleDrawer}
                />
            )}
        </div>
    );
}