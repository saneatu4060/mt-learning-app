"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"
import { Book, Trophy } from "lucide-react"
import Link from "next/link"

export default function ModeSelect() {
    const router = useRouter()
    const params = useParams()  // useParamsでparamsを取得
    const { categoryId } = params  // paramsからcategoryIdを取得
    const searchParams = useSearchParams();

    const categoryName = searchParams.get("name") || "カテゴリ名不明";


    const handleModeSelect = (mode: "practice" | "exam") => {
        router.push(`/learning/${categoryId}/${mode}?name=${encodeURIComponent(categoryName)}`);
    }

    return (
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6">
            <div className="gradient-background">
                <div className="container mx-auto p-8 max-w-4xl">
                    <div className="flex justify-between items-center mb-6">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                            ← 戻る
                        </Link>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-xl font-bold mb-3 text-gray-600">{categoryName}</h1>

                    </div>

                    <h2 className="text-xm font-semibold mb-6 text-gray-600">モードを選択してテストを開始</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <button
                            onClick={() => handleModeSelect("practice")}
                            className="bg-white rounded-lg p-6 text-left card-hover border border-gray-100 "
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-gray-50 rounded-lg">
                                    <Book className="w-6 h-6 text-gray-600" />
                                </div>
                                <span className="text-lg font-medium">演習モード</span>
                            </div>
                        </button>

                        <button
                            onClick={() => handleModeSelect("exam")}
                            className="bg-white rounded-lg p-6 text-left card-hover border border-gray-100"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-gray-50 rounded-lg">
                                    <Trophy className="w-6 h-6 text-gray-600" />
                                </div>
                                <span className="text-lg font-medium">試験モード</span>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
