"use client"
import { useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import QuestionComponent from "@/components/QuestionComponent"
import Link from "next/link"
import { questiondata } from "@/data/question"
import SidebarComponent from "@/components/Sidebar"


const Learning = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const params = useParams()  // useParamsでparamsを取得
    const { categoryId } = params  // paramsからcategoryIdを取得
    const searchParams = useSearchParams();
    const categoryName = searchParams.get("name") || "カテゴリ名不明";
    const categoryIdNumber = parseInt(Array.isArray(categoryId) ? categoryId[0] : categoryId || "0", 10);  // categoryIdを数値に変換
    const questions = questiondata[categoryIdNumber] || [];
    const currentQuestion = questions[currentQuestionIndex];
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const [userAnswers, setUserAnswers] = useState<number[][]>(questions.map(() => []))
    const [showResults, setShowResults] = useState<boolean[]>(questions.map(() => false))

    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => setIsOpen(!isOpen)

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
        <>
            <button
                className={`fixed top-8 left-4 z-50 p-2 bg-blue-600 text-white rounded-full absolute transition-all duration-500 ease-in-out ${isOpen ? "left-0 translate-x-60" : "left-0"} `}
                onClick={toggleSidebar}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <aside
                className={`fixed top-5 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? " translate-x-0  " : "-translate-x-full"
                    } lg:translate-x-0 lg:static  max-w-xs rounded-xl`}
            >
                <div className=" p-4 h-full  ">
                    <h2 className="text-xl font-bold mb-4">問題一覧</h2>
                    <SidebarComponent questions={questions} currentQuestionIndex={currentQuestionIndex} />
                </div>
            </aside>

            <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">

                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <Link href={`/learning/${categoryId}?name=${encodeURIComponent(categoryName)}`} className=" hover:text-gray-900 text-sm">
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
                        Back
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

                        {!showResults[currentQuestionIndex] ? ("Answer") : ("Next")}
                        {!showResults[currentQuestionIndex] ? (null) : <ChevronRight className="w-4 h-4" />}
                    </button>
                </div>

            </div>

        </>

    )
}

export default Learning