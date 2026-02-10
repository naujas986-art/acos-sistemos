"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    metric?: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "We went from spending 15 hours a week on client follow-ups to zero. The system just handles it. Mind-blowing.",
        author: "Sarah Chen",
        role: "Founder",
        company: "DesignOps Studio",
        metric: "15 hrs/week saved",
    },
    {
        quote:
            "Our review rate jumped from 12% to 67% after implementing the automated SMS sequences. Game changer for our reputation.",
        author: "Marcus Rodriguez",
        role: "Operations Director",
        company: "HomeBase Contractors",
        metric: "5x more reviews",
    },
    {
        quote:
            "The onboarding automation alone paid for itself in the first month. Clients feel premium, I feel free.",
        author: "Emma Lindqvist",
        role: "CEO",
        company: "Nordic Consulting",
        metric: "ROI in 30 days",
    },
    {
        quote:
            "I used to dread Monday mornings—now the system has already sorted everything. It's like having a silent partner.",
        author: "David Park",
        role: "Managing Partner",
        company: "Apex Legal",
        metric: "Zero Monday stress",
    },
    {
        quote:
            "We scaled from 20 to 80 clients without adding a single admin hire. The automation just absorbed the growth.",
        author: "Priya Sharma",
        role: "Co-founder",
        company: "GrowthStack Agency",
        metric: "4x clients, 0 hires",
    },
    {
        quote:
            "Finally, a system that thinks like I do. Every edge case I worried about, it already handles.",
        author: "Thomas Müller",
        role: "Founder",
        company: "TechBridge Solutions",
        metric: "99.9% automation",
    },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative"
        >
            <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 h-full transition-all duration-500">
                {/* Metric Badge */}
                {testimonial.metric && (
                    <div className="inline-block mb-4">
                        <span className="text-xs font-semibold text-[#BFF549] bg-[#BFF549]/10 px-3 py-1 rounded-full tracking-wide">
                            {testimonial.metric}
                        </span>
                    </div>
                )}

                {/* Quote */}
                <blockquote className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#BFF549]/30 to-[#BFF549]/10 flex items-center justify-center">
                        <span className="text-[#BFF549] font-semibold text-sm">
                            {testimonial.author.charAt(0)}
                        </span>
                    </div>
                    <div>
                        <p className="text-white font-medium text-sm">{testimonial.author}</p>
                        <p className="text-[#99A1AF] text-xs">
                            {testimonial.role} · {testimonial.company}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative py-32 px-6 bg-black overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,245,73,0.02)_0%,transparent_50%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Trusted by <span className="text-[#BFF549]">Operators</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[#99A1AF] max-w-2xl mx-auto">
                        Real results from businesses that automated their chaos.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.author}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {[
                        { value: "500+", label: "Automations Built" },
                        { value: "12k+", label: "Hours Saved/Month" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "7 days", label: "Avg. Setup Time" },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <p className="text-3xl sm:text-4xl font-bold text-[#BFF549]">
                                {stat.value}
                            </p>
                            <p className="text-[#99A1AF] text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
