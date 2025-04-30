"use client"

import { useParams, useRouter, usePathname } from "next/navigation"
import { ArrowLeft, Clock12, Sun } from "lucide-react" // ArrowLeftを追加
import Link from "next/link"
import { examData } from "@/data/examData"
import { cn } from "@/lib/utils"

const SessionSelect = () => {
    const router = useRouter()
    const params = useParams<{ categoryId: string }>()
    const pathname = usePathname()
    const { categoryId } = params

    const category = examData.find((cat) => cat.id === categoryId)
    const modeType = pathname.split("/")[1] || "exam"

    const handleModeSelectAm = () => {
        if (category) {
            router.push(`/${modeType}/${categoryId}/am`)
        }
    }

    const handleModeSelectPm = () => {
        if (category) {
            router.push(`/${modeType}/${categoryId}/pm`)
        }
    }

    if (!category) {
        return <div className="p-4 sm:p-6 md:p-8 text-center">カテゴリが見つかりません。</div>
    }

    const backLinkHref = `/${modeType}`

    return (
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8">
            {/* ★ カード部分: 背景と境界線をダークモード対応 */}
            <div className={cn(
                "rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto",
                "bg-white/90 dark:bg-slate-800/90", // ライト/ダーク背景
                "border border-gray-100 dark:border-slate-700/50", // 境界線
                "backdrop-blur-md"
            )}>
                <div className="flex justify-start items-center mb-4 sm:mb-5 md:mb-6">
                    {/* ★ 戻るリンク: 文字色をテーマ対応 */}
                    <Link
                        href={backLinkHref}
                        className="text-muted-foreground hover:text-primary text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300 group" // 色変更
                    >
                        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors" /> {/* 色変更 */}
                        <span>年度選択へ戻る</span>
                    </Link>
                </div>

                {/* ★ 見出し: 文字色をテーマ対応 */}
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center mb-3 sm:mb-4 md:mb-6">
                    {category.name}
                </h1>
                <h2 className="text-base sm:text-lg font-semibold text-muted-foreground text-center mb-4 sm:mb-6 md:mb-8">
                    午前 / 午後 を選択
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {/* 午前ボタン */}
                    <button
                        onClick={handleModeSelectAm}
                        className={cn(
                            "group rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out",
                            "border border-orange-200 dark:border-orange-800/50", // 境界線
                            "bg-orange-100 dark:bg-orange-900/60", // 背景
                            "hover:bg-orange-200/80 dark:hover:bg-orange-800/80" // ホバー背景
                        )}
                    >
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <div className={cn(
                                "p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg transition-all duration-300",
                                "bg-orange-200 dark:bg-orange-800/80", // アイコン背景
                                "group-hover:bg-orange-100 dark:group-hover:bg-orange-900/80" // ホバー時アイコン背景
                            )}>
                                {/* アイコンの色も調整 */}
                                <Sun className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600 dark:text-orange-300 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                            </div>
                            {/* 文字色も調整 */}
                            <span className="text-base sm:text-lg md:text-xl font-semibold text-orange-900 dark:text-orange-100 group-hover:text-orange-950 dark:group-hover:text-orange-50 transition-colors duration-300">
                                午前
                            </span>
                        </div>
                    </button>

                    {/* 午後ボタン */}
                    <button
                        onClick={handleModeSelectPm}
                        className={cn(
                            "group rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out",
                            "border border-blue-200 dark:border-blue-800/50", // 境界線
                            "bg-blue-100 dark:bg-blue-900/60", // 背景
                            "hover:bg-blue-200/80 dark:hover:bg-blue-800/80" // ホバー背景
                        )}
                    >
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <div className={cn(
                                "p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg transition-all duration-300",
                                "bg-blue-200 dark:bg-blue-800/80", // アイコン背景
                                "group-hover:bg-blue-100 dark:group-hover:bg-blue-900/80" // ホバー時アイコン背景
                            )}>
                                {/* アイコンを Moon に変更、色も調整 */}
                                <Clock12 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                            </div>
                            {/* 文字色も調整 */}
                            <span className="text-base sm:text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-100 group-hover:text-blue-950 dark:group-hover:text-blue-50 transition-colors duration-300">
                                午後
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SessionSelect
