import Calificar from "./img/Group.png";
import Premiar from "./img/Group (1).png";
import Conectar from "./img/Group (2).png";
import Reservar from "./img/Group (3).png";
import Fondo from "./img/Fondos.png";
import HT from "./img/hombre-despues-partido-tenis-terminado 216.png";
import "./Servicios.css"


const Servicios = () =>{

    return(
        <div className="fondoTenis">
            <div className="containterServicios">
                <img className="fondotarj"  src={Fondo}/>
                <div className="contenedorCont">
                    <div className="tituloPrincipal">
                        <h1 className="tituloServicios">Servicios</h1>
                    </div>

                    <div className="contenedorFYT">
                        <img className="iconosServ" src={Calificar}/>
                        <h2 className="tituloServ">Calificar:</h2>
                    </div>
                    <p className="textServ">
                        Podrás clasificar a otros usuarios,asi como evaluar el nivel de 
                        habilidades de cada uno de los deportistas con los que interactué.
                        Generando una comunidad dinámica y competitiva.
                    </p>
                    <div className="contenedorFYT">
                        <img className="iconosServ" src={Premiar}/>
                        <h2 className="tituloServ">Premiar:</h2>
                    </div>
                    <p className="textServ">
                        Matching ofrece incentivos en forma de puntos, los cuales podrás acumular
                        al participar en eventos deportivos.Posteriormente podrás canjear éstos puntos
                        por atractivos descuentos de una variedad de marcas que se anuncian a través de nuestra
                        plataforma.
                    </p>
                    <div className="contenedorFYT">
                        <img className="iconosServ" src={Conectar}/>
                        <h2 className="tituloServ">Conectar:</h2>
                    </div>
                    <p className="textServ">
                        Matching te ofrece la posibilidad de asociarte a diversos clubes deportivos, lo cual te permitira
                        acceder a un amplio abanico de opciones para tu práctica deportiva.
                    </p>
                    <div className="contenedorFYT">
                        <img className="iconosServ" src={Reservar}/>
                        <h2 className="tituloServ">Reservar:</h2>
                    </div>
                    <p className="textServ">
                        Podrás reservar canchas de manera fácil y rápida, tanto para partidos privados como públicos,
                        Tendrás la capacidad de emparejar equipos de manera equitatica,asegurando así la realización de partidos
                        justos y emocionantes.
                    </p>

                    <img src={HT} className="hombreTenista"/>
                    </div>

            </div>
        </div>
    )

}

export default Servicios;
