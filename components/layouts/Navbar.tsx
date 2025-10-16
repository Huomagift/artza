import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Links = [
    { name: "Home", href: "/home" },
    { name: "Events", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b">
            <div className="mx-auto flex max-w-9xl items-center justify-between px-6 py-4">
            <Link href={"/"} className="flex items-center gap-2">
            <Image src="/assets/artza-logo-2.png" alt="Artza Logo" width={40} height={40} className="object-contain"/>
                <span className="text-lg font-bold">ARTZA</span>
            </Link>

            <nav className="hidden md:flex gap-6 items-center">
                {Links.map((l) => (
                    <Link key={l.name} href={l.href} className="flex items-center gap-2">
                        <span className="text-m font-medium hover:underline text-amber-500">{l.name}</span>
                    </Link>
                ))}
            </nav>

            <button aria-label="menu" className="md:hidden px-2 py-1 text-lg text-amber-500" onClick={() => setOpen((v) => !v)}>
                {open ? "✕" : "☰"}
            </button>
        </div>

        
        {open && (
            <div className="md:hidden border-t">
                <div className="flex flex-col gap-2 px-4 py-3">
                    {Links.map((l) => (
                        <Link key={l.name} href={l.href}>
                            <div className="flex items-center justify-between text-amber-500">
                                <span>{l.name}</span>
                             </div>
                        </Link>
                    ))}
                </div>
            </div>
        )}
        </header>
    );
}