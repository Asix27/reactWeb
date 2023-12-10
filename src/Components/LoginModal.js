import React, {useContext} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import {ContextAuth} from "../index";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginModal = ({ show, handleClose }) => {
    const { auth } = useContext(ContextAuth);

    const login = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            console.log(result.user); // Успешный вход
            // Здесь можно вызвать handleClose, если нужно закрыть окно сразу после удачного входа
            handleClose();
        } catch (error) {
            console.error(error); // Обработка ошибок
        }
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me"/>
                    </Form.Group>
                </Form>
                <Button variant="primary" >Войти</Button>
                <Button variant="secondary" >Зарегистрироваться</Button>
                <Button onClick={login}>Войти с помощью Google</Button>
            </Modal.Body>
        </Modal>

    );
};

export default LoginModal;
