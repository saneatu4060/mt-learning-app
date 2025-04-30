"use client"

export default function Footer() {

    return (
        <footer className="bg-background/50 z-10 backdrop-blur mt-auto border-t border"> {/* 修正 */}
            {/* ★ text-gray-500 を text-muted-foreground に変更 */}
            <div className="container mx-auto max-w-4xl text-center py-5 px-4 text-sm text-muted-foreground"> {/* 修正 */}
                <p>&copy; {new Date().getFullYear()} MT-Learning app</p>
            </div>
        </footer>
    )
}