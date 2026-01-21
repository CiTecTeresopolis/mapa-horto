import Mapa from '../componentes/Mapa'
import React, { useState, useEffect } from 'react'


function Mobile() {

  const [error, setError] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const lockLandscape = async () => {
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          // Trava em landscape (pode ser 'landscape-primary' ou 'landscape-secondary')
          await screen.orientation.lock('landscape');
        }
      } catch (err) {
        console.error("A orientação não pôde ser travada:", err);
      }
    };

    lockLandscape();

    // Cleanup: Quando sair da tela, volta ao normal
    return () => {
      if (screen.orientation.unlock) {
        screen.orientation.unlock();
      }
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, []);

  useEffect(() => {
    // Verifica se o navegador suporta geolocalização
    if (!navigator.geolocation) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError('Geolocalização não é suportada pelo seu navegador.');
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
        setError('Não foi possível obter sua localização.');
        console.error(err);
      },
      { enableHighAccuracy: true } 
    );
  }, []);

  if (error) return <p>{error}</p>;
  if (!position) return <p>Obtendo localização...</p>;

  return (
    <>
      <div className='card'>
          
          <Mapa />
          <p>Lat: {position.lat} | Lng: {position.lng}</p>
      </div>
    
    </>
  )
}

export default Mobile
