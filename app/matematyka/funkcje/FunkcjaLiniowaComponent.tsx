import React, { useEffect } from 'react'
import { InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css';
import functionPlot from 'function-plot';

export default function FunkcjaLiniowaComponent() {

	useEffect(() => {
		functionPlot({
			target: '#linear-function',
			grid: true,
			width: 300,
			height: 300,
			disableZoom: true,
			tip: {
				xLine: true,
				yLine: true
			},
			data: [
				{
					fn: 'x',
				},
				{
					points: [
						[1, 1],
						[3, 3]
					],
					fnType: "points",
					graphType: "scatter",
				},
				{
					text: "A",
					color: "darkred",
					attr: {
						'text-anchor': "middle"
					},

					location: [1, 1.1],
					graphType: "text"
				},
				{
					text: "B",
					color: "darkred",
					attr: {
						'text-anchor': "middle"
					},

					location: [3, 3.1],
					graphType: "text"
				}
			],
			xAxis: {
				domain: [-1, 4]
			},
			yAxis: {
				domain: [-1, 4]
			}
		})
	})

	return (
		<div className='flex-column'>
			<h2 className='pb-2 border-b-2 text-xl font-semibold flex-1'>Funkcja liniowa</h2>
			<section className='flex flex-col md:flex-row'>
				<div className='flex flex-col gap-2'>
					<p>
						<span className="font-semibold">Funkcją liniową</span> nazywamy funkcję określoną wzorem <InlineMath math="f(x)=ax + b" /> dla <InlineMath math='x \isin \Reals' />, gdzie <InlineMath math='a' /> i <InlineMath math='b' /> są stałymi.
					</p>
					<p>
						<span className="font-semibold">Wykresem funkcji liniowej</span> jest prosta. Liczbę <InlineMath math='a' /> nazywamy <span className="font-semibold">współczynnikiem kierunkowym</span> prostej, a równanie <InlineMath math='y = ax + b' /> - <span className="font-semibold">równaniem kierunkowym</span>.
					</p>
					<p>
						Współczynnikiem kierunkowym prostej <InlineMath math='y = ax + b' /> przechodzącej przez dwa różne punky <InlineMath math='A(x_1, y_1)' /> i <InlineMath math='B(x_1, y_2)' />, jest równy:
					</p>
					<p className='flex-1 text-center'>
						<InlineMath math='\cfrac{y_2 - y_1}{x_2 - x_1}' />
					</p>
					<p>
						Funkcja liniowa określona wzorem <InlineMath math='f(x) = ax + b' /> jest:
					</p>
					<ul className='flex flex-col lg:flex-row list-disc lg:gap-8 ml-4'>
						<li>
							<span className="font-semibold">rosnąca</span> dla <InlineMath math='a > 0' />,
						</li>
						<li>
							<span className="font-semibold">malejąca</span> dla <InlineMath math='a < 0' />,
						</li>
						<li>
							<span className="font-semibold">stała</span> dla <InlineMath math='a = 0' />,
						</li>
					</ul>
					<p>
						Proste <InlineMath math='y = a_1x + b_1' /> i <InlineMath math='y = a_2x + b_2' /> są:
					</p>
					<ul className='flex flex-col list-disc ml-4'>
						<li>
							<span className="font-semibold">równoległe</span> wtedy i tylko wtedy, gdy <InlineMath math='a_1 = a_2' />,
						</li>
						<li>
							<span className="font-semibold">prostopadłe</span> wtedy i tylko wtedy, gdy <InlineMath math='a_1 \cdot a_2 = -1' />.
						</li>
					</ul>
					<p>
						Równanie <InlineMath math='Ax + By + C = 0' />, gdzie <InlineMath math='A\medspace{=}\llap{/\,}\medspace0' /> lub <InlineMath math='B\medspace{=}\llap{/\,}\medspace0' />, nazywamy <span className="font-semibold">równaniem ogólnym</span> prostej.
					</p>
					<p>
						Proste <InlineMath math='A_1x + B_1y + C_1 = 0' /> oraz <InlineMath math='A_2x + B_2y + C_2 = 0' /> są:
					</p>
					<ul className='flex flex-col list-disc ml-4'>
						<li>
							<span className="font-semibold">równoległe</span> wtedy i tylko wtedy, gdy <InlineMath math='A_1B_2 - A_2B_1 = 0' />,
						</li>
						<li>
							<span className="font-semibold">prostopadłe</span> wtedy i tylko wtedy, gdy <InlineMath math='A_1A_2 + B_1B_2 = 0' />.
						</li>
					</ul>
				</div>
				<div className='flex lg:flex-col mx-auto my-auto flex-wrap'>
					<div id="linear-function" className='float-right'></div>
				</div>
			</section>
		</div>
	)
}
