import Head from 'next/head';

const EnglishBasicWrittenExamPage = () => {
  const examDuration = 120; // Czas trwania egzaminu w minutach
  const maxPoints = 50; // Maksymalna liczba punktów do zdobycia

  return (
    <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center text-justify">
      <Head>
        <title>Matura z języka angielskiego - część pisemna (podstawowy)</title>
        <meta name="description" content="Informacje o egzaminie maturalnym z języka angielskiego (poziom podstawowy) - część pisemna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Matura z języka angielskiego - część pisemna (podstawowy)</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Jak wygląda matura z języka angielskiego?</h2>
          <p className="text-lg leading-relaxed">
            Egzamin maturalny z języka angielskiego składa się z części pisemnej, która trwa {examDuration} minut. W części pisemnej zdający rozwiązują zadania z rozumienia ze słuchu, rozumienia tekstu czytanego, znajomości środków językowych oraz umiejętności konstruowania wypowiedzi pisemnej. Za całą część pisemną można zdobyć maksymalnie {maxPoints} punktów.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Matura z angielskiego - struktura egzaminu pisemnego</h2>
          <table className="table-auto border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-600 px-4 py-2">Część</th>
                <th className="border border-gray-600 px-4 py-2">Opis</th>
                <th className="border border-gray-600 px-4 py-2">Punkty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Rozumienie ze słuchu</td>
                <td className="border border-gray-600 px-4 py-2">Zadania na dobieranie, wielokrotnego wyboru, prawda/fałsz</td>
                <td className="border border-gray-600 px-4 py-2">15</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Rozumienie tekstu czytanego</td>
                <td className="border border-gray-600 px-4 py-2">Zadania na dobieranie, wielokrotnego wyboru, prawda/fałsz</td>
                <td className="border border-gray-600 px-4 py-2">15</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Znajomość środków językowych</td>
                <td className="border border-gray-600 px-4 py-2">Zadania na dobieranie, wielokrotnego wyboru</td>
                <td className="border border-gray-600 px-4 py-2">10</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Wypowiedź pisemna</td>
                <td className="border border-gray-600 px-4 py-2">Tekst użytkowy (list, e-mail, wiadomość na blogu/forum)</td>
                <td className="border border-gray-600 px-4 py-2">10</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-gray-600 px-4 py-2 font-bold">Razem</td>
                <td className="border border-gray-600 px-4 py-2 font-bold">-</td>
                <td className="border border-gray-600 px-4 py-2 font-bold">50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Z jakich części składa się egzamin pisemny na maturze z angielskiego?</h2>
          <p className="text-lg leading-relaxed">
            Część pisemna egzaminu z języka angielskiego składa się z rozumienia ze słuchu, rozumienia tekstu czytanego, znajomości środków językowych oraz wypowiedzi pisemnej.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Punktacja egzaminu pisemnego</h2>
          <p className="text-lg leading-relaxed">
            W części sprawdzającej rozumienie ze słuchu, rozumienie tekstu czytanego oraz znajomość środków językowych za każdy dobrze rozwiązany element poszczególnych zadań otrzymuje się 1 punkt. Wypowiedź pisemna jest oceniana według określonych kryteriów, gdzie za treść można zdobyć od 0 do 4 punktów, za spójność i logikę od 0 do 2 punktów, za zakres środków językowych od 0 do 2 punktów, a za poprawność środków językowych również od 0 do 2 punktów.
          </p>
        </div>
      </main>
    </div>
  );
};

export default EnglishBasicWrittenExamPage;
