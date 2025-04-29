"use client"

import React, { useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import SidebarComponent from "./Sidebar"
import { useExamStore } from "@/store/examStore"

export function QuizDrawer() {
    const [isOpen, setIsOpen] = React.useState(false)

    // ストアから必要な状態・アクションを取得
    const questions = useExamStore((state) => state.questions)
    const currentQuestionIndex = useExamStore((state) => state.currentQuestionIndex)
    const userAnswers = useExamStore((state) => state.userAnswers)
    const isFinished = useExamStore((state) => state.isFinished)
    const examResults = useExamStore((state) => state.examResults)
    const flags = useExamStore((state) => state.flags)
    const setCurrentIndex = useExamStore((state) => state.setCurrentIndex)
    const remainingTime = useExamStore((state) => state.remainingTime)

    const toggleDrawer = () => setIsOpen(!isOpen)

    // スクロール制御
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    // 問題選択ハンドラ
    const handleQuestionSelect = (index: number) => {
        setCurrentIndex(index)
        setIsOpen(false)
    }

    // 結果表示用配列を作成
    const showResultsArray = React.useMemo(() => Array(questions.length).fill(isFinished), [questions.length, isFinished])

    // 残り時間のフォーマット
    const formatTime = (totalSeconds: number | null): string => {
        if (totalSeconds === null || totalSeconds < 0) {
            return "--:--"
        }
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }

    return (
        <>
            {/* トリガーボタン */}
            <button
                onClick={toggleDrawer}
                className={cn(
                    "fixed left-0 top-1/2 z-30 -translate-y-1/2 transform rounded-r-md bg-blue-600 p-1 sm:p-2 text-white transition-all",
                    isOpen && "left-[280px] sm:left-[320px]",
                )}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
                {isOpen ? (
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
            </button>

            {/* ドロワー */}
            <div
                className={cn(
                    "fixed left-0 top-0 bottom-0 z-40 w-[280px] sm:w-[320px] -translate-x-full transform overflow-hidden bg-white shadow-lg transition-transform duration-200 ease-in-out flex flex-col",
                    isOpen && "translate-x-0",
                )}
                style={{
                    paddingTop: "env(safe-area-inset-top)",
                    paddingBottom: "env(safe-area-inset-bottom)",
                }}
            >
                {/* ヘッダー */}
                <div className="p-3 sticky top-0 bg-white z-10 border-b flex justify-between items-center">
                    <h2 className="text-base font-bold">問題一覧</h2>
                    {remainingTime !== null && (
                        <div className="text-xs font-medium text-red-600 flex items-center gap-1">
                            <span>残り時間: {formatTime(remainingTime)}</span>
                        </div>
                    )}
                </div>

                {/* サイドバーコンテンツ */}
                <div className="flex-grow overflow-y-auto">
                    <SidebarComponent
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                        userAnswers={userAnswers}
                        showResults={showResultsArray}
                        examResults={examResults}
                        flags={flags}
                        onQuestionSelect={handleQuestionSelect}
                    />
                </div>
            </div>

            {/* オーバーレイ */}
            {isOpen && <div className="fixed inset-0 z-20 bg-black/50" onClick={toggleDrawer} />}
        </>
    )
}
