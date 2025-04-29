"use client"

export default function Footer() {

    return (
        <footer className="bg-white/50 z-10 backdrop-blur mt-auto border-t border-gray-200"> {/* mt-auto, border-t 追加 */}
            {/* ★ px-4 を追加して左右にパディング */}
            <div className="container mx-auto max-w-4xl text-center py-5 px-4 text-sm text-gray-500"> {/* py を少し調整, px-4 追加 */}
                <p>&copy; {new Date().getFullYear()} MT-Learning app</p>
            </div>
        </footer>
    )
}