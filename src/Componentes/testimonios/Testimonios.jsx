import Estrellas from "./Estrellas";
import Card from 'react-bootstrap/Card';
import Foto from "./img/usuario.png";
import "./testimonios.css";

const Testimonios = () => {
    return(
        <div className="listGroup">

            <Card className="tarjeta">
                <img variant="top" src={Foto} className="fotoUsuario1" />
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
                <img variant="top" src={Foto} className="fotoUsuario1" />
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
                <img variant="top" src={Foto} className="fotoUsuario1" />
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
    )

}

export default Testimonios;