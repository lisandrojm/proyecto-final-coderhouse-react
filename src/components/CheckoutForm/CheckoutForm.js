import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      toast.error('Los correos electrónicos no coinciden.', {
        autoClose: 1500,
      });
      return;
    }

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="container col-lg-5 text-start">
      <Form onSubmit={handleConfirm}>
        <Form.Group className="mb-3 text-white" controlId="formBasicText">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre y Apellido" value={name} onChange={({ target }) => setName(target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="formBasicNumber">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="number" placeholder="1151234567" value={phone} onChange={({ target }) => setPhone(target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="mail@ejemplo.com" value={email} onChange={({ target }) => setEmail(target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="formBasicConfirmEmail">
          <Form.Label>Confirmar Email</Form.Label>
          <Form.Control type="email" placeholder="mail@ejemplo.com" value={confirmEmail} onChange={({ target }) => setConfirmEmail(target.value)} />
        </Form.Group>
        <div className="pt-3 d-grid gap-2 pb-3">
          <Button variant="outline-light" type="submit" disabled={!name || !phone || !email || !confirmEmail}>
            Realizar compra
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
