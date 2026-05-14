import "./Mapa.css";
import { useState } from "react";
import mapaImage from "../../assets/mapa-mobile.png";
import mapaLegenda from "../../assets/legenda-mobile.png";

export default function ImagemClicavel() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const hotspots = [
    {
      id: "area0",
      info: {
        titulo: "Avenida Tobias Barreto",
        video: "",
        descricao: (
          <p>
            A <strong>Avenida Tobias Barreto</strong> é um dos refúgios mais 
            charmosos de Teresópolis, onde a serenidade da natureza se encontra 
            com a cultura e o bem-estar. Muito mais que uma via de acesso, ela 
            é um convite à pausa e à contemplação.
            <br /> <br />O <strong>Horto Municipal</strong> brilha como o 
            protagonista deste cenário, oferecendo trilhas leves e um contato 
            genuíno com a biodiversidade local. Ao lado, a energia 
            da <strong>ASBAC Comary</strong> complementa o ambiente, unindo 
            esporte e convivência social em perfeita harmonia.
            <br /> <br />
            Seja para uma caminhada revigorante ou um momento de descanso em 
            família, você está em um dos recantos mais queridos da nossa cidade. 
            Aproveite o ar puro e a beleza que nos cercam. 
          </p> // Obs: Mudei a última palavra de "cerca" para "cercam", pois achei que soaria mais harmonioso.  
        ),
        // descricao: (
        //   <p>
        //     A <strong>Avenida Tobias Barreto</strong> é um dos recantos mais
        //     agradáveis de Teresópolis, funcionando como um verdadeiro refúgio
        //     verde que une lazer, esporte e cultura.
        //     <br /> <br />O grande destaque é o <strong>Horto Municipal</strong>,
        //     um espaço indispensável para quem busca contato com a natureza e
        //     trilhas leves, logo ao lado da <strong>ASBAC Comary</strong>, que
        //     movimenta a via com sua estrutura esportiva e social.
        //     <br /> <br />
        //     Sua localização estratégica, aliada à presença de áreas verdes e
        //     opções de lazer, torna a <strong>Avenida Tobias Barreto</strong> um
        //     dos locais mais queridos e frequentados do Alto.
        //   </p>
        // ),
      },
      style: {
        top: "0%",
        left: "0%",
        width: "100%",
        height: "11%",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
    },
    {
      id: "area1",
      info: {
        titulo: "Casa Administrativa",
        video: "videos/casa.mp4",
        descricao: (
          <p>
            Bem-vindo ao <strong>coração operacional do Horto</strong>. 
            <br /><br />
            Aqui você recebe <strong>orientações</strong>, tem acesso aos <strong>serviços</strong> e inicia sua 
            visita com <strong>conteúdo</strong> sobre a fauna e flora local.
          </p>
        ),
        // descricao: (
        //   <p>
        //     Seja bem-vindo ao coração operacional do{" "}
        //     <strong>Horto e Borboletário</strong>. É aqui, logo no pórtico de
        //     entrada, que nossa equipe recebe cada visitante, oferecendo as
        //     primeiras <strong>orientações</strong> e garantindo o conforto
        //     necessário, incluindo o acesso facilitado aos{" "}
        //     <strong>banheiros da unidade</strong>.
        //     <br /> <br />
        //     Acreditamos que a conservação começa com o entendimento. Por isso,
        //     este ambiente foi planejado para ser uma{" "}
        //     <strong>vitrine da educação ambiental</strong>. Em nossa{" "}
        //     <strong>sala multimídia</strong>, os visitantes são convidados a uma
        //     jornada visual através de vídeos que exploram a fauna e a flora da
        //     região, transformando a visita em uma experiência rica em
        //     <strong> aprendizado e conscientização ecológica</strong>
        //   </p>
        // ),
      },
      style: {
        top: "34%",
        left: "53%",
        width: "13%",
        height: "35%",
        transform: "rotate(-45deg)",
        clipPath:
          "polygon(30.97% 63.57%, 30.97% 63.57%, 32.25% 0%, 85% 0%, 100% 0%, 100% 15%, 100% 69.5%, 93.25% 100%, 85% 100%, 21.25% 86%, 21.25% 86%)",
      },
    },
    {
      id: "area3",
      info: {
        titulo: "Borboletário Municipal",
        video: "videos/borboletario.mp4",
        descricao: (
          <p>
            O <strong>Borboletário Municipal de Teresópolis</strong> é um museu vivo e um dos 
            poucos do estado. Aqui, você acompanha de perto todo o ciclo da metamorfose 
            e desfruta de uma experiência linda, cercado por nossas borboletas.
          </p> //Obs: mudado "cercada" para "cercado", na intenção de trazer melhor clareza, concordando com "você". Também 
          // trouxe de volta o termo "Municipal", pois faz parte do nome do borboletário.
        ),
        // descricao: (
        //   <p>
        //     O <strong>Borboletário Municipal de Teresópolis</strong> é um dos
        //     poucos no estado do Rio de Janeiro. Um espaço mágico para aprender
        //     sobre a importância das borboletas no ecossistema através da{" "}
        //     <strong>educação ambiental</strong>, funcionando como um verdadeiro{" "}
        //     <strong>museu vivo</strong>. Aqui, você pode observar de perto o
        //     ciclo completo da metamorfose,do ovo à fase adulta, e entender como
        //     esses insetos atuam como polinizadores essenciais e bioindicadores
        //     da saúde da nossa Mata Atlântica.
        //   </p>
        // ),
      },
      style: {
        top: "11%",
        left: "21.5%",
        width: "18%",
        height: "27%",
      },
    },
    {
      id: "area4",
      info: {
        titulo: "Cafeteria",
        video: "videos/cafe.mp4",
        descricao: (
          <p>
            A cafeteria do Horto é o refúgio perfeito para quem busca uma pausa 
            relaxante em meio à natureza. Um espaço pensado para acolher você e 
            sua família, onde o aroma do café se mistura ao ar puro, oferecendo 
            lanches saborosos e momentos de tranquilidade durante o seu passeio.
          </p>
        ),
        // descricao: (
        //   <p>
        //     A cafeteria do Horto é um espaço pensado para acolher os visitantes
        //     em meio à natureza, oferecendo pausa e lanches saborosos.
        //   </p>
        // ),
      },
      style: {
        top: "44%",
        left: "10%",
        width: "10%",
        height: "22%",
      },
    },
    {
      id: "area5",
      info: {
        titulo: "Berçário de Mudas",
        video: "videos/mudas.mp4",
        descricao: (
          <p>
            Este é o <strong>coração do paisagismo municipal</strong>. Aqui, dedicamos cuidado 
            exclusivo à produção e ao desenvolvimento das espécies que embelezam 
            as ruas, parques e praças de toda a nossa cidade. Neste espaço, as 
            mudas são cultivadas até estarem prontas para o plantio definitivo, 
            garantindo a renovação constante do nosso cenário urbano.
            <br />< br/>
            ⚠️ <strong>ACESSO RESTRITO</strong> ⚠️<br/>
            Área reservada para o cultivo técnico e preservação das mudas. <strong>Entrada permitida 
            apenas para funcionários da prefeitura.</strong>
          </p>
        ),
        // descricao: (
        //   <p>
        //     Espaço dedicado à produção e desenvolvimento das plantas ornamentais
        //     utilizadas em toda a cidade. *Acesso restrito para funcionários da
        //     prefeitura.
        //   </p>
        // ),
      },
      style: {
        top: "78%",
        left: "48%",
        width: "12%",
        height: "23%",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
    },
    {
      id: "area6",
      info: {
        titulo: "Jardim Sensorial",
        video: "",
        descricao: (
          <p>
            O <strong>Jardim Sensorial</strong> permite uma experiência tátil única, onde as 
            crianças podem tocar e sentir as diferentes texturas da natureza. É um espaço 
            planejado para estimular a curiosidade infantil, promovendo um aprendizado prático 
            e inesquecível através do contato direto com as plantas, despertando os sentidos e 
            a consciência ambiental de forma lúdica e especial. 
          </p>
        ),
        // descricao: (
        //   <p>
        //     O Jardim Sensorial permite uma experiência tátil e olfativa única
        //     com temperos e ervas aromáticas.
        //   </p>
        // ),
      },
      style: {
        top: "50%",
        left: "45.5%",
        width: "13%",
        height: "18%",
        clipPath:
          "polygon(0 56%, 0 0, 35% 0%, 75% 0, 93% 19%, 100% 63%, 100% 100%, 78% 100%, 65% 100%, 24% 100%, 25% 70%, 24% 55%)",
      },
    },
    {
      id: "parquinho",
      info: {
        titulo: "Parquinho Infantil",
        video: "videos/parque.mp4",
        descricao: (
          <p>
            Espaço de lazer gratuito para as crianças, com brinquedos integrados
            à natureza.
          </p>
        ),
      },
      style: {
        top: "11%",
        left: "42.5%",
        width: "33%",
        height: "27%",
        clipPath: "circle(50% at 6% 5%)",
      },
    },
    {
      id: "area7",
      info: {
        titulo: "Canteiro",
        video: "",
        descricao: (
          <p>
            Os canteiros do Horto são verdadeiras vitrines da nossa biodiversidade. 
            Mais do que espaços de cultivo, são locais de exposição onde você pode 
            apreciar a delicadeza das plantas ornamentais e se inspirar com a harmonia 
            das cores que embelezam nosso ambiente. 
          </p>
        ),
        // descricao: (
        //   <p>
        //     Os canteiros do Horto são espaços dedicados ao cultivo e exposição
        //     de plantas ornamentais.
        //   </p>
        // ),
      },
      style: {
        top: "44%",
        left: "20%",
        width: "23.5%",
        height: "22%",
      },
    },
    {
      id: "area8",
      info: {
        titulo: "Canteiro",
        video: "",
        descricao: (
          <p>
            Os canteiros do Horto são verdadeiras vitrines da nossa biodiversidade. 
            Mais do que espaços de cultivo, são locais de exposição onde você pode 
            apreciar a delicadeza das plantas ornamentais e se inspirar com a harmonia 
            das cores que embelezam nosso ambiente. 
          </p>
        ),
        // descricao: (
        //   <p>
        //     Os canteiros do Horto são espaços dedicados ao cultivo e exposição
        //     de plantas ornamentais.
        //   </p>
        // ),
      },
      style: {
        top: "11%",
        left: "39.5%",
        width: "3%",
        height: "27%",
      },
    },
    {
      id: "area9",
      info: {
        titulo: "Pista de Caminhada",
        video: "videos/pista.mp4",
        descricao: (
          <p>
            Com trezentos e vinte e sete metros, nossa pista une saúde e natureza. 
            Um espaço revitalizado, perfeito para exercícios e contato com o ar puro.
          </p> // Obs: já que praticamente todo o resto está usando números em algarismos 
          // em vez de por extenso, talvez seja interessante trocar aqui por 327.
        ),
        // descricao: (
        //   <p>
        //     Esta pista de caminhada de 327 metros foi pensada de forma a
        //     aproveitar um espaço vital do Horto. Revitalizada com mudas nativas,
        //     é um local perfeito para exercícios e contato com o ar puro.
        //   </p>
        // ),
      },
      style: {
        top: "40%",
        left: "43%",
        width: "4%",
        height: "35%",
        clipPath:
          "polygon(10px 70%, 10px 70%, 10px 20px, 60% 20px, 60% 60%, 100% 55%, 100% 100%, 100% 100%, 10% 100%, 50% 100%, 50% 70%, 0% 71%)",
      },
    },
    {
      id: "area10",
      info: {
        titulo: "Pista de Caminhada",
        video: "videos/pista.mp4",
        descricao: (
          <p>
            Com trezentos e vinte e sete metros, nossa pista une saúde e natureza. 
            Um espaço revitalizado, perfeito para exercícios e contato com o ar puro.
          </p>
        ),
        // descricao: (
        //   <p>
        //     Esta pista de caminhada de 327 metros foi pensada de forma a
        //     aproveitar um espaço vital do Horto. Revitalizada com mudas nativas,
        //     é um local perfeito para exercícios e contato com o ar puro.
        //   </p>
        // ),
      },
      style: {
        top: "70%",
        left: "45.5%",
        width: "2%",
        height: "22%",
        clipPath: "inset(5% 20% 15% 10%);",
      },
    },
    {
      id: "area11",
      info: {
        titulo: "Pista de Caminhada",
        video: "videos/pista.mp4",
        descricao: (
          <p>
            Com trezentos e vinte e sete metros, nossa pista une saúde e natureza. 
            Um espaço revitalizado, perfeito para exercícios e contato com o ar puro.
          </p>
        ),
        // descricao: (
        //   <p>
        //     Esta pista de caminhada de 327 metros foi pensada de forma a
        //     aproveitar um espaço vital do Horto. Revitalizada com mudas nativas,
        //     é um local perfeito para exercícios e contato com o ar puro.
        //   </p>
        // ),
      },
      style: {
        top: "88%",
        left: "30.5%",
        width: "17%",
        height: "5%",
        clipPath: "inset(68% 0 0 0);",
      },
    },
    {
      id: "area12",
      info: {
        titulo: "Pista de Caminhada",
        video: "videos/pista.mp4",
        descricao: (
          <p>
            Com trezentos e vinte e sete metros, nossa pista une saúde e natureza. 
            Um espaço revitalizado, perfeito para exercícios e contato com o ar puro.
          </p>
        ),
        // descricao: (
        //   <p>
        //     Esta pista de caminhada de 327 metros foi pensada de forma a
        //     aproveitar um espaço vital do Horto. Revitalizada com mudas nativas,
        //     é um local perfeito para exercícios e contato com o ar puro.
        //   </p>
        // ),
      },
      style: {
        top: "81%",
        left: "14%",
        width: "17%",
        height: "6%",
        clipPath: "inset(68% 0 0 0);",
      },
    },
    {
      id: "area13",
      info: {
        titulo: "Pista de Caminhada",
        video: "videos/pista.mp4",
        descricao: (
          <p>
            Com trezentos e vinte e sete metros, nossa pista une saúde e natureza. 
            Um espaço revitalizado, perfeito para exercícios e contato com o ar puro.
          </p>
        ),
        // descricao: (
        //   <p>
        //     Esta pista de caminhada de 327 metros foi pensada de forma a
        //     aproveitar um espaço vital do Horto. Revitalizada com mudas nativas,
        //     é um local perfeito para exercícios e contato com o ar puro.
        //   </p>
        // ),
      },
      style: {
        top: "81%",
        left: "0%",
        width: "15%",
        height: "6%",
        clipPath: "inset(68% 0 0 0);",
      },
    },
    {
      id: "area14",
      info: {
        titulo: "Rio Caxangá",
        video: "",
        descricao: (
          <p>
            O rio que serpenteia nosso horto é conhecido como <strong>Rio Caxangá</strong>. 
            Ele não nasce de uma única fonte, mas de 26 nascentes distribuídas pela 
            região, algumas a mais de 4 km de distância. 
            <br /> <br />
            Sua jornada faz parte da <strong>Bacia do Paquequer</strong>, 
            percorrendo uma microbacia de cerca de 28 km até desaguar no Rio Paquequer.
            <br /> <br />
            Preservá-lo é honrar a vida que ele sustenta — e a nossa própria história.
          </p> // Obs: Mudei a paragrafação e adicionei acento a "Preservá-lo".
        ),
        // descricao: (
        //   <p>
        //     O <strong>Rio Paquequer</strong> representa o principal eixo ambiental e geográfico
        //     de Teresópolis, sendo considerado o verdadeiro <strong>coração hídrico</strong> do
        //     município. Com suas nascentes protegidas pela exuberante vegetação
        //     do <strong>Parque Nacional da Serra dos Órgãos</strong>, o rio desce as montanhas
        //     para moldar a paisagem urbana, atravessando bairros emblemáticos e
        //     alimentando cartões-postais como o  <strong>Lago Comary</strong>. Além de sua inegável
        //     importância estética e turística, o curso d'água desempenha um papel
        //     ecológico fundamental como afluente da bacia do <strong>Rio Paraíba do Sul</strong>,
        //     sendo vital para o equilíbrio do ecossistema regional. Por cortar
        //     áreas densamente povoadas, ele também se torna o ponto central para
        //     o planejamento urbano e para as ações de defesa civil, simbolizando
        //     o desafio constante de conciliar o desenvolvimento da cidade com a
        //     preservação de seus recursos naturais mais preciosos.
        //   </p>
        // ),
      },
      style: {
        top: "70%",
        left: "0%",
        width: "60%",
        height: "5%",
        transform: "rotate(3deg)",
        // backgroundColor: "rgba(255, 0, 0, 0.41)",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
    },
  ];

  return (
    <div className="todo_cont">
      <div className="image-container">
        <img src={mapaLegenda} alt="Legendas" className="mapa-img" />
        <img src={mapaImage} alt="Mapa Horto" className="mapa-img" />

        {hotspots.map(({ id, info, style }) => (
          <button
            key={id}
            className="hotspot"
            style={style}
            onClick={() => {
              setPopupInfo(info);
              setShowVideo(Boolean(info.video));
            }}
            title={info.titulo}
          />
        ))}
      </div>

      {popupInfo && (
        <div className="popup-wrapper">
          <div
            className="popup-overlay"
            onClick={() => setPopupInfo(null)}
          ></div>
          <div className="popup-content">
            <div className="popup-header">
              <h2>{popupInfo.titulo}</h2>
              <span className="close-icon" onClick={() => setPopupInfo(null)}>
                &times;
              </span>
            </div>
            <div className="content">
              {popupInfo.video && (
                <button
                  className="toggle-button"
                  onClick={() => setShowVideo((prev) => !prev)}
                >
                  {showVideo ? "Ver descrição" : "Ver vídeo"}
                </button>
              )}

              {popupInfo.video && showVideo ? (
                <video
                  className="popup-video"
                  src={popupInfo.video}
                  controls
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              ) : (
                <div className="description-text">{popupInfo.descricao}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
