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
      <body className={cn("bg-gray-100 min-h-screen antialiased text-gray-900")}>
        <Providers>
          <div className="relative grid grid-rows-[auto_1fr_auto] min-h-screen">
            {/* Background circles - レスポンシブな位置と大きさ調整 */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="circle-one blur-3xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-rose-400/60 top-0 right-2 sm:right-4 md:right-10 lg:right-28 absolute"></div>
              <div className="circle-two blur-3xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-indigo-400/60 bottom-0 left-2 sm:left-4 md:left-10 lg:left-28 absolute"></div>
              <div className="circle-three blur-3xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-green-400/60 top-0 left-2 sm:left-4 md:left-10 lg:left-28 absolute opacity-70"></div>
              <div className="circle-four blur-3xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-yellow-400/60 bottom-0 right-2 sm:right-4 md:right-10 lg:right-28 absolute opacity-70"></div>
            </div>

            {/* Header */}
            <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-gray-200">
              <div className="container max-w-7xl mx-auto flex items-center justify-between h-14 sm:h-16 md:h-18 px-3 sm:px-4 md:px-6">
                <Navbar />
              </div>
            </header>

            {/* Main Content */}
            <main className="z-10 m-2 sm:m-3 md:m-4 lg:m-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4 md:p-6 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-136px)]">
                {children}
              </div>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
