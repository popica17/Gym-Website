import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Service({
  key,
  serviceImage,
  serviceTitle,
  serviceDescription,
  ButtonText,
}) {
  const navigation = useNavigate();
  const navigate = () => {
    alert(
      "Ai selectat acest produs. Vei fi redirectionat catre pagina de contact pentru a finaliza comanda. Multumim!"
    );
    navigation("/contact");
  };

  return (
    <div key={key} className="bg-blue-50 drop-shadow flex flex-row w-full my-6">
      <img
        src={serviceImage}
        alt="pic1"
        width={350}
        height={350}
        className="mr-3 bg-cover bg-no-repeat bg-center rounded-s"
      />
      <div className="flex flex-col p-5">
        <h3 className="text-lg font-semibold">{serviceTitle}</h3>
        <p>{serviceDescription}</p>
        <Button variant="secondary" onClick={() => navigate("/contact")}>
          Programeaza-te acum
        </Button>
      </div>
    </div>
  );
}

export default Service;
