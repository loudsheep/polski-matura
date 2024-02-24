

export default function RozprawkaPage() {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center mb-10'>
            <h1 className='text-center text-3xl font-bold my-10'>Jak pisać rozprawkę</h1>

            {/* Wstęp */}
            <div className="text-justify">
                <h2 className="font-bold text-2xl mt-5 mb-1">Wstęp</h2>
                <p>
                    To pierwsza część wypracowania. Nie powinien być zbyt długi i obszerny. W kilku zdaniach należy przedstawić informacje, które udowodnią zrozumienie przez Was tematu. Dodatkowo wstęp powinien ukazywać szerszy kontekst, zawierać genezę utworu oraz ramy czasowe w jakich powstał (osadzenie go w odpowiedniej epoce literackiej). W tej części musicie postawić tezę lub hipotezę, którą w dalszej części rozprawki należy przy pomocy argumentów potwierdzić lub odrzucić. Pamiętajcie – postawioną tezę potwierdzamy lub odrzucamy argumentami w rozwinięciu. Natomiast w momencie postawienia hipotezy konieczne jest przedstawienie tezy końcowej w zakończeniu/podsumowaniu rozprawki.
                </p>
            </div>

            {/* Argumentacja, czyli rozwinięcie */}
            <div className="text-justify">
                <h2 className="font-bold text-2xl mt-5 mb-1">Argumentacja, czyli rozwinięcie</h2>
                <p>
                    Argumenty, to inaczej dowody, na podstawie których potwierdzicie lub odrzucicie postawioną we wstępie tezę lub hipotezę. Ważne, aby argumentacja była zwięzła, bez zbędnego wodolejstwa. Tu nie liczy się ilość tekstu, a jakość przeprowadzanego dowodu. Zgodnie z wytycznymi egzaminacyjnymi konieczne jest odwoływanie do innych utworów literackich, prac plastycznych czy utworów muzycznych, które podejmowały ten sam temat. Wskazane jest również, abyście w swojej wypowiedzi użyli cytatów, które są potwierdzeniem lub zaprzeczeniem postawionej na początku tezy. Argumenty powinny być jasne i zwięzłe. Nie ma sensu wypisywanie ich jednym ciągiem, gdyż praca stanie się nieczytelna. Najlepiej każdy z argumentów wraz z krótkim opisem zawrzeć w oddzielnym akapicie. Dzięki temu praca staje się uporządkowana i przejrzysta. Niezbędnym minimum jest zawarcie co najmniej 2 argumentów. Najlepiej, jeżeli jest ich więcej. Nie oznacza to jednak, że w pracy powinny pojawić się wszystkie dowody, jakie tylko przyjdą do głowy. Dobrym rozwiązaniem jest wcześniejsze wypisanie ich w brudnopisie, pogrupowanie według ważności, następnie wypisanie ich na arkuszu maturalnym. Każdy z przytoczonych dowodów powinien zawierać imiona i nazwiska bohaterów, tytuł utworu (jeżeli argument jest odwołaniem do innego dzieła) lub cytat (jeżeli oczywiście pamiętacie).
                </p>
            </div>

            {/* Zakończenie */}
            <div className="text-justify">
                <h2 className="font-bold text-2xl mt-5 mb-1">Zakończenie</h2>
                <p>
                    W tej części wypracowania koniecznie muszą pojawić się wnioski potwierdzające lub odrzucające postawioną we wstępie tezę. Jeżeli na początku swojej rozprawki postawiliście hipotezę, w zakończeniu musicie sformułować tezę na podstawie przeprowadzonego w części głównej rozprawki dowodowi. Zakończenie, podobnie jak wstęp, nie powinno być zbyt obszerne. Musi jednak jasno odpowiadać na zadany w temacie pracy problem oraz nawiązywać do wstępu rozprawki.
                </p>
            </div>

            <div className="text-justify">
                <h2 className="font-bold text-2xl mt-5 mb-1">Na co zwrócić uwagę przy pisaniu rozprawki?</h2>
                <ul className="list-disc">
                    <li>
                        <p>Pisz zdania krótkie i zwięzłe. Zdania wielokrotnie złożone ciężej się czyta, a i zwiększa się ryzyko popełnienia błędu stylistycznego czy gramatycznego.</p>
                    </li>
                    <li>
                        <p>Staraj się unikać ogólników. Pisz konkretnie i na temat. Podstawą rozprawki jest dobra argumentacja, nie ilość tekstu jaką napiszecie.</p>
                    </li>
                    <li>
                        <p>Dziel tekst na akapity. Pozwoli to na zachowanie porządku pracy i sprawi, że stanie się ona przejrzysta.</p>
                    </li>
                    <li>
                        <p>Staraj się unikać powtórzeń, szczególnie w zdaniach sąsiadujących.</p>
                    </li>
                    <li>
                        <p>Stosuj różne formuły, które pozwolą Ci na wprowadzenie do tekstu cytatu, kolejnego argumentu lub wniosku.</p>
                    </li>
                    <li>
                        <p>Bądź obiektywny. W rozprawce nie stajesz po niczyjej stronie, nie oceniasz, a przeprowadzasz jedynie „suchy” dowód na potwierdzenie konkretnej tezy.</p>
                    </li>
                    <li>
                        <p>Zachowaj porządek argumentacji. Nie wracaj do wcześniejszych swoich wypowiedzi, nie powtarzaj ich w dalszych częściach pracy.</p>
                    </li>
                    <li>
                        <p>Pilnuj stylistyki i ortografii.</p>
                    </li>
                    <li>
                        <p>Rozprawka nie musi przedstawiać Waszego faktycznego zdania na zadany temat. Ma ona za zadanie sprawdzić wiedzę jej autora. Nie musisz zgadzać się osobiście z postawioną tezą, masz przedstawić dowód na podstawie znanych utworów literackich.</p>
                    </li>
                </ul>
            </div>

            <div className="text-justify">
                <h2 className="font-bold text-2xl mt-5 mb-1">Co ocenia komisja maturalna?</h2>
                <ul className="list-disc">
                    <li>
                        <p>Sformułowanie stanowiska, czyli poprawne postawienie tezy lub hipotezy we wstępie.</p>
                    </li>
                    <li>
                        <p>Argumentację. Zostanie oceniona ilość użytych argumentów do udowodnienia tezy, ich trafność, poprawność doboru, porządek przedstawienia (od najważniejszego do najmniej ważnego argumentu lub odwrotnie).</p>
                    </li>
                    <li>
                        <p>Wyczerpanie tematu. Komisja ocenia, czy przedstawione argumenty wyczerpują temat.</p>
                    </li>
                    <li>
                        <p>Spójność i logikę tekstu.</p>
                    </li>
                    <li>
                        <p>Poprawność stylistyczną, gramatyczną i językową.</p>
                    </li>
                </ul>
            </div>

            <div className="text-justify">
                <div className={`bg-green-200 border-green-600 border-l-4 px-4 my-2 py-2`}>
                    <h1 className={`text-bold text-xl text-green-900 pb-2 font-bold`}>Ważne</h1>
                    Przed przystąpieniem do pisania rozprawki „na czysto” ułóżcie przynajmniej plan w brudnopisie. Najlepiej, aby znalazły się tam konkretne argumenty, którymi będzie potwierdzali tezę (odpowiednio pogrupowane), tytuły utworów literackich, do których nawiążecie w swojej pracy, cytaty (jeżeli je pamiętacie i będziecie wykorzystywać).
                </div>
            </div>
        </div>
    )
}
