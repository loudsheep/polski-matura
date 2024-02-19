import React from "react";
import dynamic from "next/dynamic";

const ZbioryMathComponent= dynamic(() => import("./ZbioryMathComponent"), {
    ssr: false,
});

const PotegiMathComponent= dynamic(() => import("./PotegiMathComponent"), {
    ssr: false,
})

export default function LiczbyZbioryPage() {
    return (
        <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center">
            <h1 className="text-center font-bold text-2xl my-10">Liczby rzeczywiste, zbiory</h1>
            <h2 className="font-bold text-lg border-b">Potęgi</h2>
            <div >
                <PotegiMathComponent></PotegiMathComponent>
            </div>
        </div>
    )
}
