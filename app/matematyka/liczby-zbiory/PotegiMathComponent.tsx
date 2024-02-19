"use client";

import React from "react";
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function ZbioryMathComponent() {
    return (
        <div style={{ all: "revert" }}>
            <p style={{marginTop: "2rem"}}>Niech <InlineMath math="m, n" /> będą liczbami całkowitymi dodatnimi. Definiujemy:</p>

            <ol>
                <li>Dla <InlineMath math="a \neq 0" />: <InlineMath math="a^{-n} = \frac{1}{a^n}" /> oraz <InlineMath math="a^0 = 1" />.</li>
                <li>Dla <InlineMath math="a \geq 0" />: <InlineMath math="a^{m/n} = \sqrt[n]{a^m}" />.</li>
                <li>Dla <InlineMath math="a > 0" />: <InlineMath math="a^{-m/n} = \frac{1}{\sqrt[n]{a^m}}" />.</li>
            </ol>

            <p style={{marginTop: "2rem"}}>Niech <InlineMath math="r, s" /> będą dowolnymi liczbami rzeczywistymi. Jeśli <InlineMath math="a > 0" /> i <InlineMath math="b > 0" />, to:</p>

            <ol>
                <li><InlineMath math="a^r \cdot a^s = a^{r+s}" /></li>
                <li><InlineMath math="(a^r)^s = a^{r \cdot s}" /></li>
                <li><InlineMath math="\frac{a^r}{a^s} = a^{r-s}" /></li>
                <li><InlineMath math="(a \cdot b)^r = a^r \cdot b^r" /></li>
                <li><InlineMath math="\left(\frac{a}{b}\right)^r = \frac{a^r}{b^r}" /></li>
            </ol>
        </div>
    )
}
