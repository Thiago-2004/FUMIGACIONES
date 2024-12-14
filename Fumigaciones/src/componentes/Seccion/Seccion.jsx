import './Seccion.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardGroup } from 'reactstrap';
import asesoria from '../../assets/imagenes/asesoria2.png';
import edificios from '../../assets/imagenes/edificios.jpg';
import esculas from '../../assets/imagenes/escuela.jpg';
import tabla1 from '../../assets/imagenes/tabla1.png';
import tabla2 from '../../assets/imagenes/tabla2.png';
import tabla3 from '../../assets/imagenes/tabla3.png';
import tabla4 from '../../assets/imagenes/tabla4.png';
import personal from '../../assets/imagenes/personal.png';
import { Link } from 'react-router-dom'



function Seccion() {
  return (
    <div className='sec'>
    <section id="inicio" className="hero">

      { }
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={asesoria}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3>Servicios de Fumigaciones con entrega de Certificados GCBA y Gran Buenos Aires</h3>
            <p>Brindamos servicios de Control de Plagas Urbanas, fitosanitarias, Industriales y desinfecciones
              ambientales.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={edificios}
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3>Servicios de Fumigaciones en Consorcios y Oficinas.</h3>
            <p>Somos especialistas en la fumigacion de edificios en CABA y GBA. Trabajamos mensualmente con un
              centenar de Administraciones.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={esculas}
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Servicios de fumigacion de escuelas, hogares y comercios</h3>
            <p>Somos especialistas en la fumigacion de hogares, restaurante y escuelas.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Container className="text-center mt-4">
        <Row className="align-items-start">
          <Col>
            <img src={tabla1} alt="cucarachas" /> <br />
            FUMITECNO es una empresa argentina dedicada al control de plagas urbanas, fitosanitarias e industriales,
            fumigaciones, desratizaciones y desinfecciones ambientales.
          </Col>
          <Col>
            <img src={tabla2} alt="tabla" /> <br />
            Realizamos tratamientos de todo tipo ya que contamos con más de 9 años de experiencia en el rubro,
            personal sumamente capacitado y equipamiento de última generación para aplicar según cada caso.
          </Col>
          <Col>
            <img src={tabla3} alt="verificacion" /> <br />
            Somos miembro de la Asociación de Profesionales en el Manejo Integrado de Plagas Urbanas de la República
            Argentina lo que permite hablar de la seriedad de la misma. Desde hace años venimos realizando cursos de
            perfeccionamiento.
          </Col>
          <Col>
            <img src={tabla4} alt="laboratorios" /> <br />
            Estamos vinculados con miembros de grandes laboratorios y otros profesionales colegas, lo que nos
            mantiene actualizados acerca de tendencias en el mercado: nuevos productos, nuevos procedimientos de
            fumigación, legislación.
          </Col>
        </Row>
      </Container>


      <div className='linea'>
        <hr />
      </div>


      <Container className="overflow-hidden text-center mt-4">
        <Row className="gy-5">
          <Col xs={6}>
            <div className="p-3">
              <h4 className="elegirnos">CERTIFICADOS</h4>
            </div>
            <p className="certificados">TODOS LOS CERTIFICADOS EN CAPITAL FEDERAL SE ENTREGAN CON OBLEA</p>
            <p>DESINFECCIÓN &#9989;</p>
            <p>DESINSECTACIÓN &#x2705;</p>
            <p>DESRATIZACIÓN &#x2705;</p>
            <hr className="linea" />
            <Link to="/contacto">Contacto</Link>
          </Col>
          <Col xs={6}>
            <div className="p-3">
              <h4 className="personal">NUESTRO PERSONAL</h4>
            </div>
            <div className="lista">
              <h6>Técnicos en control de plagas:</h6>
              <p>Capacitados</p>
              <img src={personal} alt="Personal capacitado" />
              <p>Uniformados</p>
              <p>Asegurados</p>
              <p>Responsables</p>
              <p>Honestos</p>
            </div>
          </Col>
          <Col xs={6}>
            <div className="p-3">
              <h4>POR QUÉ ELEGIRNOS?</h4>
            </div>
            <p className="texto">Tenemos 9 años que nos avalan. Contamos con todas las certificaciones necesarias para
              prestar servicios de Control de Plagas, desratizaciones y fumigaciones. Nuestros empleados cuentan
              con toda la cobertura (ART, SVO) necesaria para realizar servicios de fumigación seguros.</p>
          </Col>
          <Col xs={6}>
            <div className="p-3">
              <h4>NOS DEDICAMOS A FUMIGAR</h4>
            </div>
            <p className="texto">No somos una empresa “Multiservicios”. Nos dedicamos al Manejo Integrado de Plagas
              Urbanas. Capacitamos permanentemente a nuestros técnicos para brindar un mejor servicio. Hay
              empresas que “tiran” insecticidas con empleados que hoy limpian tanques y mañana hacen
              destapaciones. Nosotros nos dedicamos pura y exclusivamente a realizar fumigaciones.</p>
          </Col>
        </Row>
      </Container>


      <div className='linea'>
        <hr />
      </div>

      <h5>Zonas de influencia</h5>

      <p className="zonas">FUMIGACIONES <b>zona sur:</b> Adrogue, Burzaco, Calzada, Claypole, Banfiel, Lanus, Avellaneda,
        Lomas de Zamora, Temperley, Florencio Varela, Quilmes <b>CABA: </b>Villa Urquiza, Agronomia, Almagro, Balvanera,
        Barracas, Belgrano, Boedo, Caballito, Chacarita, Coghlan, Colegiales, Escobar, Flores, Floresta, La Boca, La
        Lucila, Liniers, Martinez, Mataderos, Monserrat, Monte Castro, Nueva Pompeya, Palermo, Parque Avellaneda, Parque
        Chacabuco, Parque Chas, Parque Patricios, Paternal, Puerto Madero, Retiro, San Cristobal, San Fernando, San
        Isidro, San Telmo, Tigre, Versalles, Vicente Lopez, Villa Crespo, Villa Del Parque, Villa Devoto, Villa Gral
        Mitre, Villa Lugano, Villa Luro,
      </p>


      <Container className="text-center mt-4">
        <Row className="align-items-start">
          <Col>
            <h3>Teléfono/Fax</h3>
            <hr className="linea" />
            <p><b>(5411) 2222-2222</b></p>
          </Col>
          <Col>
            <h3>Email</h3>
            <hr className="linea" />
            <a className="email" href="mailto:fumitecnoarg@gmail.com"><b>fumitecnoarg@gmail.com</b></a>
          </Col>
          <Col>
            <h3>Horarios</h3>
            <hr className="linea" />
            <p><b>Lunes a Viernes de 9 a 18</b></p>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
}

export default Seccion;

