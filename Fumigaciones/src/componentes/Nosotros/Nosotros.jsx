/* import React, { useState } from 'react';
import './Nosotros.css';
import gobbi from '../../assets/imagenes/gobbi.jpeg';
import lideres from '../../assets/imagenes/lideres2.png';
import krim from '../../assets/imagenes/krim.png';
import filardi from '../../assets/imagenes/filardi.png';
import freeway from '../../assets/imagenes/freeway.png';
import peugeot from '../../assets/imagenes/peugeot2.png';
import renault from '../../assets/imagenes/renault.png';
import la4 from '../../assets/imagenes/la4.png';
import drf from '../../assets/imagenes/drf.png';




function Nosotros() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    gobbi, // Imagen 1
    filardi, // Imagen 2
    lideres, // Imagen 3
    freeway, // Imagen 4
    renault, // Imagen 5
    krim,  // Imagen 6
    peugeot, // Imagen 7
    la4, // Imagen 8
    drf  // Imagen 9
  ];

  const imagesPerPage = 3; // Número de imágenes que se muestran a la vez
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextImages = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % totalPages);
        setIsAnimating(false);
      }, 500); // Duración de la animación
    }
  };

  const prevImages = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex - 1 + totalPages) % totalPages);
        setIsAnimating(false);
      }, 500); // Duración de la animación
    }
  };

  const startIndex = currentIndex * imagesPerPage;
  const selectedImages = images.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div className="empresa-container">
      <div className="empresa">
        <h3><b>EMPRESA</b></h3>
        <p>
          FUMITECNO ingresa al mercado en el año 2015. <br />
          En estos años de trabajo hemos sumado valiosa experiencia que ha generado una empresa sólida y confiable en
          todas sus operaciones. <br />
          Somos la 2da generación. Fumitecno es una empresa compuesta principalmente por gente joven con gran vocación
          de servicio para brindar soluciones a nuestros clientes.
        </p>
      </div>

      <div className="carousel-container">
        <h3><b>Clientes satisfechos y agradecidos!</b></h3>
        <div className={`carousel ${isAnimating ? 'animating' : ''}`}>
          <button onClick={prevImages} className="carousel-button">←</button>
          <div className="carousel-images">
            {selectedImages.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </div>
          <button onClick={nextImages} className="carousel-button">→</button>
        </div>
      </div>

      <div className="vision">
        <h3><b>VISIÓN DE EMPRESA</b></h3>
        <p>
          Ser una empresa líder en el mercado local, en el servicio de control de plagas, brindando la mayor calidad y
          efectividad en el servicio a un precio competitivo, que nos permita crecer y buscar una mejor calidad de
          vida para nuestros empleados.
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
*/

import React, { useState } from 'react';
import './Nosotros.css';
import gobbi from '../../assets/imagenes/gobbi.jpeg';
import lideres from '../../assets/imagenes/lideres2.png';
import krim from '../../assets/imagenes/krim.png';
import filardi from '../../assets/imagenes/filardi.png';
import freeway from '../../assets/imagenes/freeway.png';
import peugeot from '../../assets/imagenes/peugeot2.png';
import renault from '../../assets/imagenes/renault.png';
import la4 from '../../assets/imagenes/la4.png';
import drf from '../../assets/imagenes/drf.png';
import trabajando1 from '../../assets/imagenes/trabajando1.png';
import trabajando2 from '../../assets/imagenes/trabajando2.png';
import trabajando3 from '../../assets/imagenes/trabajando3.png';
import trabajando4 from '../../assets/imagenes/trabajando4.png';





function Nosotros() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    gobbi, filardi, lideres, freeway,
    renault, krim, peugeot, la4, drf 
  ];

  const imagesPerPage = 3; 
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextImages = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % totalPages);
        setIsAnimating(false);
      }, 500);
    }
  };

  const prevImages = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex - 1 + totalPages) % totalPages);
        setIsAnimating(false);
      }, 500);
    }
  };

  const startIndex = currentIndex * imagesPerPage;
  const selectedImages = images.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div className="empresa-container">
      <div className="empresa">
        <h3><b>EMPRESA</b></h3>
        <p>
          FUMITECNO ingresa al mercado en el año 2015. <br />
          En estos años de trabajo hemos sumado valiosa experiencia que ha generado una empresa sólida y confiable en
          todas sus operaciones. <br />
          Somos la 2da generación. Fumitecno es una empresa compuesta principalmente por gente joven con gran vocación
          de servicio para brindar soluciones a nuestros clientes.
        </p>
      </div>

      {/* Bloque de 4 imágenes */}
      <div className="image-grid">
        <img src={trabajando1} alt="Imagen 1" />
        <img src={trabajando2} alt="Imagen 2" />
        <img src={trabajando3} alt="Imagen 3" />
        <img src={trabajando4} alt="Imagen 4" />
      </div>


      <div className="vision">
        <h3><b>VISIÓN DE EMPRESA</b></h3>
        <p>
          Ser una empresa líder en el mercado local, en el servicio de control de plagas, brindando la mayor calidad y
          efectividad en el servicio a un precio competitivo, que nos permita crecer y buscar una mejor calidad de
          vida para nuestros empleados.
        </p>
      </div>

      <div className="carousel-container">
        <h3><b>Clientes satisfechos y agradecidos!</b></h3>
        <div className={`carousel ${isAnimating ? 'animating' : ''}`}>
          <button onClick={prevImages} className="carousel-button">←</button>
          <div className="carousel-images">
            {selectedImages.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </div>
          <button onClick={nextImages} className="carousel-button">→</button>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;