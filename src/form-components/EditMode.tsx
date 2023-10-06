import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editOn, setEditOn] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // Function to toggle edit mode
    function toggleEditMode() {
        setEditOn(!editOn);
    }

    // Function to handle name input change
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    // Function to handle student checkbox change
    function handleStudentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                checked={editOn}
                onChange={toggleEditMode}
            />
            <div>
                {name} is {isStudent ? "a student" : "not a student"}
            </div>
            {editOn && (
                <div>
                    <Form.Group controlId="name">
                        <Form.Label>Edit Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="student">
                        <Form.Check
                            type="checkbox"
                            label="Is a student"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </Form.Group>
                </div>
            )}
        </div>
    );
}
