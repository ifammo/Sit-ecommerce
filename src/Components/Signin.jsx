import React, { useState } from "react"
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Styles/products.css";

export default function Signin() {
    return (
        <div className="contact">
            <h2 className="mb-3">Create your account</h2>
            <br />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your full name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="••••••••••••" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfPass">
                    <Form.Label>Conferm password</Form.Label>
                    <Form.Control type="password" placeholder="••••••••••••" required />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    )
}