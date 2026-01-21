<<<<<<< HEAD

import React, { useState } from "react";
import mapaImage from "../assets/mapa.jpg";
import "./Mapa.css"; 

export default function ImagemClicavel() {
  const [popupInfo, setPopupInfo] = useState(null);

  const hotspots = [
    { id: "area1", top: "23%", left: "56%", width: "15%", height: "39%",
         info:(
            <div>
                <h2>Informações da Área 1</h2>
            </div>
         )  },
    { id: "area2", top: "40%", left: "41%", width: "6%", height: "35%", 
        info:(
            <div>
                <h2>Detalhes da Área 2</h2>
            </div>
        ) },
    { id: "area3", top: "1%", left: "11%", width: "32%", height: "33%",
         info: (
            <div>
                <h2>Detalhes da Área 3</h2>
            </div>
         ) },
    { id: "area4", top: "43%", left: "11%", width: "30%", height: "23%", 
        info: (
            <div>
                <h2>Detalhes da Área 4</h2>
            </div>
        ) },
    { id: "area5", top: "75%", left: "0%", width: "63%", height: "25%",
         info: (
            <div>
                <h2>Informações da Área 5</h2>
            </div>
         ) },
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
          style={{ top, left, width, height }}
          onClick={() => openPopup(info)}
        />
      ))}

      {popupInfo && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <p>{popupInfo}</p>
          </div>
          <div className="popup-overlay" onClick={closePopup}></div>
        </div>
      )}
    </div>
    </div>
    
  );
}
=======

import React, { useState } from "react";
import mapaImage from "../assets/mapa.jpg";
import "./Mapa.css"; 

export default function ImagemClicavel() {
  const [popupInfo, setPopupInfo] = useState(null);

  const hotspots = [
    { id: "area1", top: "20%", left: "55%", width: "15%", height: "39%",
         info:(
            <div>
                <h2>Informações da Área 1</h2>
            </div>
         )  },
    { id: "area2", top: "40%", left: "41%", width: "4%", height: "35%", 
        info:(
            <div>
                <h2>Detalhes da Área 2</h2>
            </div>
        ) },
    { id: "area3", top: "1%", left: "8%", width: "35%", height: "33%",
         info: (
            <div>
                <h2>Detalhes da Área 3</h2>
            </div>
         ) },
    { id: "area4", top: "43%", left: "8%", width: "33%", height: "23%", 
        info: (
            <div>
                <h2>Detalhes da Área 4</h2>
            </div>
        ) },
    { id: "area5", top: "75%", left: "-4%", width: "68%", height: "25%",
         info: (
            <div>
                <h2>Informações da Área 5</h2>
            </div>
         ) },
  ];

  const openPopup = (info) => {
    setPopupInfo(info);
  };

  const closePopup = () => {
    setPopupInfo(null);
  };

  return (

    
    <div className="image-container">
      <img src={mapaImage} alt="Mapa" />

      {hotspots.map(({ id, top, left, width, height, info }) => (
        <button
          key={id}
          className="hotspot"
          style={{ top, left, width, height }}
          onClick={() => openPopup(info)}
        />
      ))}

      {popupInfo && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <p>{popupInfo}</p>
          </div>
          <div className="popup-overlay" onClick={closePopup}></div>
        </div>
      )}
    </div>
  );
}
>>>>>>> 12d37acef4e489a9b2b6909e516ffb6dcb6f53d3
