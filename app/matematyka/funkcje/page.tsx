"use client"

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import functionPlot from "function-plot";

export default function FunkcjePage() {

    useEffect(() => {
        functionPlot({
            target: '#quadratic-function',
            data: [
              {
                fn: 'x^2'
              }
            ]
          })
    })

    return (
        <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center">
            <h1 className="text-center font-bold text-2xl my-10">Funkcje</h1>
            <div id="quadratic-function"></div>
        </div>
    )
}
