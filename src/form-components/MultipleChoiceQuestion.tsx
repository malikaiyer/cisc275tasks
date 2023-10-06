import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentAns, setCurrentAns] = useState<string>(options[0]);
    const [displayText, setDisplayText] = useState<string>("❌");

    function updateAns(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentAns(event.target.value);
        if (event.target.value === expectedAnswer) {
            setDisplayText("✔️");
        } else {
            setDisplayText("❌");
        }
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="currentAns">
                <Form.Label>What is the Answer?</Form.Label>
                <Form.Select value={currentAns} onChange={updateAns}>
                    {options.map((currentOption: string) => (
                        <option key={currentOption} value={currentOption}>
                            {currentOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {displayText}
        </div>
    );
}
