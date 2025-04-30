import { create } from 'zustand';

import { Question } from '@/types/examData';

// 配列比較ヘルパー関数 (以前と同じ)
const compareAnswers = (arr1: number[], arr2: number[]): boolean => {
    if (!arr1 || !arr2) return false;
    if (arr1.length !== arr2.length) return false;
    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();
    return sortedArr1.every((value, index) => value === sortedArr2[index]);
};

interface ExamState {
    questions: Question[];
    userAnswers: Map<number, number[]>; // Map を使用 (キーは問題index)
    flags: Set<number>; // フラグ用 (Set を使用)
    currentQuestionIndex: number;
    isFinished: boolean;
    examResults: Map<number, boolean>; // 正誤結果 (キーは問題index)
    startTime: number | null; // タイマー用 (開始時間)
    remainingTime: number | null; // タイマー用 (残り時間)

    // アクション
    initializeExam: (questions: Question[], timeLimitMinutes?: number) => void;
    updateAnswer: (index: number, answer: number[]) => void;
    toggleFlag: (index: number) => void;
    setCurrentIndex: (index: number) => void;
    finishExam: () => void;
    setRemainingTime: (time: number) => void; // タイマー用
}

export const useExamStore = create<ExamState>((set) => ({
    // --- 初期状態 ---
    questions: [],
    userAnswers: new Map(),
    flags: new Set(),
    currentQuestionIndex: 0,
    isFinished: false,
    examResults: new Map(),
    startTime: null,
    remainingTime: null,

    // --- アクション ---
    initializeExam: (questions, timeLimitMinutes) => set({
        questions: questions,
        userAnswers: new Map(),
        flags: new Set(),
        currentQuestionIndex: 0,
        isFinished: false,
        examResults: new Map(),
        startTime: Date.now(), // 試験開始時間
        remainingTime: timeLimitMinutes ? timeLimitMinutes * 60 : null, // 残り時間(秒)
    }),

    updateAnswer: (index, answer) => set((state) => ({
        userAnswers: new Map(state.userAnswers).set(index, answer)
    })),

    toggleFlag: (index) => set((state) => {
        const newFlags = new Set(state.flags);
        if (newFlags.has(index)) {
            newFlags.delete(index);
        } else {
            newFlags.add(index);
        }
        return { flags: newFlags };
    }),

    setCurrentIndex: (index) => set((state) => {
        // インデックスが範囲内かチェック
        if (index >= 0 && index < state.questions.length) {
            return { currentQuestionIndex: index };
        }
        return {}; // 範囲外なら状態を変更しない
    }),

    finishExam: () => set((state) => {
        if (state.isFinished) return {}; // 既に終了済みなら何もしない

        const results = new Map<number, boolean>();
        state.questions.forEach((q, index) => {
            const userAnswer = state.userAnswers.get(index) || [];
            const isCorrect = compareAnswers(q.correctAnswers, userAnswer);
            results.set(index, isCorrect);
        });

        return {
            isFinished: true,
            examResults: results,
            remainingTime: null, // タイマー停止
        };
    }),

    setRemainingTime: (time) => set({ remainingTime: time }),

}));