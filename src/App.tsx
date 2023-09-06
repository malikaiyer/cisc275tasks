import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import seal from "./assets/images/dolphin-pic.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Malika Iyer - Hello
                World
            </header>
            <h1> This is another header</h1>
            <img src={seal} alt="Pic of seal" width="100" height="100" />
            <ul>
                <li>I love seals 1</li>
                <li>I love seals 2</li>
                <li>I love seals 3</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column
                        <div
                            style={{
                                width: "79px",
                                height: "81px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second column
                        <div
                            style={{
                                width: "300px",
                                height: "81px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
