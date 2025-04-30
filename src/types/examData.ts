export interface Question {
    id: number; // セッション内での問題番号 (例: AMの1番)
    text: string; // 問題文 (Markdown想定)
    options: string[]; // 選択肢 (文字列 or 画像パス)
    correctAnswers: number[]; // 正解選択肢のインデックス配列
    multipleAnswers: boolean; // 複数回答か否か
    image?: { // 問題文に付随する画像 (任意)
        url: string; // 画像パス (旧 isImageUrl)
    };
}

export interface ExamSession {
    questions: Question[];
}

export interface ExamCategory {
    id: string; // カテゴリ識別子 (例: "58th")
    name: string; // カテゴリ名 (例: "第58回臨床検査技師国家試験")
    sessions: {
        am: ExamSession;
        pm: ExamSession;
    };
}