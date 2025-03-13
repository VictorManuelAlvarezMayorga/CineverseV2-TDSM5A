import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  const [data, setData] = useState({
    name: "",
    last_name: "",
    gmail: "",
    contrasena: "",
  });

  const onChangeRegister = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "500px" }} className="shadow-lg">
        <Card.Body className="p-4">
          <Card.Title>Formulario de Registro de Usuario</Card.Title>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="name" value={data.name} onChange={onChangeRegister} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control name="last_name" value={data.last_name} onChange={onChangeRegister} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gmail</Form.Label>
              <Form.Control name="gmail" type="email" value={data.gmail} onChange={onChangeRegister} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="contrasena" type="password" value={data.contrasena} onChange={onChangeRegister} />
            </Form.Group>
            <Button className="mt-3" type="submit">
              Registrarse
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterForm;
