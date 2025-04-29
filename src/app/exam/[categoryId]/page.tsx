"use client"

import { useParams, useRouter, usePathname } from "next/navigation"
import { Book, Trophy, ArrowLeft } from "lucide-react" // ArrowLeftを追加
import Link from "next/link"
import { examData } from "@/data/examData"

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
            <div className="bg-white/90 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
                <div className="flex justify-start items-center mb-4 sm:mb-5 md:mb-6">
                    <Link
                        href={backLinkHref}
                        className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-indigo-600 transition-colors" />
                        <span>年度選択へ戻る</span>
                    </Link>
                </div>

                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-3 sm:mb-4 md:mb-6">
                    {category.name}
                </h1>
                <h2 className="text-base sm:text-lg font-semibold text-gray-600 text-center mb-4 sm:mb-6 md:mb-8">
                    午前 / 午後 を選択
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {/* 午前ボタン */}
                    <button
                        onClick={handleModeSelectAm}
                        className="group bg-orange-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-br from-orange-200 to-white"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <div className="p-2 sm:p-3 md:p-4 bg-orange-200 rounded-md sm:rounded-lg group-hover:bg-orange-100 transition-all duration-300">
                                <Book className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                            </div>
                            <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                                午前
                            </span>
                        </div>
                    </button>

                    {/* 午後ボタン */}
                    <button
                        onClick={handleModeSelectPm}
                        className="group bg-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-br from-indigo-100 to-white"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <div className="p-2 sm:p-3 md:p-4 bg-blue-300 rounded-md sm:rounded-lg group-hover:bg-indigo-50 transition-all duration-300">
                                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                            </div>
                            <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                                午後
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SessionSelect
