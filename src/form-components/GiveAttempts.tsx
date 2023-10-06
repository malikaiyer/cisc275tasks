/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { ReactHTML, useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [left, setLeft] = useState<number>(3);
    const [req, setReq] = useState<number>(0);

    function increaseAttempt(): void{
        if (isNaN(req)){
            setLeft(left+0);
        }
        else{
            setLeft(left+req);
        }
    }

    function decreaseAttempt(): void{
        if (left>0){
            setLeft(left - 1);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Num Attempts Left = {left}</p>
            <Form.Group controlId="Request Attempt">
                <Form.Label>Number of Attempts you are requesting:</Form.Label>
                <Form.Control
                    type="number"
                    value={req}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setReq(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <button
                onClick={decreaseAttempt}
                disabled={left===0}> use </button>
            <button
                onClick={increaseAttempt}> gain </button>
        </div>
    );
}
