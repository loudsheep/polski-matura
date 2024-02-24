import Head from 'next/head';

const AdvancedMathExamPage = () => {
  const totalPoints = 50; // Maksymalna liczba punktów do uzyskania

  return (
    <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center text-justify">
      <Head>
        <title>Matura rozszerzona z matematyki - wszystko co musisz wiedzieć</title>
        <meta name="description" content="Informacje o egzaminie maturalnym z matematyki na poziomie rozszerzonym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Jak wygląda matura rozszerzona z matematyki – wszystko co musisz wiedzieć</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Co należy wziąć na maturę rozszerzoną z matematyki?</h2>
          <p className="text-lg leading-relaxed">
            Na maturę rozszerzoną z matematyki należy wziąć dowód osobisty, czarny długopis, linijkę, cyrkiel (kątomierz i ekierka są zabronione) oraz kalkulator prosty. Uczeń może także wnieść ze sobą butelkę wody. Karty wzorów są udostępniane przez szkołę.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Jak wygląda matura rozszerzona z matematyki?</h2>
          <p className="text-lg leading-relaxed">
            Arkusz obejmuje około 15 zadań – kilka otwartych i zamkniętych. Za wszystko można zdobyć maksymalnie {totalPoints} punktów. (nie ma progu punktowego, ale chcesz ich mieć jak najwięcej)
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Czy warto zdawać maturę rozszerzoną z matematyki?</h2>
          <p className="text-lg leading-relaxed">
            Matura z matematyki przyda się podczas rekrutacji na kierunki ścisłe, informatyczne czy techniczne oraz medyczne.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ile trwa matura rozszerzona z matematyki?</h2>
          <p className="text-lg leading-relaxed">
            Matura rozszerzona z matematyki trwa 180 minut – 3 godziny to dosyć czasu, aby rozwiązać wszystkie zadania i problemy matematyczne.
          </p>
          <p className="text-lg leading-relaxed">
            Czas pisania matury w przypadku wszystkich egzaminów może zostać wydłużony o 15 do nawet 85 minut, w zależności od trudności z którymi boryka się uczeń. Zasady wydłużania czasu egzaminu maturalnego, w tym także rozszerzenia z matematyki, są opisane na oficjalnej stronie CKE (Centralna Komisja Egzaminacyjna).
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdvancedMathExamPage;
