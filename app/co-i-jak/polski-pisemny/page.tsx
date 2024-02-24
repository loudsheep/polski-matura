import Head from 'next/head';

const PolishExamPage = () => {
  const passingPercentage = 30; // Procent punktów potrzebny do zaliczenia egzaminu
  const basicExamDuration = 240; // Czas trwania egzaminu podstawowego w minutach
  const advancedExamDuration = 180; // Czas trwania egzaminu rozszerzonego w minutach

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Matura z języka polskiego - wszystko co musisz wiedzieć</title>
        <meta name="description" content="Informacje o egzaminie maturalnym z języka polskiego" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Matura z języka polskiego - wszystko co musisz wiedzieć</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Jaki wynik trzeba zdobyć, by zdać maturę z języka polskiego?</h2>
          <p className="text-lg leading-relaxed">
            Każdy maturzysta, który chce mieć świadectwo dojrzałości, musi przystąpić do egzaminu pisemnego z języka polskiego na poziomie podstawowym. Aby zdać egzamin pisemny, należy uzyskać {passingPercentage}% wszystkich punktów.
          </p>
          <p className="text-lg leading-relaxed">
            Warto jednocześnie pamiętać, że maturzysta może również przystąpić do egzaminu pisemnego z języka polskiego na poziomie rozszerzonym. Co istotne, wynik tego egzaminu nie wpływa na zdanie matury.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ile trwa matura z języka polskiego?</h2>
          <p className="text-lg leading-relaxed">
            Egzamin pisemny z języka polskiego na poziomie podstawowym trwa {basicExamDuration} minut. Arkusz egzaminacyjny składa się obecnie z trzech części.
          </p>
          <p className="text-lg leading-relaxed">
            Z kolei egzamin pisemny z języka polskiego na poziomie rozszerzonym trwa {advancedExamDuration} minut.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Po maturze - studia I stopnia na Uniwersytecie Dolnośląskim DSW?</h2>
          <p className="text-lg leading-relaxed">
            Sprawdź dostępne kierunki.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Co trzeba umieć, by zdać egzamin maturalny z języka polskiego?</h2>
          <p className="text-lg leading-relaxed">
            Dla wielu osób najważniejsze jest dowiedzenie się, czego muszą się nauczyć, by zdać maturę z języka polskiego. Zadania na egzaminie maturalnym z języka polskiego (podobnie zresztą jak i z innych przedmiotów) odnoszą się do wymagań ogólnych i szczegółowych ujętych w podstawie programowej dla szkoły ponadgimnazjalnej.
          </p>
          <p className="text-lg leading-relaxed">
            Osoby, które chcą zapoznać się ze szczegółowymi informacjami dotyczącymi egzaminu maturalnego z języka polskiego (zarówno pisemnego jak i ustnego) powinny sięgnąć po Informator o egzaminie maturalnym z języka polskiego, który publikuje Centralna Komisja Egzaminacyjna.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PolishExamPage;
