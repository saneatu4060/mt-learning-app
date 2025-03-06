"use client"
interface SidebarComponentProps {
    questions: {
        id: number;
        text: string;
    }[];
    currentQuestionIndex: number;
    onQuestionSelect: (index: number) => void;
}

const SidebarComponent = ({
    questions,
    currentQuestionIndex,
    onQuestionSelect,
}: SidebarComponentProps) => {
    return (
        <div className="rounded-xl h-screen h-3/4 overflow-y-auto"
            style={{ height: "calc(100vh - 170px)" }}>
            <ul className="space-y-2">
                {questions.map((question, index) => (
                    <li key={question.id}>
                        <button
                            onClick={() => onQuestionSelect(index)}
                            className={`block w-full text-left px-2 py-2 rounded-lg text-xs transition-colors ${index === currentQuestionIndex
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            <span className="ml-1 flex-shrink-1 line-clamp-2">
                                Q{question.id}.<br />
                                {question.text}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarComponent;