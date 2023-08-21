import './contact.css'
const ContactUs = () => {
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
                    aa
                </div>
            </section>
        </div>
    )
}

export default ContactUs