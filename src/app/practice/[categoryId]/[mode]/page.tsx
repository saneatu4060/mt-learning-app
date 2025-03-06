"use client"
import { useState } from "react"
import { useParams, usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import QuestionComponent from "@/components/QuestionComponent"
import Link from "next/link"
import { questiondata } from "@/data/question"
import { QuizDrawer } from "@/components/Drawer"

const Learning = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const params = useParams()
    const { categoryId } = params
    const pathname = usePathname()
    const lastPart = pathname.split('/').pop() || "0"
    const questions = questiondata[parseInt(lastPart)] || []
    const currentQuestion = questions[currentQuestionIndex]
    const isFirstQuestion = currentQuestionIndex === 0
    const isLastQuestion = currentQuestionIndex === questions.length - 1
    const [userAnswers, setUserAnswers] = useState<number[][]>(questions.map(() => []))
    const [showResults, setShowResults] = useState<boolean[]>(questions.map(() => false))

    const handlePreviousQuestion = () => {
        if (!isFirstQuestion) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    const handleAnswer = (selectedAnswers: number[]) => {
        const newUserAnswers = [...userAnswers]
        newUserAnswers[currentQuestionIndex] = selectedAnswers
        setUserAnswers(newUserAnswers)
    }

    const handleNextQuestion = () => {
        if (!showResults[currentQuestionIndex]) {
            const newShowResults = [...showResults]
            newShowResults[currentQuestionIndex] = true
            setShowResults(newShowResults)
        } else if (!isLastQuestion) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    const handleQuestionSelect = (index: number) => {
        setCurrentQuestionIndex(index)
    }

    return (
        <>
            <div className="flexed p-4 lg:p-8">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <Link
                        href={`/practice/${categoryId}`}
                        className="hover:text-gray-800 text-gray-600 text-sm"
                    >
                        ← 選択画面へ
                    </Link>
                </div>
                {currentQuestion ? (
                    <QuestionComponent
                        question={currentQuestion}
                        userAnswer={userAnswers[currentQuestionIndex]}
                        showResult={showResults[currentQuestionIndex]}
                        onAnswer={handleAnswer}
                    />
                ) : (
                    <p className="text-gray-600">未掲載、順次更新予定</p>
                )}
                <div className="mt-6 sm:mt-8 flex justify-between items-center">
                    <button
                        onClick={handlePreviousQuestion}
                        disabled={isFirstQuestion}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isFirstQuestion
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        <ChevronLeft className="w-4 h-4" />
                        戻る
                    </button>

                    <div className="text-sm text-gray-500">
                        {currentQuestionIndex + 1} / {questions.length}
                    </div>

                    <button
                        onClick={handleNextQuestion}
                        disabled={isLastQuestion && showResults[currentQuestionIndex]}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isLastQuestion && showResults[currentQuestionIndex]
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                    >
                        {!showResults[currentQuestionIndex] ? "答え" : "進む"}
                        {!showResults[currentQuestionIndex] ? null : (
                            <ChevronRight className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>

            <QuizDrawer
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                onQuestionSelect={handleQuestionSelect}
            />
        </>
    )
}

export default Learning