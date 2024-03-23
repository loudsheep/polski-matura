"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type ShiftingCountdownProps = {
    countdownDateTo: string,
    title: string,
    deleteOption?: boolean,
    onDelete?: () => void,
};

const ShiftingCountdown = (props: ShiftingCountdownProps) => {
    const intervalRef = useRef<any>(null);

    const [remaining, setRemaining] = useState({
        days: Math.floor((+new Date(props.countdownDateTo) - +new Date()) / DAY),
        hours: Math.floor(((+new Date(props.countdownDateTo) - +new Date()) % DAY) / HOUR),
        minutes: Math.floor(((+new Date(props.countdownDateTo) - +new Date()) % HOUR) / MINUTE),
        seconds: Math.floor(((+new Date(props.countdownDateTo) - +new Date()) % MINUTE) / SECOND),
    });

    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);

        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    const handleCountdown = () => {
        const end = new Date(props.countdownDateTo);

        const now = new Date();

        const distance = +end - +now;

        const days = Math.floor(distance / DAY);
        const hours = Math.floor((distance % DAY) / HOUR);
        const minutes = Math.floor((distance % HOUR) / MINUTE);
        const seconds = Math.floor((distance % MINUTE) / SECOND);

        setRemaining({
            days,
            hours,
            minutes,
            seconds,
        });
    };

    return (
        <div className="p-4 w-full md:w-1/2" onClick={() => { if (props.deleteOption && props.onDelete) props.onDelete() }}>
            <p className="w-full 3xl:w-3/4 max-w-5xl mx-auto flex items-center">
                {props.title}
            </p>
            <div className="w-full 3xl:w-3/4 max-w-5xl mx-auto flex items-center bg-white border-l-[1px] border-slate-200">
                <CountdownItem num={remaining.days} text="dni" />
                <CountdownItem num={remaining.hours} text="godzin" />
                <CountdownItem num={remaining.minutes} text="minut" />
                <CountdownItem num={remaining.seconds} text="sekund" />
            </div>
            <p className="w-full 3xl:w-3/4 max-w-5xl mx-auto flex items-center text-gray-400 text-xs">
                {new Date(props.countdownDateTo).toLocaleDateString() + " " + new Date(props.countdownDateTo).toLocaleTimeString()}
            </p>
        </div>
    );
};

const CountdownItem = ({ num, text }: { num: number, text: string }) => {
    return (
        <div className="font-mono w-1/4 h-24 flex flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] border-slate-200">
            <div className="w-full text-center relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={num}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ ease: "backIn", duration: 0.75 }}
                        className="block text-xl md:text-2xl xl:text-2xl text-black font-medium"
                    >
                        {num}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-xs md:text-sm lg:text-base font-light text-slate-500">
                {text}
            </span>
        </div>
    );
};

export default ShiftingCountdown;