import { Card, CardContent } from "@/components/ui/card";
import newsData from '@/data/news.json'; // ★ JSON ファイルをインポート

// ★ (任意) 型定義を追加するとより安全です
interface NewsItem {
  date: string;
  text: string;
}

export const metadata = {
  title: "ホーム | MT-Learning",
  description: "過去問を解いて学習を始めましょう！",
};

const Home = () => {
  // ★ ハードコードされた newsItems を削除
  // const newsItems = [ ... ];

  // ★ インポートしたデータを使用 (型アサーション or 型ガード)
  const newsItems: NewsItem[] = newsData;

  return (
    <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:py-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold mb-4 sm:mb-6">お知らせ</h2>

      <Card className="overflow-hidden my-4 sm:my-6 max-w-2xl mx-auto shadow-sm">
        <CardContent className="p-0">
          <ul className="divide-y divide-gray-200">
            {/* ★ インポートした newsItems を map する */}
            {newsItems.map((item, index) => (
              <li
                // ★ key は index でも良いですが、ユニークなIDがあればそれがベスト
                key={item.date + '-' + index} // date と index を組み合わせる例
                className="px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                  <div className="flex-shrink-0 bg-blue-500 text-white text-xs font-bold rounded-full px-2.5 py-1 sm:px-3 sm:mr-3 md:mr-4 w-fit">
                    {item.date}
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 break-words">{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;