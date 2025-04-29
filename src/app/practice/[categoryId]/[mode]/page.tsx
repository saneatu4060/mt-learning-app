"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import QuestionComponent from "@/components/QuestionComponent"
import { examData } from "@/data/examData"
import type { Question } from "@/types/examData"
import { Button } from "@/components/ui/button"

const PracticePage = () => {
    const params = useParams<{ categoryId: string; mode: string }>()
    const { categoryId, mode } = params

    // State
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState<Map<number, number[]>>(new Map())
    const [showResults, setShowResults] = useState<Map<number, boolean>>(new Map())

    // 問題データの読み込み
    useEffect(() => {
        const category = examData.find((cat) => cat.id === categoryId)
        let currentQuestions: Question[] = []
        if (category && (mode === "am" || mode === "pm")) {
            currentQuestions = category.sessions[mode]?.questions || []
        } else {
            console.error("Invalid categoryId or mode:", categoryId, mode)
        }

        setQuestions(currentQuestions)
        setCurrentQuestionIndex(0)
        setUserAnswers(new Map())
        setShowResults(new Map())
    }, [categoryId, mode])

    // 派生状態
    const currentQuestion = questions[currentQuestionIndex]
    const totalQuestions = questions.length
    const isFirstQuestion = currentQuestionIndex === 0
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1
    const currentShowResult = showResults.get(currentQuestionIndex) || false
    const currentUserAnswer = userAnswers.get(currentQuestionIndex) || []

    // イベントハンドラ
    const handlePreviousQuestion = () => {
        if (!isFirstQuestion) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    const handleAnswer = (index: number, answer: number[]) => {
        setUserAnswers((prev) => new Map(prev).set(currentQuestionIndex, answer))
        if (!questions[currentQuestionIndex]?.multipleAnswers) {
            handleConfirmAnswer()
        }
    }

    const handleConfirmAnswer = () => {
        if (!showResults.get(currentQuestionIndex)) {
            setShowResults((prev) => new Map(prev).set(currentQuestionIndex, true))
        }
    }

    const handleNextQuestion = () => {
        if (!isLastQuestion) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            console.log("Practice 完了！")
        }
    }

    // 問題データ準備中の表示
    if (questions.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] p-4">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">問題を読み込んでいます...</p>
                </div>
            </div>
        )
    }

    if (!currentQuestion) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] p-4">
                <p className="text-red-500">エラー: 問題を読み込めませんでした。インデックス: {currentQuestionIndex}</p>
            </div>
        )
    }

    return (
        <main className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-136px)]">
            {/* Header */}
            <header className="flex justify-start items-center mb-3 sm:mb-4 md:mb-6 flex-shrink-0">
                <Link
                    href={`/practice/${categoryId}`}
                    className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300 group"
                >
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-indigo-600 transition-colors" />
                    <span>午前/午後選択へ</span>
                </Link>
            </header>

            {/* 問題表示部 */}
            <section className="flex-grow mb-3 sm:mb-4 md:mb-6 overflow-auto">
                <QuestionComponent
                    key={currentQuestion.id}
                    question={currentQuestion}
                    questionIndex={currentQuestionIndex}
                    userAnswer={currentUserAnswer}
                    isFlagged={false}
                    showResult={currentShowResult}
                    onAnswer={handleAnswer}
                    onFlagToggle={() => { }}
                    onConfirmAnswer={handleConfirmAnswer}
                />
            </section>

            {/* フッターナビゲーション */}
            <footer className="flex justify-between items-center flex-shrink-0 pt-3 sm:pt-4 border-t">
                <Button
                    onClick={handlePreviousQuestion}
                    disabled={isFirstQuestion}
                    variant="outline"
                    size="default"
                    className="gap-1 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm"
                >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">戻る</span>
                </Button>
                <div className="text-xs sm:text-sm text-gray-600">
                    {currentQuestionIndex + 1} / {totalQuestions}
                </div>
                <Button
                    onClick={handleNextQuestion}
                    disabled={!currentShowResult || isLastQuestion}
                    variant="default"
                    size="default"
                    className="gap-1 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm"
                >
                    <span className="hidden sm:inline">{isLastQuestion ? "完了" : "次へ"}</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
            </footer>
        </main>
    )
}

export default PracticePage
