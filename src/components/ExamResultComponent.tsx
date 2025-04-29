"use client";
import React, { useState } from 'react'; // ★ useState をインポート
import Link from 'next/link';
import { useExamStore } from '@/store/examStore';
import { Question } from '@/types/examData';
import { Check, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// Dialog 関連をインポート
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import QuestionComponent from '@/components/QuestionComponent'; // 詳細表示に再利用（一部調整必要かも）
import { cn } from "@/lib/utils";

interface ExamResultComponentProps {
    categoryId: string | string[];
}

const ExamResultComponent = ({ categoryId }: ExamResultComponentProps) => {
    const questions = useExamStore(state => state.questions);
    const userAnswers = useExamStore(state => state.userAnswers);
    const examResults = useExamStore(state => state.examResults);

    // ★ モーダル表示用の状態
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

    const correctCount = React.useMemo(() => {
        let count = 0;
        // examResults Map の値 (boolean) を直接チェック
        for (const isCorrect of examResults.values()) {
            if (isCorrect === true) { // 明示的に true をチェック
                count++;
            }
        }
        return count;
    }, [examResults]);
    const totalQuestions = questions.length;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const categoryPath = Array.isArray(categoryId) ? categoryId[0] : categoryId;
    const backToCategoryLink = categoryPath ? `/exam/${categoryPath}` : '/exam';

    // モーダルで表示する問題データ
    const selectedQuestionData = selectedQuestionIndex !== null ? questions[selectedQuestionIndex] : null;
    const selectedUserAnswer = selectedQuestionIndex !== null ? userAnswers.get(selectedQuestionIndex) || [] : [];

    // 問題番号クリック時の処理
    const handleQuestionClick = (index: number) => {
        setSelectedQuestionIndex(index);
    };

    // モーダルを閉じる処理
    const handleCloseModal = () => {
        setSelectedQuestionIndex(null);
    };


    if (questions.length === 0) { /* ... ローディング表示 ... */ }

    return (
        // main 要素はページコンポーネント側にある想定なので div に変更
        <div className="container mx-auto p-3 sm:p-4 md:p-6 lg:p-8 max-w-4xl">

            <Card className="mb-4 sm:mb-5 md:mb-6 shadow-sm">
                <CardHeader className="p-3 sm:p-4 md:p-6">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">試験結果</CardTitle>
                    <CardDescription className="text-xs sm:text-sm md:text-base">お疲れ様でした！</CardDescription>
                </CardHeader>
                <CardContent className="text-center p-3 sm:p-4 md:p-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">
                        {correctCount} / {totalQuestions} 問
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground">
                        正答率: {accuracy}%
                    </div>
                </CardContent>
            </Card>

            {/* ★ 問題ごと結果: リスト形式からグリッド形式へ変更 ★ */}
            <Card className="shadow-sm">
                <CardHeader className="p-3 sm:p-4 md:p-6">
                    <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl">問題ごとの結果 (番号タップで詳細)</CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-3 md:p-4">
                    {/* グリッドレイアウト: 例として7列 */}
                    <div className="grid grid-cols-7 sm:grid-cols-10 gap-1 sm:gap-1.5">
                        {questions.map((question, index) => {
                            const isCorrect = examResults.get(index);
                            const isAnswered = userAnswers.has(index); // 回答したかどうか

                            return (
                                // ★ 各問題番号をボタンにする
                                <button
                                    key={question.id}
                                    onClick={() => handleQuestionClick(index)}
                                    className={cn(
                                        "flex items-center justify-center p-1 rounded border aspect-square text-xs sm:text-sm font-medium",
                                        "hover:ring-2 hover:ring-offset-1 hover:ring-indigo-400 transition-all",
                                        !isAnswered ? "bg-gray-100 text-gray-500 border-gray-200" : // 未回答
                                            isCorrect ? "bg-green-100 text-green-800 border-green-200 hover:bg-green-200" : // 正解
                                                "bg-red-100 text-red-800 border-red-200 hover:bg-red-200" // 不正解
                                    )}
                                    title={`問題 ${question.id} を見る`}
                                >
                                    {/* 正誤アイコン (任意) */}
                                    {/* {isAnswered && (isCorrect ? <Check size={12} /> : <X size={12} />)} */}
                                    {question.id} {/* 問題番号 */}
                                </button>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* 戻るボタン (変更なし) */}
            <footer className="mt-4 sm:mt-6 md:mt-8 text-center flex-shrink-0">
                <Link href={backToCategoryLink} passHref>
                    <Button variant="outline" size="default" className="...">カテゴリ選択に戻る</Button>
                </Link>
            </footer>

            {/* ★ 問題詳細表示モーダル ★ */}
            <Dialog open={selectedQuestionIndex !== null} onOpenChange={(isOpen: any) => !isOpen && handleCloseModal()}>
                <DialogContent className="max-w-3xl w-full max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>問題 {selectedQuestionData?.id} 詳細</DialogTitle>
                        {/* 必要なら DialogDescription */}
                        {/* <DialogDescription>...</DialogDescription> */}
                    </DialogHeader>
                    <div className="py-4">
                        {selectedQuestionData && (
                            // ★ QuestionComponent を結果表示モードで再利用 (調整が必要な場合あり)
                            <QuestionComponent
                                question={selectedQuestionData}
                                questionIndex={selectedQuestionIndex!} // non-null assertion
                                userAnswer={selectedUserAnswer}
                                isFlagged={false} // 結果表示ではフラグは関係ない想定
                                showResult={true} // ★ 結果を強制表示
                                // ★ onAnswer 等は不要なのでダミー関数を渡す
                                onAnswer={() => { }}
                                onFlagToggle={() => { }}
                            // onConfirmAnswer は渡さない
                            />
                        )}
                    </div>

                </DialogContent>
            </Dialog>

        </div>
    );
};

export default ExamResultComponent;