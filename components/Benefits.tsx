"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
    {
        value: "24/7",
        label: "Sistema dirba",
        description: "Klientai aptarnaujami bet kuriuo paros metu — net poilsio dienomis ir švenčių metu.",
    },
    {
        value: "0",
        label: "Pamestų užklausų",
        description: "Kiekvienas klientas, kiekviena žinutė — automatiškai išsaugoma ir tvarkoma CRM sistemoje.",
    },
    {
        value: "<5s",
        label: "Atsakymo laikas",
        description: "AI asistentas atsako klientams per sekundes — greičiau nei bet kuris darbuotojas.",
    },
    {
        value: "3x",
        label: "Daugiau atsiliepimų",
        description: "Automatiniai kvietimai palikti atsiliepimą padidina Google Reviews skaičių kelis kartus.",
    },
];

export default function Benefits() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="relative py-28 sm:py-36 px-6 bg-black overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#BFF549]/[0.04] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-[#BFF549] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Rezultatai
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                        Skaičiai kalba <br className="hidden sm:block" />
                        <span className="text-[#BFF549]">patys už save.</span>
                    </h2>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.12 * index }}
                            className="glass-card rounded-2xl p-7 sm:p-8 text-center group hover:border-[#BFF549]/20 transition-all duration-500"
                        >
                            {/* Big Number */}
                            <div className="text-5xl sm:text-6xl font-bold text-[#BFF549] mb-2 group-hover:scale-110 transition-transform duration-500">
                                {benefit.value}
                            </div>

                            {/* Label */}
                            <p className="text-white font-semibold text-lg mb-3">
                                {benefit.label}
                            </p>

                            {/* Description */}
                            <p className="text-[#99A1AF] text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
