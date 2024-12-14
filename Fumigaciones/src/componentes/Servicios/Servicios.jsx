/*import React from 'react';
import './Servicios.css'; // Opcional: Si tienes estilos específicos.
import cucarachas from '../../assets/imagenes/cucarachas.webp';
import desifeccion from '../../assets/imagenes/desifeccion.webp';


function Servicios() {
  return (
    <div>
      <h2 className="ser">SERVICIOS</h2>

      <div className="card-group mt-5">
        <div className="card">
          <img
            src="https://th.bing.com/th/id/OIP.pHNt_lRxmjNEHyq1QWze_QHaFN?w=236&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
            className="card-img-top"
            alt="Desratización"
          />
          <div className="card-body">
            <h5 className="card-title">DESRATIZACION</h5>
            <p className="card-text">
              Este procedimiento consiste en el control de roedores, los que son vectores de múltiples problemas sanitarios; mediante la instalación de trampas con cebos que atraen y eliminan al animal que lo ingiere.
              Estos se ubican en lugares estratégicos; estableciendo, generalmente, cercos perimetrales en construcciones o deslindes, los que impidan el reingreso de los roedores.
              Para realizar un adecuado control se sugiere, idealmente, realizar controles periódicos para reposición de cebos consumidos, dañados o que hayan perdido su palatibilidad; para mantener alejadas a las colonias. Así mismo, es fundamental un adecuado aseo y mantención de residuos de forma cerrada impidiéndoles ser atraídos al alimento o desechos.
            </p>
            <p className="card-text">
              <small className="text-body-secondary"></small>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={desifeccion} className="card-img-top" alt="Desinfección - Sanitización" />
          <div className="card-body">
            <h5 className="card-title">DESINFECCION - SANITIZACION</h5>
            <p className="card-text">
              Consiste en la aplicación de productos en base a amonios cuaternarios de última generación, mediante pulverización o aspersión: Con esto se produce un efecto sanitizante y desodrante; bactericida, viricida y funguicida, lo que permite el control de elementos patógenos, responsables de enfermedades infecto-contagiosas como hongos, algas, virus y bacterias.
              Estos productos, una vez aplicados, no producen toxicidad al ser humano, por lo que pueden ser utilizados con tiempos de reingreso más acotados.
            </p>
            <p className="card-text">
              <small className="text-body-secondary"></small>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={cucarachas} className="card-img-top" alt="Control de Plagas" />
          <div className="card-body">
            <h5 className="card-title">CONTROL DE PLAGA</h5>
            <p className="card-text">
              Se ofrecen programas de control de plagas, establecidos de acuerdo a la necesidad de su hogar u empresa; donde se realiza un análisis y propuestas personalizadas, con visitas periódicas lo que permite tener certificación de exigen los servicios de salud para instituciones.
              Esta es una herramienta integral de prevención evitando costos sociales y económicos.
            </p>
            <p className="card-text">
              <small className="text-body-secondary"></small>
            </p>
          </div>
        </div>
      </div>

      <h1 className="tit">DESINFECCION - FUMIGACION</h1>
      <p className="info">
        Consiste en control de insectos voladores y rastreros como moscas, mosquitos, avispas, polilas, zancudos, pulgones, termitas, hormigas, cucarachas, chinches, pulgas, entre otros, y de arácnidos como arañas, garrapatas, ácaros y alacranes.
        Este proceso se realiza aplicando insecticidas autorizados, piretroides de baja toxicidad y amplio espectro con máquinas especializadas en interiores y exteriores.
        Las aplicaciones se pueden realizar, dependiendo de la plaga, con una periodicidad controlada para mantener el equilibrio ecológico y evitando la resistencia de plagas a los productos aplicados.
        Las aplicaciones interiores deben considerar un tiempo mínimo de reingreso de dos a tres horas como mínimo.
      </p>
    </div>

    




  );
}

export default Servicios;*/

import React from 'react';
import './Servicios.css'; 
import cucarachas from '../../assets/imagenes/cucarachas.webp';
import desifeccion from '../../assets/imagenes/desifeccion.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Servicios() {
  return (
    <div>
      <h2 className="ser">SERVICIOS</h2>

      <div className="card-group mt-5">
        <div className="card">
          <img
            src="https://th.bing.com/th/id/OIP.pHNt_lRxmjNEHyq1QWze_QHaFN?w=236&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
            className="card-img-top"
            alt="Desratización"
          />
          <div className="card-body">
            <h5 className="card-title">DESRATIZACION</h5>
            <p className="card-text">
              Este procedimiento consiste en el control de roedores, los que son vectores de múltiples problemas sanitarios; mediante la instalación de trampas con cebos que atraen y eliminan al animal que lo ingiere.
              Estos se ubican en lugares estratégicos; estableciendo, generalmente, cercos perimetrales en construcciones o deslindes, los que impidan el reingreso de los roedores.
              Para realizar un adecuado control se sugiere, idealmente, realizar controles periódicos para reposición de cebos consumidos, dañados o que hayan perdido su palatabilidad; para mantener alejadas a las colonias. Así mismo, es fundamental un adecuado aseo y mantención de residuos de forma cerrada impidiéndoles ser atraídos al alimento o desechos.
            </p>
            <p className="card-text">
              <small className="text-body-secondary"></small>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={desifeccion} className="card-img-top" alt="Desinfección - Sanitización" />
          <div className="card-body">
            <h5 className="card-title">DESINFECCION - SANITIZACION</h5>
            <p className="card-text">
              Consiste en la aplicación de productos en base a amonios cuaternarios de última generación, mediante pulverización o aspersión: Con esto se produce un efecto sanitizante y desodrante; bactericida, viricida y funguicida, lo que permite el control de elementos patógenos, responsables de enfermedades infecto-contagiosas como hongos, algas, virus y bacterias.
              Estos productos, una vez aplicados, no producen toxicidad al ser humano, por lo que pueden ser utilizados con tiempos de reingreso más acotados.
            </p>
            <p className="card-text">
              <small className="text-body-secondary"></small>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={cucarachas} className="card-img-top" alt="Control de Plagas" />
          <div className="card-body">
            <h5 className="card-title">CONTROL DE PLAGA</h5>
            <p className="card-text">
              Se ofrecen programas de control de plagas, establecidos de acuerdo a la necesidad de su hogar u empresa; donde se realiza un análisis y propuestas personalizadas, con visitas periódicas lo que permite tener certificación de exigen los servicios de salud para instituciones.
              Esta es una herramienta integral de prevención evitando costos sociales y económicos.
            </p>
            <p className="card-text">
              <small className="text-body-secondary"></small>
            </p>
          </div>
        </div>
      </div>

      <h1 className="tit">DESINFECCION - FUMIGACION</h1>
      <p className="info">
        Consiste en control de insectos voladores y rastreros como moscas, mosquitos, avispas, polilas, zancudos, pulgones, termitas, hormigas, cucarachas, chinches, pulgas, entre otros, y de arácnidos como arañas, garrapatas, ácaros y alacranes.
        Este proceso se realiza aplicando insecticidas autorizados, piretroides de baja toxicidad y amplio espectro con máquinas especializadas en interiores y exteriores.
        Las aplicaciones se pueden realizar, dependiendo de la plaga, con una periodicidad controlada para mantener el equilibrio ecológico y evitando la resistencia de plagas a los productos aplicados.
        Las aplicaciones interiores deben considerar un tiempo mínimo de reingreso de dos a tres horas como mínimo.
      </p>

      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              FUMIGACION AVANZADA
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <p>Proporcionamos servicios de fumigación avanzada para una amplia variedad de plagas, utilizando productos de última generación que son seguros para el medio ambiente y para los humanos.
              Nuestros especialistas están entrenados para identificar las plagas y aplicar las técnicas más efectivas para su eliminación.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              ASESORIA AMBIENTAL
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <p>Ofrecemos asesoría completa en temas ambientales, incluyendo el manejo de residuos, la reducción de huella ecológica y la implementación de prácticas sostenibles.
              Nuestros servicios están diseñados para empresas y particulares que desean minimizar su impacto ambiental y cumplir con las normativas vigentes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;



