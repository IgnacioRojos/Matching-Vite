import { useState } from 'react';
import './contact.css'
const ContactUs = () => {
    const [checkedGen, setCheckedGen] = useState(true)
    const [checkedPar, setcheckedPar] = useState(false)
    const handleChange = () => {
        setCheckedGen(!checkedGen)
        setcheckedPar(!checkedPar)
    }
    return (
        <div className="containerContact">
            <section className='containerForm'>
                <div className='contactInfo'>
                    <img className='matchingLogo' src={"/matchingLogo.svg"} alt="" />
                    <h3 className='text-light'>Informacion de Contacto</h3>
                    <section>
                        <div className='phoneContact'>
                            <img src={"/phoneLogo.svg"} alt="" />
                            <p>+54 9 221 477 8201</p>
                        </div>
                        <div className='emailContact'>
                            <img src={"/email.svg"} alt="" />
                            <p>matching@gmail.com</p>
                        </div>
                        <div className='locContact'>
                            <img src={"/locationLogo.svg"} alt="" />
                            <p>Iván Franko 3018, Lanús - Buenos Aires</p>
                        </div>
                        <div className='logosB'>
                            <img src={"/facebookLogo.svg"} alt="" />
                            <img src={"/twitterLogo.svg"} alt="" />
                            <img src={"/igLogo.svg"} alt="" />
                            <img src={"/tiktokLogo.svg"} alt="" />
                        </div>
                    </section>
                </div>
                <div className='contactForm'>
                    <h2 className='contactanos'>Contáctanos</h2>
                    <div className='name positionDiv'>
                        <p>Nombre</p>
                        <input className='inp' type="text" />
                    </div>
                    <div className='lastname positionDiv'>
                        <p>Apellido</p>
                        <input className='inp' type="text" />
                    </div>
                    <div className='email positionDiv'>
                        <p>Email</p>
                        <input className='inp' type="text" />
                    </div>
                    <div className='tel positionDiv'>
                        <p>Telefono</p>
                        <input className='inp' type="number" />
                    </div>
                    <div className='check'>
                        <h3>Selecciona Asunto</h3>
                        <label>
                            <input type="checkbox" checked={checkedGen} onChange={handleChange} />
                            Consulta General
                        </label>
                        <label className=''>
                            <input type="checkbox" checked={checkedPar} onChange={handleChange} />
                            Consulta Particular
                        </label>
                    </div>
                    <div className='msj '>
                        <p>Mensaje</p>
                        <input className='inp' type="text" />
                    </div>
                    <div className='btn'>
                        <button className='btnEnviar'>Enviar Mensaje</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs