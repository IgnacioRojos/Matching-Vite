import Contecta from "./img/Group 6657 (1).png";
import Coordina from "./img/Group 6658.png";
import Juga from "./img/Group 6659.png";
import "./Banner.css";


const Banner =() =>{
    return(
        <div className="containerBanner">
            <div className="listGroup2">
                <img src={Contecta}/>
                <img src={Coordina}/>
                <img src={Juga}/>
            </div>
        </div>
    )

}

export default Banner;