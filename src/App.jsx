import Testimonios from "./Componentes/testimonios/Testimonios";
import Footer from "./Componentes/footer/Footer";
import './App.css';
import HeadingBanner from "./Componentes/headingBanner/HeadingBanner";
import BrandLogos from "./Componentes/brandLogos/BrandLogos";
import BannerMobile from "./Componentes/bannerMobile/BannerMobile";
import Servicios from "./Componentes/servicios/Servicios";



function App() {


  return (
    <>
      <HeadingBanner src={"./oskar-hagberg-0mANKAqH87U-unsplash.png"} title={" deportistas, compitiendo juntos"} text={"¡Conéctate con deportistas y logra tu máximo rendimiento! Nuestra plataforma innovadora permite detectar habilidades, formar equipos equitativos y disfrutar de eventos deportivos emocionantes. Acumula puntos en cada participación y canjéalos por atractivos descuentos en marcas destacadas. Únete a diversos clubes y reserva canchas fácilmente ¡Vive una experiencia integral para los entusiastas del deporte!"}></HeadingBanner>
      <BrandLogos />
      <Servicios/>
      <Testimonios/>
      <BannerMobile />
      <Footer/>



    
    
    </>
  )
}

export default App


/*<HeadingBanner src={"./oskar-hagberg-0mANKAqH87U-unsplash.png"} title={" deportistas, compitiendo juntos"} text={"¡Conéctate con deportistas y logra tu máximo rendimiento! Nuestra plataforma innovadora permite detectar habilidades, formar equipos equitativos y disfrutar de eventos deportivos emocionantes. Acumula puntos en cada participación y canjéalos por atractivos descuentos en marcas destacadas. Únete a diversos clubes y reserva canchas fácilmente ¡Vive una experiencia integral para los entusiastas del deporte!"}></HeadingBanner>
      <BrandLogos />
      <Testimonios />
      <BannerMobile />
      <Footer />*/ /*<BannerMobile />*/