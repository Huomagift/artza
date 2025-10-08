import Link from "next/link";
import { useState } from "react";

const Links = [
    { name: "Home", href: "/home" },
    { name: "Events", href: "/" },
    { name: "Services", href: "/services", badge: "Coming Soon" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b">
            <div className="mx-auto flex max-w-9xl items-center justify-between px-6 py-4">
            <Link href={"/"}>
                <span className="text-lg font-bold">ARTZA</span>
            </Link>

            <nav className="hidden md:flex gap-6 items-center">
                {Links.map((l) => (
                    <Link key={l.name} href={l.href} className="flex items-center gap-2">
                        <span className="text-m font-medium hover:underline">{l.name}</span>
                        {l.badge && <span className="text-xs px-2 py-0.5 border rounded-full inline-block">{l.badge}</span>}
                    </Link>
                ))}
            </nav>

            <button aria-label="menu" className="md:hidden px-2 py-1 text-lg" onClick={() => setOpen((v) => !v)}>
                {open ? "✕" : "☰"}
            </button>
        </div>

        
        {open && (
            <div className="md:hidden border-t">
                <div className="flex flex-col gap-2 px-4 py-3">
                    {Links.map((l) => (
                        <Link key={l.name} href={l.href}>
                            <div className="flex items-center justify-between">
                                <span>{l.name}</span>
                                {l.badge && <span className="text-xs px-2 py-0.5 border rounded-full">{l.badge}</span>}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )}
        </header>
    );
}