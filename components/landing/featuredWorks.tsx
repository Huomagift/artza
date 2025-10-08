import React from "react";
import { Work } from "@/interfaces";

const Sample: Work[] = [
    { id: "w1", title: "Custom Portrait" },
    { id: "w2", title: "Money Bouquet" },
    { id: "w3", title: "Interior Surprise" },
    { id: "w4", title: "Digital Print" },
    { id: "w5", title: "Framed Series" },
    { id: "w6", title: "Event Installation" },
];

export default function FeaturedWorks() {
    return (
        <section aria-labelledby="featured-works" className="border-b py-12">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex items-center justify-between mb-8">
                    <h3 id="featured-works" className="text-2xl font-semibold">Featured Works</h3>
                    <p className="text-sm text-gray-500">Curated selections from past projects</p>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Sample.map((w) => (
                        <article key={w.id} className="border rounded-md overflow-hidden hover:shadow-lg transition bg-amber-50">
                            <div className="placeholder h-44 flex items-center justify-center text-3xl">#</div>
                            <div className="p-4">
                                <h4 className="font-medium">{w.title}</h4>
                                <p className="mt-2 text-sm text-gray-600">{w.subtitle ?? "Past work example"}</p>
                                <div className="mt-3">
                                    <button className="text-sm rounded border px-3 py-1">Request Quote</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
};