import { eventProps } from "@/interfaces";
import React from "react";
import Link from "next/link";

const Hero: React.FC<eventProps> = ({ ticketURL = "#" }) => {
    return (
        <section aria-label="Hero" className="relative">
            <div className="relative min-h-[450px] w-full">
                {/* Background image */}
                <div aria-hidden className="absolute inset-0 bg-gray-100 flex items-center justify-center text-6xl text-gray-300 placeholder">
                    <img src="/assets/Free_Billboard.jpg" alt="" className="object-cover w-full h-full rounded-lg" />
                </div>
            </div>
            <div className="absolute inset-0 bg-black/60" />

            {/* Hero content */}
            <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-6xl px-4 text-white">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Artza Signature Series — an immersive exhibition
                        </h1>

                        <p className="mt-4 text-sm md:text-base text-white/90">
                            Join us for an evening celebrating curated digital and handmade art,
                            unique gift experiences, and creative encounters. Limited seats available.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Link
                                href={ticketURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded border border-white px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black">
                                Register for Event
                            </Link>

                            <Link href="/home" className="inline-flex items-center justify-center rounded border border-white px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black">
                                Explore Artza
                            </Link>
                        </div>
                        <div className="mt-4 text-xs text-white/80">
                            Tickets: Regular • VIP • Early Bird (links open on the ticketing platform).
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Hero;