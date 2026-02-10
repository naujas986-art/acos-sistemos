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
                    Paslaugų teikimo sąlygos
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
                            kitas individualiai pritaikytas sistemas. Konkreti paslaugų
                            apimtis nustatoma individualiai po nemokamos konsultacijos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            3. Nemokamas bandymas
                        </h2>
                        <p>
                            Klientui suteikiamas nemokamas bandomasis laikotarpis,
                            kurio metu Klientas gali įvertinti sistemos veikimą.
                            Mokėjimas pradedamas tik tada, kai Klientas patvirtina,
                            kad sistema atitinka jo lūkesčius. Bandomojo laikotarpio
                            trukmė nustatoma individualiai.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            4. Mokėjimai
                        </h2>
                        <p>
                            Kainos nustatomos individualiai pagal projekto apimtį ir
                            sudėtingumą. Mokėjimo sąlygos aptariamos ir sutariamos prieš
                            pradedant darbus. Visos kainos nurodomos su PVM arba be PVM,
                            priklausomai nuo Paslaugų teikėjo mokestinio statuso.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            5. Atsakomybė
                        </h2>
                        <p>
                            ACOS įsipareigoja teikti kokybiškas paslaugas
                            ir užtikrinti sistemų veikimą. ACOS neatsako
                            už nuostolius, atsiradusius dėl trečiųjų šalių paslaugų
                            (pvz., serverių, API tiekėjų) sutrikimų ar force majeure
                            aplinkybių.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            6. Sutarties nutraukimas
                        </h2>
                        <p>
                            Bet kuri šalis gali nutraukti bendradarbiavimą, apie tai
                            pranešusi kitai šaliai raštu ne vėliau kaip prieš 14
                            kalendorinių dienų. Jokių ilgalaikių įsipareigojimų ar
                            baudų už nutraukimą.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            7. Intelektinė nuosavybė
                        </h2>
                        <p>
                            Visi specialiai Klientui sukurti sprendimai priklauso
                            Klientui. ACOS pasilieka teisę į bendrinius komponentus
                            ir metodologijas, kurie gali būti naudojami kituose
                            projektuose.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            8. Kontaktai
                        </h2>
                        <p>
                            Dėl sąlygų klausimų kreipkitės el. paštu:{" "}
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