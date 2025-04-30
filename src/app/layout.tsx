import type React from "react"
import Footer from "@/components/Footer"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "MT-Learning",
  description: "過去問を解いて学習を始めましょう！",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased", // font-sans は適宜変更
        )}
      >
        <Providers>
          <div className="relative grid grid-rows-[auto_1fr_auto] min-h-screen">
            {/* Background circles - レスポンシブな位置と大きさ調整 */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="circle-one blur-3xl w-60 h-60 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-rose-400/60 dark:bg-rose-400/30 top-0 right-2 sm:right-4 md:right-10 lg:right-28 absolute"></div>
              <div className="circle-two blur-3xl w-60 h-60 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-indigo-400/60 dark:bg-indigo-400/30 bottom-0 left-2 sm:left-4 md:left-10 lg:left-28 absolute"></div>
              <div className="circle-three blur-3xl w-60 h-60 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-green-400/60 dark:bg-green-400/30 top-0 left-2 sm:left-4 md:left-10 lg:left-28 absolute opacity-70"></div>
              <div className="circle-four blur-3xl w-60 h-60 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-yellow-400/60 dark:bg-yellow-400/30 bottom-0 right-2 sm:right-4 md:right-10 lg:right-28 absolute opacity-70"></div>
            </div>

            {/* Header */}
            <header className="sticky top-0 bg-background/80 backdrop-blur-md z-50 shadow-sm border-b">
              <div className="container max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-6">
                <Navbar />
              </div>
            </header>

            {/* Main Content */}
            <main className="z-10 m-2 sm:m-3 md:m-4 lg:m-6">
              {/* <div className="bg-card/70 text-card-foreground backdrop-blur-sm rounded-xl shadow-sm p-4 md:p-6 min-h-[calc(100vh-128px)]"> */}
              {children}
              {/* </div> */}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
