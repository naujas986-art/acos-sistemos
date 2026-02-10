"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
        ),
        title: "AI Pokalbių Robotas",
        outcome: "Klientai gauna atsakymą per sekundes — net 3 val. nakties.",
        detail: "Jūsų svetainėje dirba protingas asistentas, kuris atsako į klausimus, padeda išsirinkti ir surenka užklausas automatiškai.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>
        ),
        title: "CRM Sistema",
        outcome: "Kiekviena užklausa vienoje vietoje — niekas nedingsta.",
        detail: "Visi klientai, užklausos ir statusai automatiškai tvarkomi vienoje sistemoje. Jokių Excel lentelių ar užrašų bloknotų.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
        title: "Automatinės Sutartys",
        outcome: "Sutartis išsiunčiama per sekundes — ne per dienas.",
        detail: "Kai klientas patvirtina užsakymą, sutartis sugeneruojama ir išsiunčiama automatiškai. Jums tereikia patvirtinti.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ),
        title: "Google Atsiliepimai",
        outcome: "Daugiau atsiliepimų — be jokio papildomo darbo.",
        detail: "Kai projektas baigiamas, klientas automatiškai gauna kvietimą palikti atsiliepimą Google. Jums nereikia prisiminti ar prašyti.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        title: "Email & SMS Pranešimai",
        outcome: "Klientas visada informuotas — automatiškai.",
        detail: "Patvirtinimai, priminimai, statusų atnaujinimai — viskas siunčiama automatiškai el. paštu arba SMS.",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="relative py-28 sm:py-36 px-6 bg-black overflow-hidden">
            {/* Background accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BFF549]/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-[#BFF549] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Ką gausite
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                        Sistema, kuri dirba <br className="hidden sm:block" />
                        <span className="text-[#BFF549]">už jus.</span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group glass-card rounded-2xl p-7 sm:p-8 transition-all duration-500 hover:border-[#BFF549]/20 hover:bg-white/[0.04] flex flex-col"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-[#BFF549]/10 flex items-center justify-center text-[#BFF549] mb-6 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-semibold text-xl mb-3">
                                {service.title}
                            </h3>

                            {/* Outcome — the emotional hook */}
                            <p className="text-[#BFF549]/80 text-sm font-medium mb-3">
                                {service.outcome}
                            </p>

                            {/* Detail */}
                            <p className="text-[#99A1AF] text-sm leading-relaxed mt-auto">
                                {service.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
