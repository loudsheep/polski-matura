"use client"

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import functionPlot from "function-plot";
import FunkcjaLiniowaComponent from "./FunkcjaLiniowaComponent";

export default function FunkcjePage() {

	useEffect(() => {
		functionPlot({
			target: '#quadratic-function',
			width: 400,
			height: 400,
			disableZoom: true,
			grid: true,
			xAxis: {
				label: 'x - axis',
				domain: [-3, 3]
			},
			yAxis: {
				label: 'y - axis',
				domain: [-1, 5]
			},
			data: [
				{
					fn: 'x^2'
				}
			]
		})
	})

	return (
		<div className="w-11/12 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center">
			<h1 className="text-center font-bold text-2xl my-10">Funkcje</h1>
			<FunkcjaLiniowaComponent></FunkcjaLiniowaComponent>
		</div>
	)
}
