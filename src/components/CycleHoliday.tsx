/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Holiday: 🎄" //christmas 2, 5 (alphabet, year)
    | "Holiday: 🪔" //diwali 3, 4
    | "Holiday: 🐉" //chinese new year 1, 1
    | "Holiday: 👻" //halloween 4, 3
    | "Holiday: ❤️"; //valentines day 5, 2

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Holiday: 🐉");

    const Alph: Record<Holiday, Holiday> = {
        "Holiday: 🐉": "Holiday: 🎄",
        "Holiday: 🎄": "Holiday: 🪔",
        "Holiday: 🪔": "Holiday: 👻",
        "Holiday: 👻": "Holiday: ❤️",
        "Holiday: ❤️": "Holiday: 🐉"
    };

    const Date: Record<Holiday, Holiday> = {
        "Holiday: 🐉": "Holiday: ❤️",
        "Holiday: ❤️": "Holiday: 👻",
        "Holiday: 👻": "Holiday: 🪔",
        "Holiday: 🪔": "Holiday: 🎄",
        "Holiday: 🎄": "Holiday: 🐉"
    };

    function changeByAlphabet(): void {
        const newHoliday = Alph[holiday];
        setHoliday(newHoliday);
    }

    function changeByYear(): void {
        const newHoliday = Date[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <h5>Cycle Holiday</h5>
            <span>{holiday}</span>
            <Button onClick={changeByAlphabet}>By Alphabet</Button>
            <Button onClick={changeByYear}>By Year</Button>
        </div>
    );
}
