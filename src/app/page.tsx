"use client"
import { useState } from "react";
import { categorydata } from "@/data/category";
import Link from "next/link";

// export const metadata = {
//   title: "ダッシュボード | MT-Learning",
//   description: "過去問を解いて学習を始めましょう！",
// };

const Home = () => {
  const [activeTab, setActiveTab] = useState("午前");

  // タブで表示するデータをフィルタリング
  const filteredCategories = categorydata.filter(
    (category) => category.type === activeTab
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">年度別過去問題一覧</h1>

      {/* タブナビゲーション */}
      <div className="flex justify-center mb-6">
        {["午前", "午後"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-lg font-semibold rounded-t-lg transition-all ${activeTab === tab
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* カテゴリの一覧をモダンなカードレイアウトで表示 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredCategories.map((category) => (
          <Link
            key={category.id}
            href={`/learning/${category.id}?${encodeURIComponent(category.uri)}`}
            className="group block p-6 bg-white shadow-lg rounded-xl hover:shadow-xl hover:bg-gradient-to-br from-indigo-100 to-white transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center">
              <span className="text-lg font-medium text-gray-800 group-hover:text-indigo-700 transition-colors duration-300 ease-in-out">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* お知らせセクション */}
      <div className="mt-12">
        <h3 className="text-2xl text-center font-semibold mb-4">お知らせ</h3>
        <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
          <p className="text-gray-700 text-center">2025/02/17 デザイン修正</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
