"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Book, Trophy } from "lucide-react";
import Link from "next/link";
import { categorydata } from "@/data/category";

const ModeSelect = () => {
    const router = useRouter();
    // const params = useParams(); // useParamsでparamsを取得
    // const { categoryId } = params; // paramsからcategoryIdを取得
    const searchParams = useSearchParams();
    const categoryName = searchParams.get("year") || "カテゴリ名不明";
    const data = categorydata.find((category) => category.uri === categoryName);

    const handleModeSelect = (mode: "am" | "pm") => {
        router.push(`/learning/year=${categoryName}/mode=${mode}`);
    };



    return (
        <div className="container mx-auto p-4">
            <h1></h1>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                        ← 戻る
                    </Link>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">{categoryName}</h1>
                <h2 className="text-lg font-semibold text-gray-600 text-center mb-8">モードを選択してテストを開始</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 演習モードボタン */}
                    <button
                        onClick={() => handleModeSelect("am")}
                        className="group bg-orange-100 rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:bg-gradient-to-br from-orange-200 to-white transition-all duration-300 ease-in-out"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-orange-200 rounded-lg group-hover:bg-orange-100 transition-all duration-300">
                                <Book className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                            </div>
                            <span className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                                午前{data?.am}
                            </span>
                        </div>
                    </button>
                    {/* 試験モードボタン */}
                    <button
                        onClick={() => handleModeSelect("pm")}
                        className="group bg-blue-200 rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:bg-gradient-to-br from-indigo-100 to-white transition-all duration-300 ease-in-out"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-blue-300 rounded-lg group-hover:bg-indigo-50 transition-all duration-300">
                                <Trophy className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                            </div>
                            <span className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                                午後{data?.pm}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModeSelect;
