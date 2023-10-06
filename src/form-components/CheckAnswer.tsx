/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    const [displayText, setDisplayText] = useState<string>("❌");

    function updateAns(event: React.ChangeEvent<HTMLInputElement>) {
        setAns(event.target.value);
        if(event.target.value===expectedAnswer){
            setDisplayText("✔️");
        }
        else{
            setDisplayText("❌");
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="answer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={ans} onChange={updateAns} />
            </Form.Group>
            <div>The answer is: {displayText}</div>
        </div>
    );
}
