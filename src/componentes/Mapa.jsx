import { useState } from "react";
import mapaImage from "../assets/mapa.png";
import "./Mapa.css";

export default function ImagemClicavel() {
  const [popupInfo, setPopupInfo] = useState(null);

  const hotspots = [
        {
      id: "area0",
      info: {
        titulo: "",
        video: "",
        descricao: "",
      },
      style: {
        top: "0%",
        left: "0%",
        width: "100%",
        height: "11%",
        // backgroundColor: "rgba(255, 0, 0, 0.3)",
        clipPath:
          "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
    },
    {
      id: "area1",
      info: {
        titulo: "Casa administrativa",
        video: "videos/casa.mp4",
        descricao: (
          <p style={{ textAlign: "left" }}>
            Neste espaço encontra-se a equipe do Horto e Borboletário, com a
            recepção dos visitantes ocorrendo logo na sua entrada, além da
            administração e gestão interna.{" "}
            <strong>
              Os visitantes podem acessar e utilizar o banheiro neste espaço.
            </strong>
            <br /> <br />
            Além de um prédio administrativo, este também é um espaço voltado e
            pensado para a educação ambiental. O Centro Municipal de Educação
            Ambiental comporta a sala de administração da equipe da Educação
            Ambiental, além de uma sala multimídia na qual são passados vídeos
            informativos sobre o Horto e o Borboletário para os visitantes, além
            de turmas de escolas públicas e particulares.
          </p>
        ),
      },
      style: {
        top: "23%",
        left: "56%",
        width: "14%",
        height: "35%",
        transform: "rotate(-45deg)",
        // backgroundColor: "rgba(255, 0, 0, 0.3)",
        clipPath:
          "polygon(0 60%, 11% 42%, 11% 7%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0 84%)",
      },
    },
    {
      id: "area2",
      info: {
        titulo: "Pista de caminhada Raphael Marques de Andrade",
        video: "videos/pista.mp4",
        descricao: (
          <p style={{ textAlign: "left" }}>
            Esta pista de caminhada de 327 metros foi pensada de forma a
            aproveitar um espaço antes não utilizado do Horto e sem acesso dos
            visitantes, principalmente após o rio. Com esta área revitalizada,
            com o plantio de mudas de árvores nativas e frutíferas e uma pista
            de caminhada com acessibilidade, agora este espaço recebe um novo
            propósito.
            <br /> <br />O espaço recebeu esse nome em homenagem a{" "}
            <strong>Raphael Marques de Andrade</strong>, jovem que deixou uma
            lembrança marcada pela alegria, pelo amor à natureza e pelo gosto em
            frequentar parques e áreas verdes da cidade. Sua história inspirou a
            concepção de uma pista pensada para ser acessível, permitindo que
            pessoas com diferentes tipos de deficiências físicas possam usufruir
            do local com conforto, inclusão e dignidade.
          </p>
        ),
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
        titulo: "Borboletário Municipal de Teresópolis",
        video: "videos/borboletario.mp4",
        descricao: (
          <p>
            O borboletário municipal de Teresópolis é um dos poucos no estado do
            Rio de Janeiro e o único da região serrana. Administrado pela
            Secretaria Municipal de Meio Ambiente, foi licenciado e inaugurado
            em 2025 através do <strong>projeto Teresópolis Sustentável</strong>{" "}
            com a proposta de trazer para a população a beleza e importância das
            borboletas através da educação ambiental e do ecoturismo.
            <br />
            <br />
            Além da visitação turística normal, há também a visita de escolas
            públicas e particulares com passeios guiados e voltados para
            compreensão destes animais e de sua importância para o meio
            ambiente. Biólogas e equipe treinada estão à postos para sanar todas
            as dúvidas dos visitantes com relação à borboletas, mariposas e
            outros insetos!
          </p>
        ),
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
        titulo: "Cafeteria",
        video: "videos/cafe.mp4",
        descricao: (
          <p style={{ textAlign: "left" }}>
            A cafeteria do Horto é um espaço pensado para acolher os visitantes
            em meio à natureza, oferecendo alimentos e bebidas para quem deseja
            fazer uma pausa durante o passeio. Integrada ao ambiente verde, ela{" "}
            <strong>
              proporciona um local tranquilo para descansar, se alimentar e
              apreciar o entorno
            </strong>
            , atendendo às necessidades de quem passa o dia por aqui,
            especialmente por não haver outros pontos de venda de alimentos nas
            proximidades.
          </p>
        ),
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
        titulo: "Berçário de Mudas (Acesso Restrito)",
        video: "videos/mudas.mp4",
        descricao: (
          <p>
            O berçário de mudas é o espaço dedicado à{" "}
            <strong>
              produção e ao desenvolvimento das plantas ornamentais
            </strong>{" "}
            utilizadas no Horto Municipal, no Borboletário e nos canteiros
            distribuídos por toda a cidade de Teresópolis. Nesse local, a equipe
            de jardinagem realiza o cultivo cuidadoso das mudas, desde as fases
            iniciais de crescimento até o momento em que estão prontas para o
            plantio definitivo. Além de contribuir para o embelezamento dos
            espaços públicos, essas plantas desempenham um papel importante no
            equilíbrio ambiental, atraindo insetos polinizadores e aves nativas,
            fortalecendo a biodiversidade e trazendo mais vida, cor e qualidade
            ambiental para a cidade.
            <br />
            <br />
            *Estas mudas são para uso exclusivo da prefeitura e não estão
            disponíveis para venda ou doação aos visitantes.
          </p>
        ),
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
        video: "videos/2.mp4",
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
        video: "videos/8.mp4",
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
        video: "videos/2.mp4",
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
        video: "videos/parque.mp4",
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
        titulo: "Canteiro de Temperos",
        video: "videos/7.mp4",
        descricao: "Detalhes adicionais sobre o Canteiro de Temperos e Ervas",
      },
      style: {
        top: "47%",
        left: "44.5%",
        width: "17%",
        height: "14%",
        clipPath: "polygon(0 0, 58% 0, 74% 0, 100% 100%, 0 100%, 0% 50%)",
      },
    },
  ];

  return (
    <div className="todo_cont">
      <div className="image-container">
        <img src={mapaImage} alt="Mapa" className="mapa-img" />

        {hotspots.map(({ id, info, style }) => (
          <button
            key={id}
            className="hotspot"
            style={style}
            onClick={() => id !== "area0" && setPopupInfo(info)}
          />
        ))}
      </div>

      {/* Popup movido para fora do image-container para evitar bugs de z-index e rotação */}
      {popupInfo && (
        <div className="popup-wrapper">
          <div
            className="popup-overlay"
            onClick={() => setPopupInfo(null)}
          ></div>
          <div className="popup-content">
            <div className="popup-header">
              {/* <h2 className="retro-text">{popupInfo.titulo}</h2> */}
              <span className="close-icon" onClick={() => setPopupInfo(null)}>
                &times;
              </span>
            </div>
            <div className="content">
            
                <iframe
                  src={popupInfo.video}
                  title="Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
