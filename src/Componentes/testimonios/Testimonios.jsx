import Estrellas from "./Estrellas";
import Card from 'react-bootstrap/Card';
import Foto from "./img/usuario.png";
import "./testimonios.css";

const Testimonios = () => {
    return(
        <div>
            
            <div className="listGroup">
                <img variant="top" src={Foto} className="fotoUsuario1 foto1" />
                <img variant="top" src={Foto} className="fotoUsuario1 foto2" />
                <img variant="top" src={Foto} className="fotoUsuario1 foto3" />
                <Card className="tarjeta">
                    <Card.Body>
                        <Card.Title className="tituloN">Valentin Vidal</Card.Title>
                        <Card.Text>
                            ¡Increíble plataforma Deportiva! Conocí Compañeros y Mejoré Mi Juego
                            ¡Recomendada Por Los Puntos Y Descuentos!.
                        </Card.Text>
                        <Estrellas className="star" score = {5}/>
                    </Card.Body>
                </Card>

                <Card  className="tarjeta">
                    <Card.Body>
                        <Card.Title className="tituloN">Sofia Martinez</Card.Title>
                        <Card.Text>
                            App Para Amantes De La Competencia.
                            Formé Equipo, Ganamos Emocinates Partidos.
                            ¡Descuentos Geniales Por Puntos!.
                        </Card.Text>
                        <Estrellas score = {5}/>
                    </Card.Body>
                </Card>

                <Card  className="tarjeta">
                    <Card.Body>
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
    )

}

export default Testimonios;