"use client"
import { useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight, List, X } from "lucide-react"
import QuestionComponent from "@/components/QuestionComponent"
import Link from "next/link"
import { questiondata } from "@/data/question"
import SidebarComponent from "@/components/Sidebar"

const Learning = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const params = useParams()  // useParamsでparamsを取得
    const { categoryId } = params  // paramsからcategoryIdを取得
    const searchParams = useSearchParams();
    const categoryName = searchParams.get("year") || "カテゴリ名不明";
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
            {/* トグルボタンを右側に配置 */}
            <button
                className="lg:hidden p-2 bg-blue-600 text-white fixed top-3 right-4 z-50 rounded-xl shadow-md hover:bg-blue-700"
                onClick={toggleSidebar}
            >
                {isOpen ? <X /> : <List />}
            </button>

            {/* メインコンテンツの配置 */}
            <div className="flexed p-4  lg:p-8">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <Link
                        href={`/learning/${categoryId}?year=${encodeURIComponent(
                            categoryName
                        )}`}
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

            {/* サイドバーを右側に配置 */}
            <aside
                className={`fixed top-2 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "translate-x-full"
                    } lg:translate-x-0 lg:static max-w-xs rounded-xl`}
                style={{ height: "calc(100vh - 4rem)" }} // 高さを調整
            >
                <div className="p-4 h-full">
                    <h2 className="text-2xl font-bold mb-6">問題一覧</h2>
                    <SidebarComponent
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                    />
                </div>
            </aside>
        </>
    )
}

export default Learning
