"use client"
import { Check, X, Circle, Flag } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Question } from "@/types/examData"

interface SidebarComponentProps {
    questions: Question[]
    currentQuestionIndex: number
    userAnswers: Map<number, number[]>
    showResults: boolean[]
    examResults: Map<number, boolean>
    flags: Set<number>
    onQuestionSelect: (index: number) => void
}

const SidebarComponent = ({
    questions,
    currentQuestionIndex,
    userAnswers,
    showResults,
    examResults,
    flags,
    onQuestionSelect,
}: SidebarComponentProps) => {
    // 各問題の状態を判定
    const getQuestionStatus = (index: number) => {
        const userAnswer = userAnswers.get(index)
        const hasAnswered = userAnswer !== undefined && userAnswer.length > 0
        const isFlagged = flags.has(index)
        const result = examResults.get(index)
        const shouldShowResult = showResults[index]

        let status: "unanswered" | "answered" | "correct" | "incorrect" = "unanswered"
        let icon = isFlagged ? <Flag className="w-3 h-3 text-orange-500" /> : null
        let className = "bg-gray-100 hover:bg-gray-200 text-gray-700" // 未解答

        if (hasAnswered) {
            status = "answered"
            className = "bg-blue-50 hover:bg-blue-100 text-blue-800" // 解答済み
            if (!icon) icon = <Circle className="w-2 h-2 text-blue-500 fill-current" />
        }

        if (shouldShowResult && result !== undefined) {
            // 結果表示
            if (result) {
                // 正解
                status = "correct"
                className = "bg-green-100 hover:bg-green-200 text-green-800"
                icon = <Check className="w-3 h-3 text-green-600" />
            } else {
                // 不正解
                status = "incorrect"
                className = "bg-red-100 hover:bg-red-200 text-red-800"
                icon = <X className="w-3 h-3 text-red-600" />
            }
            if (isFlagged)
                icon = (
                    <>
                        <Flag className="w-3 h-3 text-orange-500 mr-1" />
                        {icon}
                    </>
                ) // フラグ＋結果アイコン
        } else if (isFlagged && !icon && status === "unanswered") {
            // 未解答でフラグのみ
            icon = <Flag className="w-3 h-3 text-orange-500" />
            className = "bg-orange-50 hover:bg-orange-100 text-orange-800" // フラグ付き未解答
        } else if (isFlagged && !icon && status === "answered") {
            // 解答済みでフラグのみ
            icon = <Flag className="w-3 h-3 text-orange-500" />
            // className は answered のまま
        }

        return { status, icon, className }
    }

    return (
        <div className="p-2">
            <ul className="space-y-1">
                {questions.map((question, index) => {
                    const { icon, className } = getQuestionStatus(index)
                    const isCurrent = index === currentQuestionIndex

                    return (
                        <li key={question.id}>
                            <button
                                onClick={() => onQuestionSelect(index)}
                                className={cn(
                                    "block w-full text-left px-2 py-1.5 rounded text-xs transition-colors",
                                    className,
                                    isCurrent && "ring-2 ring-blue-500",
                                )}
                                title={question.text}
                            >
                                <div className="flex items-center gap-1.5">
                                    <span className="font-semibold min-w-[24px]">Q{question.id}.</span>
                                    <span className="truncate flex-1 pr-1">
                                        {question.text.replace(/\*.*?\*/g, "").replace(/(\r\n|\n|\r)/gm, " ")}
                                    </span>
                                    {icon && <span className="flex-shrink-0">{icon}</span>}
                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SidebarComponent
