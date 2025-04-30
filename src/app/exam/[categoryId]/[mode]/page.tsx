"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Clock, ArrowLeft, List } from "lucide-react"
import { useExamStore } from "@/store/examStore"
import { examData } from "@/data/examData"
import type { Question } from "@/types/examData"
import QuestionComponent from "@/components/QuestionComponent"
import ExamResultComponent from "@/components/ExamResultComponent"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogHeader, DialogFooter } from "@/components/ui/dialog"
import SidebarComponent from "@/components/Sidebar"

const formatTime = (totalSeconds: number | null): string => {
    if (totalSeconds === null || totalSeconds < 0) {
        return "--:--"
    }
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}

const ExamPage = () => {
    const params = useParams<{ categoryId: string; mode: string }>()
    const { categoryId, mode } = params

    // ストアから状態とアクションを個別に取得
    const questions = useExamStore((state) => state.questions)
    const currentQuestionIndex = useExamStore((state) => state.currentQuestionIndex)
    const userAnswers = useExamStore((state) => state.userAnswers)
    const flags = useExamStore((state) => state.flags)
    const isFinished = useExamStore((state) => state.isFinished)
    const initializeExam = useExamStore((state) => state.initializeExam)
    const setCurrentIndex = useExamStore((state) => state.setCurrentIndex)
    const finishExam = useExamStore((state) => state.finishExam)
    const updateAnswer = useExamStore((state) => state.updateAnswer)
    const toggleFlag = useExamStore((state) => state.toggleFlag)
    const startTime = useExamStore((state) => state.startTime)
    const remainingTime = useExamStore((state) => state.remainingTime)
    const setRemainingTime = useExamStore((state) => state.setRemainingTime)
    const examResults = useExamStore((state) => state.examResults)

    const TIME_LIMIT_MINUTES = 150
    const [isConfirmingFinish, setIsConfirmingFinish] = useState(false)
    const [isListDialogOpen, setIsListDialogOpen] = useState(false)

    const handleQuestionSelectFromDialog = (index: number) => {
        setCurrentIndex(index)
        setIsListDialogOpen(false) // ダイアログを閉じる
    }

    // 試験の初期化
    useEffect(() => {
        const category = examData.find((cat) => cat.id === categoryId)
        let examQuestions: Question[] = []
        if (category && (mode === "am" || mode === "pm")) {
            examQuestions = category.sessions[mode]?.questions || []
        } else {
            console.error("Invalid categoryId or mode for exam:", categoryId, mode)
        }

        if (examQuestions.length > 0) {
            initializeExam(examQuestions, TIME_LIMIT_MINUTES)
        } else {
            console.warn("No questions found for:", categoryId, mode)
        }
    }, [categoryId, mode, initializeExam])

    // タイマーロジック
    useEffect(() => {
        if (startTime && !isFinished && remainingTime !== null) {
            const intervalId = setInterval(() => {
                const now = Date.now()
                const elapsedSeconds = Math.floor((now - startTime) / 1000)
                const newRemainingTime = TIME_LIMIT_MINUTES * 60 - elapsedSeconds

                if (newRemainingTime <= 0) {
                    setRemainingTime(0)
                    finishExam()
                    clearInterval(intervalId)
                } else {
                    setRemainingTime(newRemainingTime)
                }
            }, 1000)

            return () => clearInterval(intervalId)
        }
    }, [startTime, isFinished, finishExam, setRemainingTime, remainingTime])

    const currentQuestion = questions[currentQuestionIndex]
    const totalQuestions = questions.length
    const isFirstQuestion = currentQuestionIndex === 0
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1

    const handlePreviousQuestion = () => {
        if (!isFirstQuestion) {
            setCurrentIndex(currentQuestionIndex - 1)
        }
    }

    const handleNextQuestion = () => {
        if (!isLastQuestion) {
            setCurrentIndex(currentQuestionIndex + 1)
        }
    }

    const handleFinishExamClick = () => {
        setIsConfirmingFinish(true)
    }

    const handleConfirmFinish = () => {
        finishExam()
        setIsConfirmingFinish(false)
    }

    const handleCancelFinish = () => {
        setIsConfirmingFinish(false)
    }

    // 試験終了時の表示
    if (isFinished) {
        return <ExamResultComponent categoryId={categoryId} />
    }

    // 問題データ準備中の表示
    if (!currentQuestion) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] p-4">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                    <p className="text-muted-foreground">試験を読み込んでいます...</p>
                </div>
            </div>
        )
    }

    // 試験中の表示
    return (
        <>
            <div className="flex min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-136px)] overflow-hidden">
                <main className="flex-grow flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
                    {/* Header */}
                    <header className="flex flex-wrap gap-2 justify-between items-center mb-3 sm:mb-4 md:mb-6 flex-shrink-0">
                        <Link
                            href={`/exam/${categoryId}`}
                            className="text-muted-foreground hover:text-primary text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300 group"
                        >
                            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors" />
                            <span>午前/午後選択へ</span>
                        </Link>

                        {remainingTime !== null && (
                            <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-red-600 order-last sm:order-none">
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>残り時間: {formatTime(remainingTime)}</span>
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="px-2 py-1 text-xs sm:text-sm"
                                onClick={() => setIsListDialogOpen(true)}
                            >
                                <List className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                                <span>問題一覧</span>
                            </Button>

                            <Button
                                onClick={handleFinishExamClick}
                                variant="destructive"
                                size="sm"
                                className="px-2 py-1 text-xs sm:text-sm md:px-3 md:py-1.5"
                            >
                                解答を終了する
                            </Button>
                        </div>
                    </header>

                    {/* 問題表示部 */}
                    <section className="flex-grow mb-3 sm:mb-4 md:mb-6 overflow-auto">
                        <QuestionComponent
                            key={currentQuestion.id}
                            question={currentQuestion}
                            questionIndex={currentQuestionIndex}
                            userAnswer={userAnswers.get(currentQuestionIndex) || []}
                            isFlagged={flags.has(currentQuestionIndex)}
                            showResult={false}
                            onAnswer={updateAnswer}
                            onFlagToggle={toggleFlag}
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
                            <span className="hidden sm:inline">前へ</span>
                        </Button>
                        <div className="text-xs sm:text-sm text-muted-foreground font-bold">
                            {currentQuestionIndex + 1} / {totalQuestions}
                        </div>
                        <Button
                            onClick={handleNextQuestion}
                            disabled={isLastQuestion}
                            variant="outline"
                            size="default"
                            className="gap-1 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm"
                        >
                            <span className="hidden sm:inline">次へ</span>
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                    </footer>
                </main>
            </div>

            {/* 問題一覧ダイアログ */}
            <Dialog open={isListDialogOpen} onOpenChange={setIsListDialogOpen}>
                <DialogContent className="max-w-md w-full max-h-[80vh] flex flex-col">
                    <DialogHeader className="pb-2">
                        <DialogTitle className="flex items-center justify-between">
                            <span>問題一覧</span>
                            {remainingTime !== null && (
                                <span className="text-xs font-medium text-red-600">残り時間: {formatTime(remainingTime)}</span>
                            )}
                        </DialogTitle>
                    </DialogHeader>

                    <div className="flex-grow overflow-y-auto py-2">
                        <SidebarComponent
                            questions={questions}
                            currentQuestionIndex={currentQuestionIndex}
                            userAnswers={userAnswers}
                            showResults={Array(questions.length).fill(isFinished)}
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

            {/* 解答終了確認ダイアログ */}
            <AlertDialog open={isConfirmingFinish} onOpenChange={setIsConfirmingFinish}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>試験を終了しますか？</AlertDialogTitle>
                        <AlertDialogDescription>
                            まだ解答していない問題があっても採点されます。本当によろしいですか？
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={handleCancelFinish}>解答に戻る</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirmFinish} className="bg-red-600 hover:bg-red-700">
                            解答を終了する
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default ExamPage
