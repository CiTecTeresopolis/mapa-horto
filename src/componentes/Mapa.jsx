import { useState } from "react";
import mapaImage from "../assets/mapa.jpg";
import "./Mapa.css";

export default function ImagemClicavel() {
  const [popupInfo, setPopupInfo] = useState(null);

    const hotspots = [
    {
      id: "area1",
      info: {
        titulo: "Informações da Área 1",
        descricao: "Detalhes adicionais sobre a Área 1",
      },
      style: {
        top: "23%",
        left: "56%",
        width: "14%",
        height: "35%",
        transform: "rotate(-32deg)",
        // backgroundColor: "rgba(255, 0, 0, 0.3)",
        clipPath:
          "polygon(0 60%, 11% 42%, 11% 7%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0 84%)",
      },
    },
    {
      id: "area2",
      info: {
        titulo: "Informações da Área 2",
        descricao: "Detalhes adicionais sobre a Área 2",
      },
      style: {
        top: "40%",
        left: "41%",
        width: "4%",
        height: "35%",
        // backgroundColor: "rgba(255, 0, 0, 0.3)",
        clipPath:
          "polygon(10px 69%, 10px 40%, 10px 0px, 80% 0px, 80% 60%, 100% 60%, 100% 100%, 100% 100%, 49% 100%, 60% 100%, 60% 70%, 0% 70%)",
      },
    },
    {
      id: "area3",
      info: {
        titulo: "Informações da Área 3",
        descricao: "Detalhes adicionais sobre a Área 3",
      },
      style: {
        top: "0%",
        left: "21.5%",
        width: "18%",
        height: "34%",
        // backgroundColor: "rgba(255, 0, 0, 0.3)",
      },
    },
    {
      id: "area4",
      info: {
        titulo: "Informações da Área 4",
        descricao: "Detalhes adicionais sobre a Área 4",
      },
      style: {
        top: "44%",
        left: "11.5%",
        width: "5%",
        height: "22%",
      },
    },
    {
      id: "area5",
      info: {
        titulo: "Informações da Área 5",
        descricao: "Detalhes adicionais sobre a Área 5",
      },
      style: {
        top: "70%",
        left: "0%",
        width: "62%",
        height: "30%",
        clipPath:
          "polygon(56% 25%, 70% 2%, 79% 0px, 93% 14%, 100% 11%, 100% 45%, 95% 100%, 0px 100%, 0px 20%, 18% 20%, 27% 29%, 45% 37%)",
      },
    },
    {
      id: "piquenique",
      info: {
        titulo: "Área de Piquenique",
        descricao: "Detalhes adicionais sobre a Área de Piquenique",
      },
      style: {
        top: "0%",
        left: "11.5%",
        width: "10%",
        height: "34%",
        // backgroundColor: "rgba(0, 192, 250, 0.3)",
      },
    },
    {
      id: "canteiro",
      info: {
        titulo: "Informações sobre o Canteiro",
        descricao: "Detalhes adicionais sobre o Canteiro",
      },
      style: {
        top: "44%",
        left: "16.5%",
        width: "24.5%",
        height: "22%",
        // backgroundColor: "rgba(0, 192, 250, 0.3)",
      },
    },
    {
      id: "canteiro2",
      info: {
        titulo: "Informações sobre o Canteiro",
        descricao: "Detalhes adicionais sobre o Canteiro",
      },
      style: {
        top: "0%",
        left: "39.5%",
        width: "3%",
        height: "34%",
        // backgroundColor: "rgba(0, 192, 250, 0.3)",
      },
    },
    {
      id: "parquinho",
      info: {
        titulo: "Informações sobre o Parquinho",
        descricao: "Detalhes adicionais sobre o Parquinho",
      },
      style: {
        top: "0%",
        left: "42.5%",
        width: "19%",
        height: "34%",
        // backgroundColor: "rgba(255, 0, 0, 0.3)",
        clipPath:
          "polygon(90% 30%, 80% 47%, 73% 55%, 63% 66%, 51% 77%, 36% 88%, 20% 96%, 0px 100%, 0px 0px, 100% 0px, 100% 9%, 96% 18%)",
      },
    },
    {
      id: "temperos",
      info: {
        titulo: "Informações sobre o Canteiro de Temperos",
        descricao: "Detalhes adicionais sobre o Canteiro de Temperos e Ervas",
      },
      style: {
        top: "47%",
        width: "17%",
        height: "14%",
        left: "44.5%",
        clipPath: "polygon(0 0, 58% 0, 74% 0, 100% 100%, 0 100%, 0% 50%)",
      },
    },
  ];
return (
  <div className="todo_cont">
    <div className="image-container">
      <img src={mapaImage} alt="Mapa" />

      {hotspots.map(({ id, info, style }) => (
        <button
          key={id}
          className="hotspot"
          style={style}
          onClick={() => setPopupInfo(info)}
        />
      ))}
    </div>

    {/* O Modal permanece dentro do todo_cont para acompanhar a rotação */}
    {popupInfo && (
      <div className="popup">
        <div className="popup-overlay" onClick={() => setPopupInfo(null)}></div>
        <div className="popup-content">
          <div className="popup-title">
            <span className="close" onClick={() => setPopupInfo(null)}>&times;</span>
            <p className="retro-text">{popupInfo.titulo}</p>
          </div>
          
          <iframe 
            src="https://www.youtube.com/embed/2PuFyjAs7JA"
            title="Vídeo do Local"
            allowFullScreen
          ></iframe>
          
          <p className="popup-info">{popupInfo.descricao}</p>
        </div>
      </div>
    )}
  </div>
);
}