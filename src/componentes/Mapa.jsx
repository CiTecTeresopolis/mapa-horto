import React, { useState } from "react";
import mapaImage from "../assets/mapa.jpg";
import "./Mapa.css";

export default function ImagemClicavel() {
  const [popupInfo, setPopupInfo] = useState(null);

  const hotspots = [
    {
      id: "area1",
      top: "23%",
      left: "56%",
      width: "14%",
      height: "35%",
      transform: "rotate(146deg)",
      info: {
        titulo: "Informações da Área 1",
        descricao: "Detalhes adicionais sobre a Área 1",
      },
    },
    {
      id: "area2",
      top: "40%",
      left: "41%",
      width: "4%",
      height: "35%",
      info: {
        titulo: "Informações da Área 2",
        descricao: "Detalhes adicionais sobre a Área 2",
      },
    },
    {
      id: "area3",
      top: "0%",
      left: "21.5%",
      width: "21%",
      height: "34%",
      info: {
        titulo: "Informações da Área 3",
        descricao: "Detalhes adicionais sobre a Área 3",
      },
    },
    {
      id: "area4",
      top: "44%",
      left: "11.5%",
      width: "5%",
      height: "22%",
      info: {
        titulo: "Informações da Área 4",
        descricao: "Detalhes adicionais sobre a Área 4",
      },
    },
    {
      id: "area5",
      top: "75%",
      left: "0%",
      width: "63%",
      height: "25%",
      info: {
        titulo: "Informações da Área 5",
        descricao: "Detalhes adicionais sobre a Área 5",
      },
    },
    {
      id: "piquenique",
      top: "0%",
      left: "11.5%",
      width: "10%",
      height: "34%",
      backgroundColor: "rgba(0, 192, 250, 0.3)",
      info: {
        titulo: "Área de Piquenique",
        descricao: "Detalhes adicionais sobre a Área de Piquenique",
      },
    },
    {
      id: "canteiro",
      top: "44%",
      left: "16.5%",
      width: "24.5%",
      height: "22%",
      backgroundColor: "rgba(0, 192, 250, 0.3)",
      info: {
        titulo: "Informações da Área 4",
        descricao: "Detalhes adicionais sobre a Área 4",
      },
    },
  ];

  const openPopup = (info) => {
    setPopupInfo(info);
  };

  const closePopup = () => {
    setPopupInfo(null);
  };

  return (
    <div className="todo_cont">
      <div className="image-container">
        <img src={mapaImage} alt="Mapa" />

        {hotspots.map(({ id, top, left, width, height, info }) => (
          <button
            key={id}
            className="hotspot"
            style={{
              top,
              left,
              width,
              height,
              backgroundColor:
                hotspots.find((h) => h.id === id).backgroundColor ||
                "rgba(255, 0, 0, 0.3)",
              transform: hotspots.find((h) => h.id === id).transform || "none",
            }}
            onClick={() => openPopup(info)}
          />
        ))}

        {popupInfo && (
          <div className="popup">
            <div className="popup-content">
              <div className="popup-title">
                <span className="close" onClick={closePopup}>
                  &times;
                </span>
                <p className="retro-text">{popupInfo.titulo}</p>
              </div>
              <p className="popup-info">{popupInfo.descricao}</p>
            </div>
            <div className="popup-overlay" onClick={closePopup}></div>
          </div>
        )}
      </div>
    </div>
  );
}
