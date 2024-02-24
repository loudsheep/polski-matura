import Head from 'next/head';

const ComputerScienceExamPage = () => {
  const theoreticalExamDuration = 60; // Czas trwania części teoretycznej egzaminu w minutach
  const practicalExamDuration = 150; // Czas trwania części praktycznej egzaminu w minutach
  const theoreticalMaxPoints = 15; // Maksymalna liczba punktów do zdobycia na części teoretycznej
  const practicalMaxPoints = 35; // Maksymalna liczba punktów do zdobycia na części praktycznej

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Matura z informatyki</title>
        <meta name="description" content="Informacje o egzaminie maturalnym z informatyki dla liceów i techników" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Matura z informatyki</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Matura dla techników</h2>
          <p className="text-lg leading-relaxed">
            Egzamin dzieli się na dwie części: teoretyczną i praktyczną. Część teoretyczna trwa {theoreticalExamDuration} minut i można zdobyć maksymalnie {theoreticalMaxPoints} punktów. Część praktyczna trwa {practicalExamDuration} minut i można zdobyć maksymalnie {practicalMaxPoints} punktów.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Matura dla licealistów</h2>
          <p className="text-lg leading-relaxed">
            Egzamin trwa {theoreticalExamDuration + practicalExamDuration} minut. Zadania są połączone, a mamy dostęp do komputera przez cały czas. Maksymalna liczba punktów jest taka sama jak dla techników.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Część teoretyczna</h2>
          <p className="text-lg leading-relaxed">
            Uczniowie techników piszą zadania bez użycia komputera, np. konwersje między systemami liczbowymi, algorytmy sortowania. Maksymalnie można zdobyć {theoreticalMaxPoints} punktów.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Część praktyczna</h2>
          <p className="text-lg leading-relaxed">
            Uczniowie techników korzystają z komputera, ale bez dostępu do internetu. Maksymalnie można zdobyć {practicalMaxPoints} punktów.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Wydłużony czas</h2>
          <p className="text-lg leading-relaxed">
            Osoby ubiegające się o wydłużony czas mogą go otrzymać na podstawie konkretnych potrzeb zdrowotnych. Decyzja o wykorzystaniu dodatkowego czasu musi być podjęta przed egzaminem.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Deklaracja maturalna</h2>
          <p className="text-lg leading-relaxed">
            Wybór programów i języka programowania w deklaracji powinien być uzależniony od umiejętności i znajomości danego narzędzia. Microsoft Access i Microsoft Excel są dobrymi wyborami do bazy danych i arkusza kalkulacyjnego. Python jest często używanym językiem programowania na maturze.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ComputerScienceExamPage;
