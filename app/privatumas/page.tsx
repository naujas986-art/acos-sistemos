import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ACOS",
};

export default function Privatumas() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="max-w-3xl mx-auto px-6 py-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#99A1AF] hover:text-[#BFF549] transition-colors text-sm mb-12"
                >
                    ← Grįžti į pagrindinį
                </Link>

                <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                    Privatumo politika
                </h1>
                <p className="text-[#99A1AF] mb-12">
                    Paskutinį kartą atnaujinta: 2026 m. vasario 10 d.
                </p>

                <div className="space-y-10 text-[#99A1AF] leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            1. Bendroji informacija
                        </h2>
                        <p>
                            ACOS gerbia jūsų privatumą ir įsipareigoja saugoti jūsų
                            asmens duomenis. Ši privatumo politika paaiškina, kaip
                            renkame, naudojame ir saugome informaciją.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            2. Kokius duomenis renkame
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Kontaktinė informacija (vardas, el. paštas).</li>
                            <li>Techniniai duomenys (slapukai).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            3. Kontaktai
                        </h2>
                        <p>
                            El. paštas:{" "}
                            <a href="mailto:vytautas.automation@gmail.com" className="text-[#BFF549] hover:underline">
                                vytautas.automation@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
