
import Testimonios from "./Componentes/testimonios/Testimonios"
import Footer from "./Componentes/footer/Footer"
import './App.css'
import HeadingBanner from "./Componentes/headingBanner/HeadingBanner"
import BrandLogos from "./Componentes/brandLogos/BrandLogos"
import BannerMobile from "./Componentes/bannerMobile/BannerMobile"
import ContactUs from "./Componentes/contactUs/ContactUs"
import Servicios from "./Componentes/servicios/Servicios"
import Banner from "./Componentes/banner/Banner"
import Whatsapp from "./Componentes/WhatsappLogo/Whatsapp"
import NavBar from "./Componentes/NavBar/NavBar"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AboutUs from "./Componentes/AboutUs/AboutUs"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/home'
          element={<> <NavBar></NavBar>
            <HeadingBanner src={"./oskar-hagberg-0mANKAqH87U-unsplash.png"} title={" deportistas, compitiendo juntos"} text={"¡Conéctate con deportistas y logra tu máximo rendimiento! Nuestra plataforma innovadora permite detectar habilidades, formar equipos equitativos y disfrutar de eventos deportivos emocionantes. Acumula puntos en cada participación y canjéalos por atractivos descuentos en marcas destacadas. Únete a diversos clubes y reserva canchas fácilmente ¡Vive una experiencia integral para los entusiastas del deporte!"}></HeadingBanner>
            <BrandLogos />
            <Banner />
            <Testimonios />
            <BannerMobile />
            <Whatsapp></Whatsapp>
            <Footer />
          </>
          }
        />
        <Route
          path='/contacto'
          element={<> <NavBar></NavBar>
            <ContactUs />
            <Footer />
          </>
          }
        />
        <Route
          path='/servicios'
          element={<> <NavBar></NavBar>
            <Servicios />
            <Footer />
          </>
          }
        />
        <Route
          path='/nosotros'
          element={<> <NavBar></NavBar>
            <AboutUs />
            <Footer />
          </>
          }
        />
        <Route
          path='*'
          element={<Navigate to="/home"></Navigate>}
        />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App


/*<HeadingBanner src={"./oskar-hagberg-0mANKAqH87U-unsplash.png"} title={" deportistas, compitiendo juntos"} text={"¡Conéctate con deportistas y logra tu máximo rendimiento! Nuestra plataforma innovadora permite detectar habilidades, formar equipos equitativos y disfrutar de eventos deportivos emocionantes. Acumula puntos en cada participación y canjéalos por atractivos descuentos en marcas destacadas. Únete a diversos clubes y reserva canchas fácilmente ¡Vive una experiencia integral para los entusiastas del deporte!"}></HeadingBanner>
      <BrandLogos />
      <Testimonios />
      <BannerMobile />
      <Footer />*/ /*<BannerMobile />*/