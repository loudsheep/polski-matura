import Head from 'next/head';

const EnglishExamPage = () => {
  const totalPoints = 30; // Maksymalna liczba punktów do uzyskania
  const passingScore = 0.3 * totalPoints; // Minimalna liczba punktów do zaliczenia (30% z maksymalnej liczby punktów)

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Egzamin ustny z języka angielskiego</title>
        <meta name="description" content="Strona z informacjami o egzaminie ustnym z języka angielskiego" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Egzamin ustny z języka angielskiego</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Zasady egzaminu ustnego</h2>
          <p className="text-lg leading-relaxed">
            Matura ustna z języka angielskiego trwa około 15 minut i składa się z rozmowy wstępnej oraz trzech zadań.
            Zadania obejmują: rozmowę wstępną, opisanie zdjęcia, wybór elementu z materiału stymulującego i odpowiedź na pytania.
            Nie przewiduje się czasu na zapoznanie się z całym zestawem przed przystąpieniem do odpowiedzi.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Szczegółowe informacje na temat poszczególnych zadań:
          </p>
          <ul className="list-disc pl-8">
            <li>Rozmowa wstępna - trwa około dwóch minut i nie jest oceniana, ale ma na celu oswojenie zdającego z sytuacją egzaminacyjną.</li>
            <li>Zadanie 1 - trwa maksymalnie trzy minuty i polega na odegraniu roli oraz prowadzeniu rozmowy na wskazany temat.</li>
            <li>Zadanie 2 - trwa około czterech minut i polega na opisaniu zdjęcia oraz odpowiedzi na pytania egzaminatora.</li>
            <li>Zadanie 3 - najdłuższe, trwa około pięciu minut i polega na wyborze elementu z materiału stymulującego i uzasadnieniu wyboru.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Zasady oceniania</h2>
          <p className="text-lg leading-relaxed">
            Przy ocenie z matury ustnej z języka angielskiego bierze się pod uwagę pięć kryteriów, obejmujących sprawność komunikacyjną, zakres i poprawność struktur leksykalno-gramatycznych, wymowę oraz płynność wypowiedzi.
            Maksymalna liczba punktów do uzyskania wynosi 18 punktów za sprawność komunikacyjną, 4 punkty za zakres struktur leksykalno-gramatycznych, 4 punkty za poprawność struktur leksykalno-gramatycznych, 2 punkty za wymowę i 2 punkty za płynność wypowiedzi.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Oceniając maturę ustną z angielskiego, komisja bierze pod uwagę m.in. czy zdający mówi na temat i odnosi się do polecenia oraz zakres pomocy ze strony egzaminującego.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Minimalna liczba punktów do zaliczenia</h2>
          <p className="text-lg leading-relaxed">
            Aby zdać egzamin ustny z języka angielskiego, wymagane jest uzyskanie co najmniej {passingScore} punktów, co stanowi przynajmniej 30% możliwych punktów ({totalPoints} punktów).
          </p>
        </div>
      </main>
    </div>
  );
};

export default EnglishExamPage;
