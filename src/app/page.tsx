// src/app/page.tsx (修正案)
import { Card, CardContent } from "@/components/ui/card";
import newsData from '@/data/news.json';
import { cn } from "@/lib/utils"; // cn をインポート
import { Plus, RefreshCw, Wrench, Info } from "lucide-react"; // アイコン例

// NewsItem 型定義
type NewsStatus = 'add' | 'update' | 'fix' | 'info';
interface NewsItem {
  date: string;
  status: NewsStatus; // ★ status を含める
  text: string;
}

// ステータスに応じたスタイルとテキスト、アイコンを返すヘルパー
const getStatusProps = (status: NewsStatus) => {
  switch (status) {
    case 'add':
      return {
        text: '追加',
        icon: <Plus className="w-3 h-3" />,
        className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      };
    case 'update':
      return {
        text: '更新',
        icon: <RefreshCw className="w-3 h-3" />,
        className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
      };
    case 'fix':
      return {
        text: '修正',
        icon: <Wrench className="w-3 h-3" />,
        className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
      };
    case 'info':
    default:
      return {
        text: '情報',
        icon: <Info className="w-3 h-3" />,
        className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
      };
  }
};


export const metadata = { /* ... */ };

const Home = () => {
  const newsItems: NewsItem[] = newsData.map(item => ({
    ...item,
    status: item.status as NewsStatus, // Explicitly cast status to NewsStatus
  }));

  return (
    <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:py-10">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent mb-3">
          お知らせ
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          MT-Learningの最新アップデートや重要な情報をご確認ください
        </p>
      </div>

      <Card className="overflow-hidden my-4 sm:my-6 max-w-2xl mx-auto shadow-sm border">
        <CardContent className="p-0">
          <ul className="divide-y divide-border">
            {newsItems.map((item, index) => {
              // ★ ステータスに応じたプロパティを取得
              const statusProps = getStatusProps(item.status);
              return (
                <li
                  key={item.date + '-' + index}
                  className="px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 hover:bg-muted/50 transition-colors"
                >
                  {/* gap を少し増やす */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    {/* バッジエリア */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {/* 日付バッジ */}
                      <div className="bg-primary text-primary-foreground text-xs font-medium rounded-full px-2.5 py-1 sm:px-3 w-fit"> {/* 色をプライマリに変更 (任意) */}
                        {item.date}
                      </div>
                      {/* ★ ステータスバッジを追加 */}
                      <div className={cn(
                        "flex items-center gap-1 text-xs font-medium rounded-full px-2.5 py-1 w-fit",
                        statusProps.className // 状態に応じた色クラス
                      )}>
                        {statusProps.icon}
                        <span>{statusProps.text}</span>
                      </div>
                    </div>
                    {/* お知らせテキスト */}
                    <span className="text-sm sm:text-base text-muted-foreground break-words">{item.text}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;