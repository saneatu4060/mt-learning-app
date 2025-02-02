"use client"

import { useState } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import QuestionComponent from "@/components/QuestionComponent"
import Link from "next/link"
import { questiondata } from "@/data/question"


export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const params = useParams()  // useParamsでparamsを取得
    const { categoryId } = params  // paramsからcategoryIdとmodeを取得
    const searchParams = useSearchParams();
    const categoryName = searchParams.get("name") || "カテゴリ名不明";
    const categoryIdNumber = parseInt(categoryId, 10);  // categoryIdを数値に変換
    const questions = questiondata[categoryIdNumber] || [];
    const currentQuestion = questions[currentQuestionIndex];
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
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

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <Link href={`/mode-select/${categoryId}?name=${encodeURIComponent(categoryName)}`} className="text-gray-600 hover:text-gray-900 text-sm">
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

                <div className="mt-8 flex justify-between items-center">
                    <button
                        onClick={handlePreviousQuestion}
                        disabled={isFirstQuestion}
                        className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors ${isFirstQuestion
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        <ChevronLeft className="w-4 h-4" />
                        前の問題
                    </button>

                    <div className="text-sm text-gray-500">
                        {currentQuestionIndex + 1} / {questions.length}
                    </div>

                    <button
                        onClick={handleNextQuestion}
                        disabled={isLastQuestion && showResults[currentQuestionIndex]}
                        className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors ${isLastQuestion && showResults[currentQuestionIndex]
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                    >
                        次の問題
                        {!showResults[currentQuestionIndex] && <ChevronRight className="w-4 h-4" />}
                    </button>

                </div>
            </div>
        </div>
    )
}


