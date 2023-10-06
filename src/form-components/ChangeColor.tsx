/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors: string[] = [
    "red",
    "orange",
    "green",
    "blue",
    "yellow",
    "purple",
    "pink",
    "teal"
];

export function ChangeColor(): JSX.Element {
    // This is the State (Model)
    const [color, setColor] = useState<string>("red");

    // This is the Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    // This is the View
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((colorOption: string) => (
                <Form.Check
                    key={colorOption}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    checked={color === colorOption}
                    style={{ backgroundColor: colorOption }}
                    inline
                    label={colorOption}
                    value={colorOption}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
