import "./footer.css";
import Logo from "./img/Capa_1.png";
import Ig from "./img/basil_instagram-solid.png";
import TikTok from "./img/ic_baseline-tiktok.png";
import Face from "./img/ri_facebook-fill.png";
import Tw from "./img/mdi_twitter.png";
import Line from "./img/Line 6.png";
import Der from "./img/Group 6657.png"

const Footer = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3 logo">
                    <img src={Logo} className="logoM"></img>
                </div>
                <div className="col-lg-9 redes">
                    <img src={Ig}></img>
                    <img src={Face}></img>
                    <img src={TikTok}></img>
                    <img src={Tw}></img>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 finFooter">
                    <img className="linea" src={Line}></img><br/>
                    <img className="texto" src={Der}></img>
                </div>
            </div>
        </div>
    )
        
}

export default Footer;