"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function FooterCTA() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="booking"
            ref={sectionRef}
            className="relative py-32 sm:py-40 px-6 bg-black overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(191,245,73,0.08)_0%,transparent_60%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFF549]/30 to-transparent" />

            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                {/* Main CTA Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
                        <LayoutTextFlip
                            text="Atgaukite laiką "
                            words={["šeimai.", "verslui.", "sau.", "tam, kas svarbu."]}
                            duration={2500}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                            wordClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
                        />
                    </div>

                    <p className="text-lg sm:text-xl text-[#99A1AF] max-w-2xl mx-auto mb-12">
                        Tegul sistema rūpinasi sutartimis, priminimais ir klientų aptarnavimu —
                        o jūs fokusuokitės į savo verslą, ne į kasdienes užduotis.
                    </p>

                    {/* CTA Button */}
                    <motion.a
                        href="https://calendly.com/vytautaskmts/new-meeting-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative inline-flex items-center gap-3 bg-[#BFF549] text-black font-semibold text-lg sm:text-xl px-10 sm:px-14 py-5 sm:py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(191,245,73,0.4)] cursor-pointer"
                    >
                        <span>Rezervuoti pokalbį</span>
                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>

                        {/* Animated ring */}
                        <motion.span
                            className="absolute inset-0 rounded-full border-2 border-[#BFF549]"
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.15, opacity: 0 }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeOut",
                            }}
                        />
                    </motion.a>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[#99A1AF]/60 text-sm"
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Nemokamai
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            30 minučių
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Be įsipareigojimų
                        </span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="max-w-6xl mx-auto mt-32 pt-12 border-t border-white/5 relative z-20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[#99A1AF]/50 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-white/70 font-medium">ACOS</span>
                    </div>

                    <p>© 2026 ACOS. Visos teisės saugomos.</p>

                    <div className="flex items-center gap-6">
                        <a
                            href="/salygos"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Sąlygos ir Privatumas
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
