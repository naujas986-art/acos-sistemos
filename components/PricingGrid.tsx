"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PricingTier {
    name: string;
    tagline: string;
    price: string;
    period: string;
    features: string[];
    isPopular?: boolean;
    ctaText: string;
}

const tiers: PricingTier[] = [
    {
        name: "Starter",
        tagline: "Core Automations",
        price: "€497",
        period: "one-time setup",
        features: [
            "3 Core Workflow Automations",
            "Airtable Base Setup",
            "Email Notifications",
            "Basic Documentation",
            "14-Day Support",
        ],
        ctaText: "Get Started",
    },
    {
        name: "Growth",
        tagline: "Full Airtable Ecosystem",
        price: "€1,497",
        period: "one-time setup",
        features: [
            "Unlimited Automations",
            "Complete Airtable CRM",
            "Client Portal Integration",
            "Advanced Reporting Dashboard",
            "Email + SMS Sequences",
            "30-Day Priority Support",
            "Monthly Optimization Call",
        ],
        isPopular: true,
        ctaText: "Most Popular",
    },
    {
        name: "Enterprise",
        tagline: "Custom AI Agents & SMS",
        price: "Custom",
        period: "tailored solution",
        features: [
            "Everything in Growth",
            "Custom AI Agent Development",
            "Advanced SMS Campaigns",
            "API Integrations",
            "White-Glove Onboarding",
            "Dedicated Success Manager",
            "SLA Guarantee",
        ],
        ctaText: "Contact Us",
    },
];

function PricingCard({
    tier,
    index,
}: {
    tier: PricingTier;
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative group rounded-2xl p-px overflow-hidden ${tier.isPopular
                    ? "bg-gradient-to-b from-[#BFF549]/50 to-transparent"
                    : "bg-gradient-to-b from-white/10 to-transparent"
                }`}
        >
            {/* Popular Badge */}
            {tier.isPopular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-[#BFF549] text-black text-xs font-semibold px-4 py-1 rounded-b-lg tracking-wide">
                        RECOMMENDED
                    </div>
                </div>
            )}

            <div
                className={`relative h-full rounded-2xl bg-black p-8 transition-all duration-500 ${tier.isPopular
                        ? "pt-12"
                        : ""
                    } group-hover:bg-white/[0.02]`}
            >
                {/* Glow effect on hover */}
                <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${tier.isPopular
                            ? "shadow-[inset_0_0_60px_rgba(191,245,73,0.1)]"
                            : "shadow-[inset_0_0_40px_rgba(255,255,255,0.03)]"
                        }`}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                        <p className="text-[#99A1AF] text-sm">{tier.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                        <div className="flex items-baseline gap-2">
                            <span
                                className={`text-5xl font-bold tracking-tight ${tier.isPopular ? "text-[#BFF549]" : "text-white"
                                    }`}
                            >
                                {tier.price}
                            </span>
                        </div>
                        <p className="text-[#99A1AF] text-sm mt-1">{tier.period}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <svg
                                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.isPopular ? "text-[#BFF549]" : "text-white/60"
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-[#99A1AF] text-sm leading-relaxed">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                        className={`w-full py-4 px-6 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${tier.isPopular
                                ? "bg-[#BFF549] text-black hover:shadow-[0_0_30px_rgba(191,245,73,0.4)] hover:scale-[1.02]"
                                : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                            }`}
                    >
                        {tier.ctaText}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default function PricingGrid() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative py-32 px-6 bg-black overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(191,245,73,0.03)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Choose Your{" "}
                        <span className="text-[#BFF549]">Operating System</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[#99A1AF] max-w-2xl mx-auto">
                        Three tiers designed to scale with your business. Start small, grow big.
                    </p>
                </motion.div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {tiers.map((tier, index) => (
                        <PricingCard key={tier.name} tier={tier} index={index} />
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[#99A1AF]/60 text-sm">
                        🔒 Secure payment • 💬 Free consultation • ⚡ Setup in 7 days
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
