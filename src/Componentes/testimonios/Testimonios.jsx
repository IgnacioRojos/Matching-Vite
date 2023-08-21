import Estrellas from "./Estrellas";
import Card from 'react-bootstrap/Card';
import Foto3 from "./img/cover.png";
import Foto2 from "./img/Avatar.png";
import Foto1 from "./img/Avatar (1).png";
import Tenis from "./img/tenis.png";
import "./testimonios.css";

const Testimonios = () => {
    return(
        <div className="containerTestimonios">
            <div className="fondo">
                <div className="tituloPrincipal">
                    <h1 className="tituloT">Testimonios</h1>
                </div>

                <div className="tenis">
                        <img src={Tenis} className="imgTenis"/> 
                </div>

                <div className="listGroup">
                    <Card className="tarjeta">
                        <Card.Body className="cuerpo">
                            <img variant="top" src={Foto1} className=" foto1" />
                            <Card.Title className="tituloN">Valentin Vidal</Card.Title>
                            <Card.Text>
                                ¡Increíble plataforma Deportiva! Conocí Compañeros y Mejoré Mi Juego
                                ¡Recomendada Por Los Puntos Y Descuentos!.
                            </Card.Text>
                            <Estrellas className="star" score = {5}/>
                        </Card.Body>
                    </Card>

                    <Card  className="tarjeta tj2">
                        <Card.Body className="cuerpo">
                            <img variant="top" src={Foto2} className=" foto2" />
                            <Card.Title className="tituloN">Sofia Martinez</Card.Title>
                            <Card.Text>
                                App Para Amantes De La Competencia.
                                Formé Equipo, Ganamos Emocinates Partidos.
                                ¡Descuentos Geniales Por Puntos!.
                            </Card.Text>
                            <Estrellas score = {5}/>
                        </Card.Body>
                    </Card>
                    
                    

                    <Card  className="tarjeta tj1">
                        <Card.Body className="cuerpo">
                            <img variant="top" src={Foto3} className=" foto3" />
                            <Card.Title className="tituloN">Nicolas Acosta</Card.Title>
                            <Card.Text>
                                ¡La Mejor Forma De Jugar! Eventos Cercanos,Reservar Canchas Fáciles Y Descuentos.
                                Activa Y Contecta.
                            </Card.Text>
                            <Estrellas score = {5}/>
                        </Card.Body>
                    </Card>
                    
                    
                </div>

              


            </div>
        </div>
    )

}

export default Testimonios;