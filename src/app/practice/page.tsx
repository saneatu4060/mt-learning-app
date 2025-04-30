import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { examData } from "@/data/examData";
import { cn } from "@/lib/utils";

const Practice = () => {
    return (
        <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
            {/* Header: ライトはlime-200/text-lime-900, ダークはlime-900/text-lime-100 */}
            <div className={cn(
                "flex space-x-2 sm:space-x-3 items-center justify-center rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 md:mb-8 shadow-sm",
                "bg-lime-300 text-lime-1000 dark:bg-lime-600 dark:text-lime-100" // ★ 色指定変更
            )}>
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">問題演習</h1>
            </div>

            {/* 見出しの色はテーマ変数 (foreground) を使う */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center text-foreground">
                年度別過去問題一覧
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
                {examData.map((category) => (
                    <Link
                        key={category.id}
                        href={{ pathname: `/practice/${category.id}` }}
                        // Link: ライトは白背景、ダークは濃いグレー背景
                        // ホバー色はライム系、境界線もテーマとライム系
                        className={cn(
                            "group block p-4 sm:p-5 md:p-6 transition-all duration-300 ease-in-out",
                            "bg-white dark:bg-gray-800", // ★ 背景色変更
                            "border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl shadow-sm", // ★ 境界線
                            "hover:shadow-md hover:bg-lime-50 dark:hover:bg-lime-950 hover:border-lime-300 dark:hover:border-lime-700" // ★ ホバー効果変更
                        )}
                    >
                        <div className="flex items-center justify-center min-h-[50px] sm:min-h-[60px]">
                            {/* Text: ライトは濃いグレー、ダークは白系。ホバーでライム系 */}
                            <span className={cn(
                                "text-sm sm:text-base md:text-lg font-medium text-center transition-colors duration-300 ease-in-out",
                                "text-gray-800 dark:text-gray-100", // ★ 通常時のテキスト色
                                "group-hover:text-lime-700 dark:group-hover:text-lime-300" // ★ ホバー時のテキスト色
                            )}>
                                {category.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Practice;