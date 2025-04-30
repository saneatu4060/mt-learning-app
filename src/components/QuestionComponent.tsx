"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { Flag, FlagOff, Check, X } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button"
import type { Question } from "@/types/examData"
import { cn } from "@/lib/utils"

interface QuestionComponentProps {
    question: Question
    questionIndex: number
    userAnswer: number[]
    isFlagged: boolean
    showResult: boolean
    onAnswer: (index: number, answer: number[]) => void
    onFlagToggle: (index: number) => void
    onConfirmAnswer?: () => void
}

type OptionStatus = "default" | "selected" | "correct" | "incorrect"
const getOptionStatus = (
    index: number,
    isCorrectOption: boolean,
    userAnswer: number[],
    showResult: boolean,
): OptionStatus => {
    const isSelected = userAnswer.includes(index)
    if (showResult) {
        if (isCorrectOption) return "correct"
        if (isSelected) return "incorrect"
    } else if (isSelected) {
        return "selected" // 結果表示前で選択中
    }
    return "default" // デフォルト（未選択 or 結果表示後に未選択だったもの）
}

const QuestionComponent = ({
    question,
    questionIndex,
    userAnswer,
    isFlagged,
    showResult,
    onAnswer,
    onFlagToggle,
    onConfirmAnswer,
}: QuestionComponentProps) => {
    const handleRadioChange = (value: string) => {
        const newValue = Number.parseInt(value)
        if (!isNaN(newValue)) {
            onAnswer(questionIndex, [newValue])
            if (onConfirmAnswer) {
                onConfirmAnswer()
            }
        }
    }

    const handleCheckboxChange = (checked: boolean | "indeterminate", optionIndex: number) => {
        const currentAnswer = userAnswer
        const newAnswer = checked ? [...currentAnswer, optionIndex] : currentAnswer.filter((i) => i !== optionIndex)
        onAnswer(questionIndex, newAnswer)
    }

    const handleFlagClick = () => {
        onFlagToggle(questionIndex)
    }

    const isImagePath = (text: string): boolean => {
        return /^\/.*\.(png|jpe?g|gif)$/i.test(text)
    }

    return (
        <div className={cn(
            "rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto",
            "bg-white/60 dark:bg-slate-800/90", // ライト/ダーク背景
            "border border-gray-100 dark:border-slate-700/50", // 境界線
            "backdrop-blur-md"
        )}>
            <div className="space-y-4 sm:space-y-5">
                {/* 問題番号とフラグボタン */}
                <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">{question.id}問目</h3>
                    <Button onClick={handleFlagClick} variant="ghost" size="sm" className="h-8 w-8 p-0 sm:h-9 sm:w-9">
                        {isFlagged ? (
                            <FlagOff className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                        ) : (
                            <Flag className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-orange-500" />
                        )}
                    </Button>
                </div>

                {/* 問題文と画像 - 背景色と枠線を強調 */}
                <div className="p-3 sm:p-4 md:p-5 border-2 rounded-md bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 shadow-sm space-y-3 sm:space-y-4">
                    <div className="text-sm sm:text-base  whitespace-pre-wrap">
                        <ReactMarkdown>{question.text}</ReactMarkdown>
                    </div>
                    {question.image?.url && (
                        <div className="text-center">
                            <Image
                                src={question.image.url || "/placeholder.svg"}
                                alt={`Question ${question.id} Image`}
                                width={300}
                                height={200}
                                style={{ display: "inline-block", maxWidth: "100%", height: "auto" }}
                                priority
                                className="max-w-full"
                            />
                        </div>
                    )}
                </div>

                {/* 選択肢ヘッダー - 選択肢との区別を明確にするためのラベル */}
                <div className="text-sm font-medium text-muted-foreground px-1">選択肢:</div>

                {/* 選択肢 */}
                {question.multipleAnswers ? (
                    // チェックボックス
                    <div className="space-y-2 sm:space-y-3">
                        {question.options.map((option, index) => {
                            const isCorrect = question.correctAnswers.includes(index)
                            const status = getOptionStatus(index, isCorrect, userAnswer, showResult)
                            return (
                                <label
                                    key={index}
                                    className={cn(
                                        "flex items-start sm:items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg border text-sm sm:text-base transition-colors",
                                        status === "default" && "bg-card border-border hover:bg-accent",
                                        status === "selected" &&
                                        "bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50", // 選択中ハイライト
                                        status === "correct" &&
                                        "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-green-900 dark:text-green-200", // 正解色
                                        status === "incorrect" &&
                                        "bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 text-red-900 dark:text-red-200", // 不正解色
                                        showResult ? "cursor-default" : "cursor-pointer", // 結果表示後はカーソル変更
                                    )}
                                >
                                    <Checkbox
                                        id={`option-${questionIndex}-${index}`}
                                        className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 sm:mt-0"
                                        checked={userAnswer.includes(index)}
                                        onCheckedChange={(checked) => handleCheckboxChange(checked, index)}
                                        disabled={showResult}
                                    />
                                    <div
                                        className={cn(
                                            "flex-grow",
                                            status === "correct"
                                                ? "text-green-900 dark:text-green-200"
                                                : status === "incorrect"
                                                    ? "text-red-900 dark:text-red-200"
                                                    : status === "selected"
                                                        ? "text-blue-900 dark:text-blue-200"
                                                        : "text-card-foreground", // デフォルト
                                        )}
                                    >
                                        {isImagePath(option) ? (
                                            <Image
                                                src={option || "/placeholder.svg"}
                                                alt={`選択肢 ${index + 1}`}
                                                width={240}
                                                height={240}
                                                className="max-w-full h-auto"
                                            />
                                        ) : (
                                            <span className="leading-normal">
                                                <ReactMarkdown>{option}</ReactMarkdown>
                                            </span>
                                        )}
                                    </div>
                                    {showResult && (
                                        <span
                                            className={cn(
                                                status === "correct" && "text-green-600 dark:text-green-400",
                                                status === "incorrect" && "text-red-600 dark:text-red-400",
                                            )}
                                        >
                                            {isCorrect ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <X className="w-3 h-3 sm:w-4 sm:h-4" />}
                                        </span>
                                    )}
                                </label>
                            )
                        })}
                        {onConfirmAnswer && !showResult && (
                            <Button
                                onClick={onConfirmAnswer}
                                disabled={userAnswer.length === 0}
                                className="mt-3 sm:mt-4 w-full sm:w-auto text-xs sm:text-sm"
                            >
                                回答を確定して判定
                            </Button>
                        )}
                    </div>
                ) : (
                    // ラジオボタン
                    <RadioGroup
                        value={userAnswer[0]?.toString()}
                        onValueChange={handleRadioChange}
                        className="space-y-2 sm:space-y-3"
                        disabled={showResult}
                    >
                        {question.options.map((option, index) => {
                            const isCorrect = question.correctAnswers.includes(index)
                            const status = getOptionStatus(index, isCorrect, userAnswer, showResult)
                            return (
                                <label
                                    key={index}
                                    className={cn(
                                        "flex items-start sm:items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg border text-sm sm:text-base transition-colors",
                                        status === "default" && "bg-card border-border hover:bg-accent",
                                        status === "selected" &&
                                        "bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50",
                                        status === "correct" &&
                                        "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-green-900 dark:text-green-200",
                                        status === "incorrect" &&
                                        "bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 text-red-900 dark:text-red-200",
                                        showResult ? "cursor-default" : "cursor-pointer",
                                    )}
                                >
                                    <RadioGroupItem
                                        value={index.toString()}
                                        id={`option-${questionIndex}-${index}`}
                                        className="mt-0.5 sm:mt-0"
                                    />
                                    <div
                                        className={cn(
                                            "flex-grow",
                                            status === "correct"
                                                ? "text-green-900 dark:text-green-200"
                                                : status === "incorrect"
                                                    ? "text-red-900 dark:text-red-200"
                                                    : status === "selected"
                                                        ? "text-blue-900 dark:text-blue-200"
                                                        : "text-card-foreground", // デフォルト
                                        )}
                                    >
                                        {isImagePath(option) ? (
                                            <Image
                                                src={option || "/placeholder.svg"}
                                                alt={`選択肢 ${index + 1}`}
                                                width={240}
                                                height={240}
                                                className="max-w-full h-auto"
                                            />
                                        ) : (
                                            <span className="leading-normal">
                                                <ReactMarkdown>{option}</ReactMarkdown>
                                            </span>
                                        )}
                                    </div>
                                    {showResult && (
                                        <span
                                            className={cn(
                                                status === "correct" && "text-green-600 dark:text-green-400",
                                                status === "incorrect" && "text-red-600 dark:text-red-400",
                                            )}
                                        >
                                            {isCorrect ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <X className="w-3 h-3 sm:w-4 sm:h-4" />}
                                        </span>
                                    )}
                                </label>
                            )
                        })}
                    </RadioGroup>
                )}
            </div>
        </div>
    )
}

export default QuestionComponent
