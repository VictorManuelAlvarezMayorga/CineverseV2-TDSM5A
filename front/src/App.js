import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({}); // Estado para almacenar datos del formulario
  const navigate = useNavigate(); // Hook de React Router para redireccionar

  // Manejar cambios en los campos del formulario
  const onChangeLogin = (e) => {
    const updatedData = { ...data };
    updatedData[e.target.name] = e.target.value;
    setData(updatedData);
    console.log(updatedData); // Mostrar datos en consola para depuración
  };

  // Enviar datos del formulario al backend
  const onSubmitData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/users/sign-in", data); // Llamada al backend
      const user = res.data.user; // Datos del usuario obtenidos desde el backend
      user.logined = true; // Marcar usuario como autenticado
      localStorage.setItem("user", JSON.stringify(user)); // Guardar usuario en LocalStorage
      navigate("/inicio"); // Redirigir al usuario a la página de inicio
    } catch (error) {
      alert("Algo salió mal. Por favor, intenta de nuevo.");
      console.error(error);
    }
  };

  return (
    <Container className="mt-3">
      {/* Tarjeta del formulario */}
      <Card className="mb-5" style={{ width: "30rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title className="text-center">Bienvenido</Card.Title>

          {/* Formulario de inicio de sesión */}
          <Form onSubmit={onSubmitData}>
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                onChange={onChangeLogin}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                onChange={onChangeLogin}
              />
            </Form.Group>

            {/* Botones y enlaces */}
            <Row className="text-center">
              <Col>
                <Button type="submit">Ingresar</Button>
              </Col>
              <Col>
                <p>
                  ¿No tienes cuenta? <a href="/Registro">¡Regístrate!</a>
                </p>
              </Col>
            </Row>
            <Row className="text-center mt-3">
              <p>
                ¿Olvidaste tu contraseña?{" "}
                <a href="/recover-password">Recupérala aquí</a>
              </p>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
