"use client"
import type React from "react"
import { Check, X, Circle, Flag } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Question } from "@/types/examData" // 型定義をインポート

interface SidebarComponentProps {
    questions: Question[]
    currentQuestionIndex: number
    userAnswers: Map<number, number[]>
    showResults: boolean[] // practiceモードの結果表示タイミング or examモードの isFinished ベース配列
    examResults: Map<number, boolean> // examモードの最終結果
    flags: Set<number> // examモードのフラグ
    onQuestionSelect: (index: number) => void
}

// 状態を示す文字列型
type QuestionStatus = "unanswered" | "answered" | "correct" | "incorrect"

// 状態と対応するアイコンを返すヘルパー関数
const getQuestionStatus = (
    index: number,
    questions: Question[],
    userAnswers: Map<number, number[]>,
    showResults: boolean[],
    examResults: Map<number, boolean>,
    flags: Set<number>,
): { status: QuestionStatus; icon: React.ReactNode | null } => {
    const userAnswer = userAnswers.get(index)
    const hasAnswered = userAnswer !== undefined && userAnswer.length > 0
    const isFlagged = flags.has(index)
    const result = examResults.get(index) // exam の結果 (完了後)
    const shouldShowResult = showResults[index] // practice の結果表示 or exam 完了フラグ

    let status: QuestionStatus = "unanswered"
    const flagIcon = isFlagged ? <Flag className="w-3 h-3 text-orange-500" /> : null
    let resultIcon: React.ReactNode | null = null

    if (hasAnswered) {
        status = "answered"
        // 解答済みアイコン (結果表示前)
        resultIcon = <Circle className="w-2 h-2 text-blue-600 dark:text-blue-400 fill-current" />
    }

    if (shouldShowResult && result !== undefined) {
        // 結果表示時 (practice or exam完了後)
        if (result) {
            // 正解
            status = "correct"
            resultIcon = <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
        } else {
            // 不正解
            status = "incorrect"
            resultIcon = <X className="w-3 h-3 text-red-600 dark:text-red-400" />
        }
    }

    // フラグと結果アイコンを組み合わせる (フラグ優先表示)
    const finalIcon = flagIcon ? (
        resultIcon ? (
            <>
                <span className="flex-shrink-0">{flagIcon}</span>
                <span className="flex-shrink-0">{resultIcon}</span>
            </>
        ) : (
            flagIcon
        )
    ) : (
        resultIcon
    )

    return { status, icon: finalIcon }
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
    return (
        <div className="px-2">
            <ul className="space-y-1.5">
                {questions.map((question, index) => {
                    const { status, icon } = getQuestionStatus(
                        index,
                        questions, // 関数の引数として渡す (ただし現状の実装では不要)
                        userAnswers,
                        showResults,
                        examResults,
                        flags,
                    )
                    const isCurrent = index === currentQuestionIndex

                    return (
                        <li key={`${question.id}-${index}`}>
                            <button
                                onClick={() => onQuestionSelect(index)}
                                className={cn(
                                    "block w-full text-left px-2 py-1.5 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm transition-colors duration-150",
                                    // 状態に応じたテーマ対応クラス
                                    status === "unanswered" &&
                                    "bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                    status === "answered" && "bg-blue-500/10 text-blue-700 dark:text-blue-300 hover:bg-blue-500/20",
                                    status === "correct" && "bg-green-500/10 text-green-700 dark:text-green-300 hover:bg-green-500/20",
                                    status === "incorrect" && "bg-red-500/10 text-red-700 dark:text-red-400 hover:bg-red-500/20",
                                    // 現在の問題ハイライト
                                    isCurrent && "ring-2 ring-offset-1 ring-primary dark:ring-offset-background",
                                )}
                                title={question.text} // ホバーで全文表示
                            >
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    {/* アイコン表示部分 */}
                                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-4">{icon}</span>
                                    <span className="font-semibold flex-shrink-0 min-w-[28px] text-right">
                                        {/* 幅を少し確保 */}Q{question.id}.
                                    </span>
                                    <span className="truncate flex-grow pr-1">
                                        {/* Markdown 等を除去したプレーンテキストが良いかも */}
                                        {question.text.replace(/(\*|\n|#|`|\\)/g, "").split("。")[0]} {/* 例: 最初の文だけ表示 */}
                                    </span>
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
