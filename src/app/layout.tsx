import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export const metadata = {
  title: "MT-Learning",
  description: "Generated by Next.js",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-200 min-h-screen">
        <div className="relative grid grid-rows-[auto_1fr_auto] min-h-screen">
          {/* 背景の円 */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="circle-one blur-3xl w-64 h-64 rounded-full bg-rose-400/60 top-0 right-10 lg:right-28 absolute"></div>
            <div className="circle-two blur-3xl w-64 h-64 rounded-full bg-indigo-400/60 bottom-0 left-10 lg:left-28 absolute"></div>
            <div className="circle-three blur-3xl w-64 h-64 rounded-full bg-green-400/60 top-0 left-10 lg:left-28 absolute"></div>
            <div className="circle-four blur-3xl w-64 h-64 rounded-full bg-yellow-400/60 bottom-0 right-10 lg:right-28 absolute"></div>
          </div>
          {/* ヘッダー部分 */}
          <header className="bg-white/50 backdrop-blur-md z-50 shadow-md">
            <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 py-8 md:px-8">
              <Providers>
                <Navbar />
              </Providers>
            </div>
          </header>
          {/* メインコンテンツ */}
          <main className="flex items-center justify-center z-10 min-h-[calc(100vh-200px)]  bg-white/50 rounded-xl py-3 px-6 m-6 overflow-hidden">
            {children}
          </main>
          {/* フッター */}
          <Footer />
        </div>
      </body>
    </html>
  );
}


