import { useMemo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Check, X } from "lucide-react";
import ReactMarkdown from 'react-markdown';

interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswers: number[];
    multipleAnswers: boolean;
    isImageUrl: string;
}

interface QuestionComponentProps {
    question: Question;
    userAnswer: number[];
    showResult: boolean;
    onAnswer: (selectedAnswers: number[]) => void;
}

const QuestionComponent = ({
    question,
    userAnswer,
    showResult,
    onAnswer,
}: QuestionComponentProps) => {
    const optionsData = useMemo(() => {
        return question.options.map((option, index) => {
            const isCorrect = question.correctAnswers.includes(index);
            const isSelected = userAnswer.includes(index);
            let bgColor = "bg-white/70";

            if (showResult) {
                if (isCorrect) {
                    bgColor = "bg-green-100";
                } else if (isSelected) {
                    bgColor = "bg-red-100";
                }
            }

            return { index, option, isCorrect, isSelected, bgColor };
        });
    }, [question, userAnswer, showResult]);

    const handleChange = (value: string | number[]) => {
        if (Array.isArray(value)) {
            onAnswer(value);
        } else {
            const newValue = Number.parseInt(value);
            if (!isNaN(newValue) && !userAnswer.includes(newValue)) {
                onAnswer([newValue]);
            }
        }
    };

    const checkIfContainsPng = (text: string) => text.includes('.png');

    return (
        <div className="space-y-2">
            <h3 className="text-xl font-semibold">{question.id}問目</h3>
            <h3 className="p-4 text-base font-medium whitespace-pre-wrap">
                <ReactMarkdown>{question.text}</ReactMarkdown>
            </h3>
            {question.isImageUrl && (
                <>
                    <Image
                        src={question.isImageUrl}
                        alt="No image"
                        width={300}
                        height={200}
                        style={{ margin: "auto" }}
                    />
                    <h3 className="p-3 text-center text-sm font-medium">別冊No.1</h3>
                </>
            )}
            {question.multipleAnswers ? (
                <div className="space-y-5">
                    {optionsData.map(({ index, option, isCorrect, isSelected, bgColor }) => (
                        <label
                            htmlFor={`option-${index}`}
                            key={index}
                            className={`flex items-center gap-3 p-4 ${bgColor} group rounded-xl shadow-lg hover:shadow-2xl hover:bg-indigo-50 focus-within:ring-2 focus-within:ring-indigo-500 transition-all cursor-pointer`}
                        >
                            <Checkbox
                                id={`option-${index}`}
                                className="h-5 w-5"
                                checked={isSelected}
                                onCheckedChange={(checked) => {
                                    const newAnswer = checked
                                        ? [...userAnswer, index]
                                        : userAnswer.filter((i) => i !== index);
                                    onAnswer(newAnswer);
                                }}
                                disabled={showResult}
                            />
                            <span className="flex-1 text-gray-700">
                                <ReactMarkdown>{option}</ReactMarkdown>
                            </span>
                            {showResult && (
                                <span className={isCorrect ? "text-green-500" : "text-red-500"}>
                                    {isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                                </span>
                            )}
                        </label>
                    ))}
                </div>
            ) : (
                <RadioGroup value={userAnswer[0]?.toString()} onValueChange={handleChange} className="space-y-3">
                    {optionsData.map(({ index, option, isCorrect, bgColor }) => (
                        <label
                            htmlFor={`option-${index}`}
                            key={index}
                            className={`flex items-center gap-3 p-4 ${bgColor} group rounded-xl shadow-lg hover:shadow-2xl hover:bg-indigo-50 focus-within:ring-2 focus-within:ring-indigo-500 transition-all w-full`}
                        >
                            <RadioGroupItem
                                value={index.toString()}
                                id={`option-${index}`}
                                className="h-5 w-5"
                                disabled={showResult}
                            />
                            {checkIfContainsPng(option) ? (
                                <Image
                                    src={option}
                                    alt="No image"
                                    width={100}
                                    height={100}
                                    style={{ margin: "auto" }}
                                />
                            ) : (
                                <span className="flex-1 text-gray-700">
                                    <ReactMarkdown>{option}</ReactMarkdown>
                                </span>
                            )}
                            {showResult && (
                                <span className={isCorrect ? "text-green-500" : "text-red-500"}>
                                    {isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                                </span>
                            )}
                        </label>
                    ))}
                </RadioGroup>
            )}
        </div>
    );
};

export default QuestionComponent;