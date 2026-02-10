"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Susipažįstame",
        description:
            "Nemokamo pokalbio metu suprantame jūsų verslą, procesus ir kur automatizacija duotų didžiausią naudą.",
        accent: "30 min pokalbis",
    },
    {
        number: "02",
        title: "Sukuriame",
        description:
            "Per 2–4 savaites paruošiame jūsų sistemą: pokalbių robotą, CRM, automatizacijas — viską, kas reikalinga.",
        accent: "2–4 savaitės",
    },
    {
        number: "03",
        title: "Paleidžiame",
        description:
            "Sistema pradeda dirbti. Jūs stebite rezultatus, o mes palaikome ir tobuliname pagal poreikį.",
        accent: "Nuolatinė palaikymas",
    },
];

export default function Process() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="relative py-28 sm:py-36 px-6 bg-black overflow-hidden">
            {/* Divider line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-[#BFF549] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Procesas
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                        Trys paprasti žingsniai.
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#BFF549]/30 via-[#BFF549]/10 to-transparent hidden md:block" />

                    <div className="space-y-8 md:space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                                className="flex items-start gap-6 md:gap-10"
                            >
                                {/* Number Circle */}
                                <div className="shrink-0 relative">
                                    <div className="w-16 h-16 rounded-full bg-[#BFF549]/10 border border-[#BFF549]/20 flex items-center justify-center">
                                        <span className="text-[#BFF549] font-bold text-lg">
                                            {step.number}
                                        </span>
                                    </div>
                                    {/* Glow dot */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#BFF549] rounded-full blur-sm opacity-50" />
                                </div>

                                {/* Content */}
                                <div className="glass-card rounded-2xl p-7 sm:p-8 flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-white font-semibold text-xl">
                                            {step.title}
                                        </h3>
                                        <span className="text-[#BFF549]/70 text-xs font-medium px-3 py-1 rounded-full bg-[#BFF549]/10">
                                            {step.accent}
                                        </span>
                                    </div>
                                    <p className="text-[#99A1AF] text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
