"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
    {
        question: "Kiek kainuoja?",
        answer: "Kaina priklauso nuo jūsų verslo poreikių ir automatizacijos apimties. Per nemokamą pokalbį aptarsime jūsų situaciją ir pateiksime individualų pasiūlymą — be jokių įsipareigojimų.",
    },
    {
        question: "Ar tinka mano verslui?",
        answer: "Mūsų sprendimai geriausiai tinka paslaugų verslams: baldų gamybai, statyboms, remontui, grožio salonams ir panašioms sritims. Jei turite klientus ir rutininius procesus — greičiausiai tinka.",
    },
    {
        question: "Kiek laiko užtrunka viskas paruošti?",
        answer: "Standartiškai — nuo 2 iki 4 savaičių. Per pirmą pokalbį nustatome apimtį ir pateikiame tikslų terminą. Sudėtingesniems projektams gali prireikti daugiau laiko.",
    },
    {
        question: "Ar man reikia techninių žinių?",
        answer: "Ne. Mes viską paruošiame, sukonfigūruojame ir apmokome jus naudotis. Sistema sukurta taip, kad ja naudotis būtų paprasta — kaip naudotis telefonu.",
    },
    {
        question: "Kas jeigu kažkas neveikia?",
        answer: "Mes teikiame nuolatinį palaikymą. Jei kažkas sugenda ar reikia pakeitimų — susisiekiate su mumis ir mes viską sutvarkom. Jūsų verslas niekada neliks be pagalbos.",
    },
    {
        question: "Ar galiu išbandyti be rizikos?",
        answer: "Taip! Duodame nemokamą bandomąjį laikotarpį, kad patys pamatytumėte rezultatus. Mokate tik tada, kai sistema jums tinka ir matote realią naudą savo verslui. Jokių paslėptų mokesčių ar ilgalaikių įsipareigojimų.",
    },
];

function FAQItem({
    faq,
    isOpen,
    onClick,
    index,
    isInView,
}: {
    faq: (typeof faqs)[0];
    isOpen: boolean;
    onClick: () => void;
    index: number;
    isInView: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 * index }}
        >
            <button
                onClick={onClick}
                className={`w-full text-left p-6 sm:p-7 rounded-2xl transition-all duration-300 ${isOpen
                    ? "glass-card border-[#BFF549]/20"
                    : "bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/10"
                    }`}
            >
                <div className="flex items-center justify-between gap-4">
                    <h3
                        className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? "text-[#BFF549]" : "text-white"
                            }`}
                    >
                        {faq.question}
                    </h3>
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                    >
                        <svg
                            className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-[#BFF549]" : "text-[#99A1AF]"
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m6-6H6"
                            />
                        </svg>
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="text-[#99A1AF] text-sm leading-relaxed mt-4 pr-12">
                                {faq.answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </motion.div>
    );
}

export default function FAQ() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section ref={sectionRef} className="relative py-28 sm:py-36 px-6 bg-black overflow-hidden">
            {/* Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-[#BFF549] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        D.U.K.
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                        Dažniausiai užduodami klausimai
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
