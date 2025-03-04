import { categorydata } from "@/data/category"
import { NotebookPen } from "lucide-react"
import Link from "next/link"

const Exam = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex space-x-2 items-center justify-center bg-yellow-200 rounded-lg p-4">
                <NotebookPen />
                <h1 className="text-2xl font-bold text-center ">模擬試験</h1>
            </div>
            <h2 className="text-xl font-bold mb-2 text-center mt-6">年度別過去問題一覧</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {categorydata.map((category) => (
                    <Link
                        key={category.id}
                        href={{
                            pathname: `/exam/${category.uri}`,
                        }}
                        className="group block p-6 bg-white shadow-lg rounded-xl hover:shadow-xl hover:bg-gradient-to-br from-indigo-100 to-white transition-all duration-300 ease-in-out"
                    >
                        <div className="flex items-center justify-center">
                            <span className="text-base font-medium text-gray-800 group-hover:text-indigo-700 transition-colors duration-300 ease-in-out">
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
