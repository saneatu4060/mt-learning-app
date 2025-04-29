import { GraduationCap } from "lucide-react"
import Link from "next/link"
import { examData } from "@/data/examData"

const Exam = () => {
    return (
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8">
            <div className="flex space-x-2 items-center justify-center bg-yellow-200 rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 md:mb-8 shadow-sm">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">模擬試験</h1>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center">年度別過去問題一覧</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
                {examData.map((category) => (
                    <Link
                        key={category.id}
                        href={{
                            pathname: `/exam/${category.id}`,
                        }}
                        className="group block p-4 sm:p-5 md:p-6 bg-white shadow-md hover:shadow-lg rounded-lg sm:rounded-xl hover:bg-gradient-to-br from-yellow-50 to-white transition-all duration-300 ease-in-out border border-transparent hover:border-yellow-200"
                    >
                        <div className="flex items-center justify-center min-h-[60px]">
                            <span className="text-sm sm:text-base md:text-lg font-medium text-gray-800 group-hover:text-amber-700 transition-colors duration-300 ease-in-out text-center">
                                {category.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Exam
