import HeroCanvas from "@/components/HeroCanvas";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
    return (
        <main className="relative bg-black noise-overlay">
            {/* Fixed Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <span className="text-white font-semibold text-lg tracking-tight">
                            ACOS
                        </span>
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#booking"
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-[#BFF549]/30"
                    >
                        <span className="relative z-10">Rezervuoti skambutį</span>
                    </a>
                </div>
            </nav>

            {/* Hero Section with Scrollytelling */}
            <HeroCanvas />

            {/* Transition Gradient */}
            <div className="relative h-32 bg-gradient-to-b from-black via-black to-black">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#BFF549]/20 to-transparent" />
            </div>

            {/* Problem Section — Emotional Pain Points */}
            <ProblemSection />

            {/* Services — What You Get (Outcomes) */}
            <Services />

            {/* Process — 3 Simple Steps */}
            <Process />

            {/* Benefits — Stats & Results */}
            <Benefits />

            {/* FAQ — Common Questions */}
            <FAQ />

            {/* Footer CTA — Book a Call */}
            <FooterCTA />
        </main>
    );
}
