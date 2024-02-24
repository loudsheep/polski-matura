import Head from 'next/head';

const MathExamPage = () => {
  const totalPoints = 46; // Maksymalna liczba punktów do uzyskania
  const passingScore = 0.3 * totalPoints; // Minimalna liczba punktów do zaliczenia (30% z maksymalnej liczby punktów)

  return (
    <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center text-justify">
      <Head>
        <title>Matura z matematyki - wszystko co musisz wiedzieć</title>
        <meta name="description" content="Informacje o egzaminie maturalnym z matematyki na poziomie podstawowym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Jak wygląda matura podstawowa z matematyki – wszystko co musisz wiedzieć</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Czy matura z matematyki jest obowiązkowa?</h2>
          <p className="text-lg leading-relaxed">
            Co roku uczniowie ostatnich klas szkół ponadpodstawowych przystępują do matury, która nie tylko weryfikuje ich dotychczasową wiedzę, ale jest także kluczem do dostania się na wymarzone studia. Matura z matematyki jest jednym z obowiązkowych przedmiotów na maturze.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ile punktów na maturze podstawowej z matematyki potrzeba, żeby zdać?</h2>
          <p className="text-lg leading-relaxed">
            Aby z sukcesem zdać egzamin maturalny z matematyki na poziomie podstawowym, wystarczy, że uzyskasz co najmniej {passingScore} punktów, co stanowi przynajmniej 30% wszystkich możliwych punktów ({totalPoints} punktów).
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ile trwa matura z matematyki?</h2>
          <p className="text-lg leading-relaxed">
            Na wykonanie wszystkich zadań każdy uczeń ma 180 minut, czyli o 10 minut dłużej niż mieli na oddanie arkusza maturzyści 2022.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Z jakich przyrządów można korzystać podczas matury z matematyki?</h2>
          <p className="text-lg leading-relaxed">
            Na egzaminie dojrzałości na poziomie podstawowym można korzystać z prostego kalkulatora oraz zestawu wzorów matematycznych przygotowanych przez CKE. Nie wolno jednak wnosić kalkulatorów naukowych o bardziej zaawansowanych funkcjach.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Minimalna liczba punktów do zaliczenia</h2>
          <p className="text-lg leading-relaxed">
            Aby zdać maturę z matematyki na poziomie podstawowym, wystarczy uzyskać co najmniej {passingScore} punktów, co stanowi przynajmniej 30% wszystkich możliwych punktów ({totalPoints} punktów).
          </p>
        </div>
      </main>
    </div>
  );
};

export default MathExamPage;
