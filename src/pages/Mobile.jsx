import Mapa from "../componentes/Mapa";
import React, { useState, useEffect } from "react";
import "../../styles/mobile.css";

function Mobile() {
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    // Verifica se o navegador suporta geolocalização
    if (!navigator.geolocation) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError("Geolocalização não é suportada pelo seu navegador.");
      return;
    }

    // Pede a permissão e pega a posição
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        setError("Não foi possível obter sua localização.");
        console.error(err);
      },
      { enableHighAccuracy: true },
    );
  }, []);

  if (error) return <p>{error}</p>;
  if (!position) return <p>Obtendo localização...</p>;

  return (
    <>
      <div className="card">
        <Mapa />
        <p>{position.lat} | Lng: {position.lng}</p>
      </div>
    </>
  );
}

export default Mobile;
