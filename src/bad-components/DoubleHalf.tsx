/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface setValueProps {
    val: number;
    setValue: (expression: number) => void;
}

function Doubler({ val, setValue }: setValueProps): JSX.Element {
    return <Button onClick={() => setValue(2 * val)}>Double</Button>;
}

function Halver({ val, setValue }: setValueProps): JSX.Element {
    return <Button onClick={() => setValue(0.5 * val)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler val={dhValue} setValue={setDhValue}></Doubler>
            <Halver val={dhValue} setValue={setDhValue}></Halver>
        </div>
    );
}
