import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswers: number[];
    multipleAnswers: boolean;
}

interface QuestionComponentProps {
    question: Question
    userAnswer: number[]
    showResult: boolean
    onAnswer: (selectedAnswers: number[]) => void
}

export default function QuestionComponent({ question, userAnswer, showResult, onAnswer }: QuestionComponentProps) {

    const handleChange = (value: string | number[]) => {
        if (Array.isArray(value)) {
            onAnswer(value)
        } else {
            onAnswer([Number.parseInt(value)])
        }
    }


    return (
        <div className="space-y-6">
            <h3 className="text-lg font-medium font-semibold ">{question.id}問目</h3>
            <h3 className="text-lg font-medium text-gray-600">{question.text}</h3>

            {question.multipleAnswers ? (
                <div className="space-y-3">
                    {question.options.map((option, index) => {
                        const isCorrect = question.correctAnswers.includes(index)
                        const isSelected = userAnswer.includes(index)
                        let bgColor = "bg-white/70"

                        if (showResult) {
                            if (isCorrect) {
                                bgColor = "bg-green-100"
                            } else if (isSelected) {
                                bgColor = "bg-red-100"
                            }
                        }

                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-3 p-4 ${bgColor} backdrop-blur-sm border border-gray-100 rounded-lg transition-colors`}
                            >
                                <Checkbox
                                    id={`option-${index}`}
                                    className="h-5 w-5"
                                    checked={isSelected}
                                    onCheckedChange={(checked) => {
                                        const newAnswer = checked ? [...userAnswer, index] : userAnswer.filter((i) => i !== index)
                                        handleChange(newAnswer)
                                    }}
                                    disabled={showResult}
                                />
                                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-gray-600">
                                    {option}
                                </Label>
                                {showResult && (
                                    <span className={isCorrect ? "text-green-600" : "text-red-600"}>{isCorrect ? "✓" : "✗"}</span>
                                )}
                            </div>
                        )
                    })}
                </div>
            ) : (
                <RadioGroup value={userAnswer[0]?.toString()} onValueChange={handleChange} className="space-y-3">
                    {question.options.map((option, index) => {
                        const isCorrect = question.correctAnswers.includes(index)
                        const isSelected = userAnswer.includes(index)
                        let bgColor = "bg-white/70"

                        if (showResult) {
                            if (isCorrect) {
                                bgColor = "bg-green-100"
                            } else if (isSelected) {
                                bgColor = "bg-red-100"
                            }
                        }

                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-3 p-4 ${bgColor} backdrop-blur-sm border border-gray-100 rounded-lg transition-colors`}
                            >
                                <RadioGroupItem
                                    value={index.toString()}
                                    id={`option-${index}`}
                                    className="h-5 w-5"
                                    disabled={showResult}
                                />
                                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-gray-600">
                                    {option}
                                </Label>
                                {showResult && (
                                    <span className={isCorrect ? "text-green-600" : "text-red-600"}>{isCorrect ? "✓" : "✗"}</span>
                                )}
                            </div>
                        )
                    })}
                </RadioGroup>

            )}
        </div>
    );
}