"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
    {href:"/", label:"Beranda"},
    {href:"/tentang", label:"Tentang"},
    {href:"/proyek", label:"Proyek"},
    {href:"/kontak", label:"Kontak"}
];

export default function Navbar () {
    const pathname = usePathname();
    
    return (
        <header className="bg-utama text-white flex-row">
            <nav className="mx-auto max-w-5xl grid grid-cols-2 gap-3 px-4 py-4 md:flex-row md:items-center md:justify-center">
                <Link href="/" className="text-xl font-bold justify-self-start">Azqal Andhika</Link>

                <ul className="flex flex-wrap gap-x-5  gap-y-2 justify-end">
                {menu.map((item) => {
                        let kelas = "text-gray-200 hover:text-white";
                        if (pathname === item.href) {
                            kelas = "font-bold text-white underline underline-offset-8"
                        }

                        return (
                            <li key={item.href}>
                                <Link href={item.href} className={kelas}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    }
                    )}
                </ul>
            </nav>
        </header>
    )
}