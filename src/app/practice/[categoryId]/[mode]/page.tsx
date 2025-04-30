"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowLeft, List } from "lucide-react"
import QuestionComponent from "@/components/QuestionComponent"
import { examData } from "@/data/examData"
import type { Question } from "@/types/examData"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import SidebarComponent from "@/components/Sidebar"

const PracticePage = () => {
    const params = useParams<{ categoryId: string; mode: string }>()
    const { categoryId, mode } = params

    // State
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState<Map<number, number[]>>(new Map())
    const [showResults, setShowResults] = useState<Map<number, boolean>>(new Map())
    const [flags, setFlags] = useState<Set<number>>(new Set())
    const [isListDialogOpen, setIsListDialogOpen] = useState(false)

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
        setFlags(new Set())
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

    const handleFlagToggle = (index: number) => {
        setFlags((prev) => {
            const newFlags = new Set(prev)
            if (newFlags.has(index)) {
                newFlags.delete(index)
            } else {
                newFlags.add(index)
            }
            return newFlags
        })
    }

    const handleQuestionSelectFromDialog = (index: number) => {
        setCurrentQuestionIndex(index)
        setIsListDialogOpen(false)
    }

    // 問題データ準備中の表示
    if (questions.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] p-4">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                    <p className="text-muted-foreground">試験を読み込んでいます...</p>
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

    // 結果表示用配列を作成
    const showResultsArray = Array(questions.length)
        .fill(false)
        .map((_, i) => showResults.get(i) || false)

    // 結果マップを作成（正解・不正解の判定）
    const examResults = new Map<number, boolean>()
    questions.forEach((question, index) => {
        const answer = userAnswers.get(index) || []
        if (answer.length > 0 && showResults.get(index)) {
            // 回答が同じ長さで、すべての要素が一致するかチェック
            const isCorrect =
                answer.length === question.correctAnswers.length &&
                answer.every((a) => question.correctAnswers.includes(a)) &&
                question.correctAnswers.every((a) => answer.includes(a))
            examResults.set(index, isCorrect)
        }
    })

    return (
        <main className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-136px)]">
            {/* Header */}
            <header className="flex justify-between items-center mb-3 sm:mb-4 md:mb-6 flex-shrink-0">
                <Link
                    href={`/practice/${categoryId}`}
                    className="text-muted-foreground hover:text-primary text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300 group"
                >
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors" />
                    <span>午前/午後選択へ</span>
                </Link>

                <Button
                    variant="outline"
                    size="sm"
                    className="px-2 py-1 text-xs sm:text-sm"
                    onClick={() => setIsListDialogOpen(true)}
                >
                    <List className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                    <span>問題一覧</span>
                </Button>
            </header>

            {/* 問題表示部 */}
            <section className="flex-grow mb-3 sm:mb-4 md:mb-6 overflow-auto">
                <QuestionComponent
                    question={currentQuestion}
                    questionIndex={currentQuestionIndex}
                    userAnswer={currentUserAnswer}
                    isFlagged={flags.has(currentQuestionIndex)}
                    showResult={currentShowResult}
                    onAnswer={handleAnswer}
                    onFlagToggle={() => handleFlagToggle(currentQuestionIndex)}
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
                <div className="text-xs sm:text-sm text-muted-foreground">
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

            {/* 問題一覧ダイアログ */}
            <Dialog open={isListDialogOpen} onOpenChange={setIsListDialogOpen}>
                <DialogContent className="max-w-md w-full max-h-[80vh] flex flex-col">
                    <DialogHeader className="pb-2">
                        <DialogTitle>問題一覧</DialogTitle>
                    </DialogHeader>

                    <div className="flex-grow overflow-y-auto py-2">
                        <SidebarComponent
                            questions={questions}
                            currentQuestionIndex={currentQuestionIndex}
                            userAnswers={userAnswers}
                            showResults={showResultsArray}
                            examResults={examResults}
                            flags={flags}
                            onQuestionSelect={handleQuestionSelectFromDialog}
                        />
                    </div>

                    <DialogFooter className="mt-auto pt-4 border-t">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                閉じる
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </main>
    )
}

export default PracticePage
