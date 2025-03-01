import { categorydata } from "@/data/category";
import Link from "next/link";

export const metadata = {
  title: "ホーム | MT-Learning",
  description: "過去問を解いて学習を始めましょう！",
};

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* お知らせセクション */}
      <h3 className="text-2xl text-center font-semibold mb-4">お知らせ</h3>
      <div className="bg-indigo-50 p-6 rounded-xl shadow-md md:m-4">
        <p className="text-gray-700 text-center">2025/02/17 デザイン修正
          2025/03/2 ヘッダー、一部デザイン修正
        </p>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-center mt-12">年度別過去問題一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {categorydata.map((category) => (
          <Link
            key={category.id}
            href={`/learning/${category.id}?year=${category.uri}`}
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
  );
};

export default Home;