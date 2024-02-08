import React from "react";
import {useState} from "react";

const Test = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const SITE_KEY = "6LekX2YpAAAAAKm3SFHdBVUOlgsppQrTFvV0WgHZ";
  const handleInputChange = (e) => {
    const inputNumber = e.target.value;
    setPhoneNumber(inputNumber);
    // Validar que el número de teléfono tenga al menos 9 dígitos
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Número de teléfono:", phoneNumber);
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute(`${SITE_KEY}`, {
        action: "CREAR_NUEVA_CUENTA",
      });
      console.log("toke......", token);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Número de teléfono:
          <input type="text" value={phoneNumber} onChange={handleInputChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Test;
