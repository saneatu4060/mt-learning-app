"use client"

export default function Footer() {

    return (
        <footer className="bg-white/50 z-10 backdrop-blur">
            <div className="mx-auto max-w-4xl text-center py-6 text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} MT-Learning app</p>
            </div>
        </footer>
    )
}