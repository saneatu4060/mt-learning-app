"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { Flag, FlagOff, Check, X } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button"
import type { Question } from "@/types/examData"

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

    const getBgColor = (optionIndex: number, isCorrectOption: boolean): string => {
        if (!showResult) return "bg-white/70"
        const isSelected = userAnswer.includes(optionIndex)
        if (isCorrectOption) return "bg-green-100"
        if (isSelected) return "bg-red-100"
        return "bg-white/70"
    }

    const isImagePath = (text: string): boolean => {
        return /^\/.*\.(png|jpe?g|gif)$/i.test(text)
    }

    return (
        <div className="space-y-3 sm:space-y-4">
            {/* 問題番号とフラグボタン */}
            <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{question.id}問目</h3>
                <Button onClick={handleFlagClick} variant="ghost" size="sm" className="h-8 w-8 p-0 sm:h-9 sm:w-9">
                    {isFlagged ? (
                        <FlagOff className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                    ) : (
                        <Flag className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-orange-500" />
                    )}
                </Button>
            </div>

            {/* 問題文と画像 */}
            <div className="p-2 sm:p-3 md:p-4 border rounded-md bg-white space-y-2 sm:space-y-3">
                <div className="text-sm sm:text-base font-medium whitespace-pre-wrap">
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

            {/* 選択肢 */}
            {question.multipleAnswers ? (
                // チェックボックス
                <div className="space-y-2 sm:space-y-3">
                    {question.options.map((option, index) => {
                        const isCorrect = question.correctAnswers.includes(index)
                        const bgColor = getBgColor(index, isCorrect)
                        return (
                            <label
                                key={index}
                                className={`flex items-start sm:items-center gap-2 sm:gap-3 p-2 sm:p-3 ${bgColor} rounded-md sm:rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer border text-sm sm:text-base`}
                            >
                                <Checkbox
                                    id={`option-${questionIndex}-${index}`}
                                    className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 sm:mt-0"
                                    checked={userAnswer.includes(index)}
                                    onCheckedChange={(checked) => handleCheckboxChange(checked, index)}
                                    disabled={showResult}
                                />
                                <div className="flex-grow">
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
                                    <span className={isCorrect ? "text-green-500" : "text-red-500"}>
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
                        const bgColor = getBgColor(index, isCorrect)
                        return (
                            <label
                                key={index}
                                className={`flex items-start sm:items-center gap-2 sm:gap-3 p-2 sm:p-3 ${bgColor} rounded-md sm:rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer border text-sm sm:text-base`}
                            >
                                <RadioGroupItem
                                    value={index.toString()}
                                    id={`option-${questionIndex}-${index}`}
                                    className="mt-0.5 sm:mt-0"
                                />
                                <div className="flex-grow">
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
                                    <span className={isCorrect ? "text-green-500" : "text-red-500"}>
                                        {isCorrect ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <X className="w-3 h-3 sm:w-4 sm:h-4" />}
                                    </span>
                                )}
                            </label>
                        )
                    })}
                </RadioGroup>
            )}
        </div>
    )
}

export default QuestionComponent
