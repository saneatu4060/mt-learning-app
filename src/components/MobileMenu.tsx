"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavItem {
    label: string
    href: string
}

interface MobileMenuProps {
    navItems: NavItem[]
}

export function MobileMenu({ navItems }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="md:hidden ">
            <button onClick={toggleMenu} className="p-2 z-50 focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <div className="absolute left-0 z-50 w-full bg-white ">
                    <nav className="flex flex-col z-50">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className=" border-2 border-solid z-50 border-gray-100 px-6 py-4 text-gray-800 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    )
}

