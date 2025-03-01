"use client"

export default function Footer() {

    return (
        <div className="bg-white/50 z-0 backdrop-blur">
            <div className="mx-auto max-w-2xl text-center py-6 text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} MT-Learning app</p>
            </div>
        </div>
    )
}