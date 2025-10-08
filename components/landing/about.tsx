import React from "react";
import Link from "next/link";
import { eventProps } from "@/interfaces";

export default function About({ ticketURL = "#" }: eventProps) {
    return (
        <section className="border-b">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 items-start">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4"> About Event</h2>
                        <p className="mt-3 text-gray-700">
                            The Artza Signature Series brings together local and digital artists for a
                            themed exhibition showcasing contemporary pieces, commissioned works, and
                            live installations. Expect curated displays, artist talks, and limited-edition
                            collectibles.
                        </p>

                        <div className="mt-6">
                            <h3 className="font-medium">Tickets & Access</h3>
                            <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                <li><strong>Regular</strong> — General entry, exhibition access.</li>
                                <li><strong>VIP</strong> — Priority seating, meet-and-greet.</li>
                                <li><strong>Early Bird</strong> — Discounted price for early purchasers.</li>
                            </ul>

                            <div className="mt-4">
                                <Link
                                    href={ticketURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
                                >
                                    Register for Event
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold">Why attend?</h4>
                        <p className="mt-3 text-gray-700">
                            Connect with creatives, discover bespoke pieces, and support a new wave of
                            artists. Perfect for collectors, gift seekers, and those who love immersive
                            cultural experiences.
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="border p-3 rounded-md">
                                <div className="placeholder h-28 flex items-center justify-center text-3xl">#</div>
                                <p className="mt-2 text-sm font-medium">Artist Talks</p>
                            </div>

                            <div className="border p-3 rounded-md">
                                <div className="placeholder h-28 flex items-center justify-center text-3xl">#</div>
                                <p className="mt-2 text-sm font-medium">Limited Prints</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}