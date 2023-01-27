import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <div className='Contact-section py-5'>
            <div className="container">
                <h1>CharacterGPT Access</h1>
                <p>If you would like to leverage the CharacterGPT AI System for your dApp, please fill out the form below. All dApps, characters, and AI Assets that are built on the AI Protocol are interoperable across the AI Protocol’s Ecosystem.</p>

                <div className="Contact-Form mt-5">
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your First Name" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Last Name" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address*</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email Address" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Company*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Company Name" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Title*</Form.Label>
                                    <Form.Select >
                                        <option>Enter Your Title</option>
                                        <option>Exective</option>
                                        <option>Marketing</option>
                                        <option>Developer</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Industry**</Form.Label>
                                    <Form.Select >
                                        <option>Enter Your Industry</option>
                                        <option>Education</option>
                                        <option>Block Chain</option>
                                        <option>Technology</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-md-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Provide a brief outline of your dApp below:</Form.Label>
                                    <Form.Control as="textarea" placeholder='Provide With us any infromation you want us to know about your self and/or you dApp.' rows={3} />
                                </Form.Group>
                            </div>
                            <div className="col-md-12 mt-4">
                                <Button variant="outline-success w-100">Submit</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contact