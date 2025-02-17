import Link from "next/link";

interface SidebarComponentProps {
    questions: {
        id: number;
        text: string;
    }[];
    currentQuestionIndex: number;
}

const SidebarComponent = ({
    questions,
    currentQuestionIndex,
}: SidebarComponentProps) => {
    return (
        <div className="rounded-xl  h-screen overflow-y-auto"> {/* スクロール可能に設定 */}
            <ul className="space-y-3">
                {questions.map((question, index) => (
                    <li key={question.id}>
                        <Link
                            href={`#question-${index}`}
                            className={`block px-4 py-2 rounded-lg text-sm transition-colors ${index === currentQuestionIndex
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            <span className="ml-2 flex-shrink-0 line-clamp-2">
                                Q{question.id}.<br />
                                {question.text}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarComponent;
