import './about.css'
const AboutUs = () => {
    return (
        <div className="containerAbout">
            <div className='contAbt'>
                <div className="containerTxt">
                    <h2 className="titleAbout">¿Quiénes somos?</h2>
                    <p className='paragraph'>En Matching, comprendemos que el pádel es más que un deporte: es una pasión que une a las personas y crea vínculos duraderos. Como una empresa emergente en Argentina, nos enorgullece presentar una plataforma diseñada exclusivamente para los apasionados del pádel como vos.</p>
                    <p className='paragraph'>Nuestro objetivo es claro: creamos un espacio en línea donde puedas no solo reservar canchas y participar en eventos deportivos, sino también conectarte con otros apasionados del pádel y fortalecer tus lazos con clubes deportivos.</p>
                    <p className='paragraph'>Aunque somos una empresa joven, nuestra visión es audaz: queremos ser el puente digital que une a la comunidad de pádel en Argentina. Y mientras crecemos juntos, nuestra misión se fortalecerá, impulsada por la misma pasión que compartimos contigo.</p>
                    <p className='paragraph'>Estamos aquí para crear oportunidades donde puedas vivir tu pasión al máximo, generar puntos para adquirir beneficios y explorar un mundo de conexiones dentro del emocionante mundo del pádel.</p>
                    <p className='paragraphF'>¡Te damos la bienvenida a Matching, donde cada interacción te acerca más a una comunidad apasionada y llena de energía!</p>
                </div>
                <div className='gridImgs'>
                    <div className='imgAbout1'><img className='imgGrid' src={"./About1.png"} alt="" /></div>
                    <div className='imgAbout2'><img className='imgGrid' src={"./About2.png"} alt="" /></div>
                    <div className='imgAbout3'><img className='imgGrid' src={"./About3.png"} alt="" /></div>
                    <div className='imgAbout4'><img className='imgGrid' src={"./About4.png"} alt="" /></div>
                    <div className='imgAbout5'><img className='imgGrid' src={"./About5.png"} alt="" /></div>
                    <div className='imgAbout6'><img className='imgGrid' src={"./About6.png"} alt="" /></div>
                    <div className='imgAbout7'><img className='imgGrid' src={"./About7.png"} alt="" /></div>
                    <div className='imgAbout8'><img className='imgGrid' src={"./About8.png"} alt="" /></div>
                    <div className='imgAbout9'><img className='imgGrid' src={"./About9.png"} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs