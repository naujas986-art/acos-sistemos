import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ACOS",
};

export default function Privatumas() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Header */}
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
                            ACOS gerbia jūsų privatumą ir įsipareigoja saugoti
                            jūsų asmens duomenis. Ši privatumo politika
                            paaiškina, kaip renkame, naudojame ir saugome
                            informaciją, kai naudojatės mūsų svetaine ir
                            paslaugomis.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            2. Kokius duomenis renkame
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong className="text-white/80">Kontaktinė informacija</strong> —
                                vardas, el. paštas, telefono numeris, kai užpildote formą
                                arba rezervuojate pokalbį.
                            </li>
                            <li>
                                <strong className="text-white/80">Verslo informacija</strong> —
                                įmonės pavadinimas ir veiklos sritis, kurią pateikiate
                                konsultacijos metu.
                            </li>
                            <li>
                                <strong className="text-white/80">Techniniai duomenys</strong> —
                                IP adresas, naršyklės tipas ir puslapio peržiūros
                                statistika (per slapukus).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            3. Kaip naudojame duomenis
                        </h2>
                        <p>Jūsų duomenis naudojame tik šiais tikslais:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>Susisiekti su jumis dėl konsultacijos</li>
                            <li>Paruošti individualų pasiūlymą</li>
                            <li>Tobulinti mūsų svetainę ir paslaugas</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            4. Duomenų saugojimas
                        </h2>
                        <p>
                            Jūsų duomenis saugome tik tiek, kiek reikia aukščiau
                            nurodytiems tikslams pasiekti. Neperduodame jūsų duomenų
                            trečiosioms šalims be jūsų sutikimo, išskyrus teisės aktų
                            numatytais atvejais.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            5. Jūsų teisės
                        </h2>
                        <p>Pagal BDAR (GDPR) turite teisę:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>Prašyti prieigos prie savo duomenų</li>
                            <li>Prašyti ištaisyti arba ištrinti duomenis</li>
                            <li>Atšaukti sutikimą bet kuriuo metu</li>
                            <li>Pateikti skundą priežiūros institucijai</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            6. Kontaktai
                        </h2>
                        <p>
                            Jei turite klausimų dėl privatumo politikos, susisiekite su
                            mumis el. paštu:{" "}
                            <a
                                href="mailto:vytautas.automation@gmail.com"
                                className="text-[#BFF549] hover:underline"
                            >
                                vytautas.automation@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
