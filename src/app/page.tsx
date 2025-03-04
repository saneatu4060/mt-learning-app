export const metadata = {
  title: "ホーム | MT-Learning",
  description: "過去問を解いて学習を始めましょう！",
};

const Home = () => {
  const newsItems = [
    { date: "2025/03/04", text: "ディレクトリ構成、ページ遷移、デザイン一部修正" },
    { date: "2025/03/02", text: "ヘッダー、一部デザイン修正" },
    { date: "2025/02/17", text: "デザイン修正" },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* お知らせセクション */}
      <h3 className="text-2xl text-center font-semibold mb-4">お知らせ</h3>
      <div className="bg-white rounded-xl shadow-md md:m-4 overflow-hidden">
        <ul>
          {newsItems.map((item, index) => (
            <li key={index} className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white text-xs font-bold rounded-full px-3 py-1 mr-4">
                  {item.date}
                </div>
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;