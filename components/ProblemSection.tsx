"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Klientas parašė vakar. Atsakėte šiandien.",
        description: "Kol jūs dirbote — klientas jau rado kitą.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
        title: "Sutartys, sąskaitos, priminimai — rankomis.",
        description: "Kiekvieną dieną tie patys veiksmai. Vėl ir vėl.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ),
        title: "Google atsiliepimai? Kai prisimenu paprašyti.",
        description: "Patenkinti klientai yra — bet atsiliepimų nėra.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
            </svg>
        ),
        title: "Kur ta užklausa? Messenger? SMS? El. paštas?",
        description: "Informacija pasklidusi visur. Vienos vietos — nėra.",
    },
];

export default function ProblemSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="relative py-28 sm:py-36 px-6 bg-black overflow-hidden">
            {/* Subtle top gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-[#BFF549] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Pažįstama situacija?
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                        Verslas auga. <br className="hidden sm:block" />
                        <span className="text-[#99A1AF]">Bet laikas — ne.</span>
                    </h2>
                </motion.div>

                {/* Pain Point Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * index }}
                            className="group glass-card rounded-2xl p-7 sm:p-8 transition-all duration-500 hover:border-white/10"
                        >
                            <div className="flex items-start gap-5">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#99A1AF] group-hover:text-[#BFF549] group-hover:bg-[#BFF549]/10 transition-all duration-500">
                                    {point.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
                                        {point.title}
                                    </h3>
                                    <p className="text-[#99A1AF] text-sm leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
