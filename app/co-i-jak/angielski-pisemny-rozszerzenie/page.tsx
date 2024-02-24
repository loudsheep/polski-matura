import Head from 'next/head';

const EnglishAdvancedWrittenExamPage = () => {
  const examDuration = 150; // Czas trwania egzaminu w minutach
  const maxPoints = 20; // Maksymalna liczba punktów do zdobycia za wypowiedź pisemną

  return (
    <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center text-justify">
      <Head>
        <title>Matura z języka angielskiego - część pisemna (rozszerzony)</title>
        <meta name="description" content="Informacje o egzaminie maturalnym z języka angielskiego (poziom rozszerzony) - część pisemna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Matura z języka angielskiego - część pisemna (rozszerzony)</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Rozumienie ze słuchu</h2>
          <p className="text-lg leading-relaxed">
            Maturzysta musi przejść przez 3-4 zadania, w których oceniana jest umiejętność zrozumienia nagrań dźwiękowych, takich jak monologi, dialogi czy wywiady. Nagrania trwają około 25 minut, a za każdą poprawną odpowiedź zdający otrzymuje 1 punkt.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Rozumienie tekstu pisanych</h2>
          <p className="text-lg leading-relaxed">
            Zadania polegają na interpretacji tekstów pisanych o łącznej długości 1300-1600 słów. Za każdą poprawną odpowiedź można zdobyć 1 punkt.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Znajomość leksykalno-gramatycznych środków językowych</h2>
          <p className="text-lg leading-relaxed">
            Maturzysta musi wykazać się znajomością słownictwa i gramatyki poprzez wybór poprawnych wyrazów oraz parafrazowanie zdań, słowotwórstwo itp. Za każdą poprawną odpowiedź można otrzymać 1 punkt.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Wypowiedź pisemna</h2>
          <p className="text-lg leading-relaxed">
            Ostatnie zadanie polega na napisaniu tekstu argumentacyjnego (np. listu formalnego, rozprawki) składającego się z 200-250 słów. Ocena uwzględnia treść, logikę, bogactwo językowe oraz poprawność. Maturzysta może zdobyć maksymalnie {maxPoints} punktów.
          </p>
        </div>
      </main>
    </div>
  );
};

export default EnglishAdvancedWrittenExamPage;
