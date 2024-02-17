import Contributors from "@/components/Contributors";

export default function ONasPage() {
    return (
        <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-6">📚 Przygotowanie do Matury - O Nas</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Informatyka</h2>
                    <p>W sekcji Informatyka zgłębisz tajniki nauki o komputerach, algorytmów i programowania.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Polski</h2>

                    <h3 className="text-xl font-bold mb-2">Epoki literackie w skrócie 📖</h3>
                    <p>Przegląd najważniejszych epok literackich pomoże Ci zrozumieć ewolucję literatury.</p>

                    <h3 className="text-xl font-bold mb-2">Najważniejsze postacie z lektur 🧑‍🏫</h3>
                    <p>Spotkasz tu kluczowe postacie literackie, które warto znać przed maturą.</p>

                    <h3 className="text-xl font-bold mb-2">Opracowania pytań z matury ustnej 🗣️</h3>
                    <p>Przygotuj się do rozmowy egzaminacyjnej, korzystając z naszych opracowań pytań.</p>

                    <h3 className="text-xl font-bold mb-2">Środki stylistyczne ✒️</h3>
                    <p>Zapoznaj się z bogatą paletą środków stylistycznych, które pomogą Ci w analizie tekstów.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Angielski</h2>

                    <h3 className="text-xl font-bold mb-2">Zadania Maturalne 📝</h3>
                    <p>Rozwiąż zadania maturalne z angielskiego, aby lepiej przygotować się do egzaminu.</p>

                    <h3 className="text-xl font-bold mb-2">Powtórka Gramatyki 📚</h3>
                    <p>Zapoznaj się ponownie z gramatyką angielską, aby być pewnym jej zrozumienia przed maturą.</p>

                    <h3 className="text-xl font-bold mb-2">Słownictwo 📖</h3>
                    <p>Rozwijaj swoje słownictwo angielskie, ucząc się nowych słów przydatnych na egzaminie.</p>
                </section>

                <Contributors url="https://api.github.com/repos/loudsheep/polski-matura"></Contributors>
            </div>
        </div >
    )
}
