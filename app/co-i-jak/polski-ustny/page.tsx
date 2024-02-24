import Head from 'next/head';

const ExamPage = () => {
  const totalPoints = 30; // Maksymalna liczba punktów do uzyskania
  const passingScore = 0.3 * totalPoints; // Minimalna liczba punktów do zaliczenia (30% z maksymalnej liczby punktów)

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Egzamin ustny z języka polskiego</title>
        <meta name="description" content="Strona z informacjami o egzaminie ustnym z języka polskiego" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Egzamin ustny z języka polskiego</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ważne informacje</h2>
          <p className="text-lg leading-relaxed">
            Egzamin ustny trwa 30 minut, w tym 15 minut na przygotowanie wypowiedzi i 15 minut na jej wygłoszenie oraz rozmowę z zespołem egzaminującym.
            Uzyskać można maksymalnie {totalPoints} punktów. Ocena uwzględnia merytorykę, kompozycję wypowiedzi oraz poprawność językową.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Aby zdać egzamin, wymagane jest uzyskanie co najmniej {passingScore} punktów, co stanowi przynajmniej 30% możliwych punktów.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Punkty są przyznawane za:
          </p>
          <ul className="list-disc pl-8">
            <li>Aspekt merytoryczny wypowiedzi monologowych w zadaniach 1. i 2. (od 0 do 16 pkt)</li>
            <li>Kompozycję wypowiedzi monologowych w zadaniach 1. i 2. ocenianą łącznie (od 0 do 4 pkt)</li>
            <li>Aspekt merytoryczny wypowiedzi podczas rozmowy (od 0 do 6 pkt)</li>
            <li>Zakres i poprawność środków językowych w wypowiedziach monologowych oraz podczas rozmowy (od 0 do 4 pkt)</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            Uwzględnia się także komunikację niewerbalną – gesty, mimika i mowa ciała.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ExamPage;
