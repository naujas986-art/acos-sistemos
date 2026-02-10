import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ACOS",
};

export default function Salygos() {
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
                    Sąlygos ir Privatumas
                </h1>
                <p className="text-[#99A1AF] mb-12">
                    Paskutinį kartą atnaujinta: 2026 m. vasario 10 d.
                </p>

                <div className="space-y-10 text-[#99A1AF] leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            1. Bendrosios nuostatos
                        </h2>
                        <p>
                            Šios sąlygos reglamentuoja ACOS ir kliento santykius,
                            susijusius su automatizacijos sprendimų kūrimu ir teikimu.
                            Naudodamiesi mūsų paslaugomis, sutinkate su šiomis
                            sąlygomis.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            2. Paslaugos
                        </h2>
                        <p>
                            ACOS teikia verslo procesų automatizacijos paslaugas,
                            įskaitant, bet neapsiribojant: automatinį klientų
                            aptarnavimą, CRM integraciją, dokumentų automatizavimą ir
                            kitas individualiai pritaikytas sistemas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            3. Nemokamas bandymas
                        </h2>
                        <p>
                            Klientui suteikiamas nemokamas bandomasis laikotarpis.
                            Mokėjimas pradedamas tik tada, kai Klientas patvirtina,
                            kad sistema atitinka jo lūkesčius.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            4. Privatumo politika
                        </h2>
                        <p>
                            Mes gerbiame jūsų privatumą. Jūsų kontaktinius duomenis
                            (vardą, el. paštą) naudojame tik tam, kad susisiektume su
                            jumis dėl paslaugų ir paruoštume pasiūlymus. Duomenys
                            nėra perduodami trečiosioms šalims.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            5. Atsakomybė
                        </h2>
                        <p>
                            ACOS įsipareigoja užtikrinti sistemų veikimą, tačiau
                            neatsako už sutrikimus, atsiradusius dėl trečiųjų šalių
                            (pvz., serverių ar API tiekėjų) klaidų.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            6. Sutarties nutraukimas
                        </h2>
                        <p>
                            Bendradarbiavimą galima nutraukti bet kuriuo metu be jokių
                            papildomų baudų ar ilgalaikių įsipareigojimų.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            7. Kontaktai
                        </h2>
                        <p>
                            Iškilus klausimams, susisiekite el. paštu:{" "}
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
