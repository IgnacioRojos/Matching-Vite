import './bannerMobile.css'
const BannerMobile = () => {
    return (
        <div className="bannerContainer">
            <div className='containerText'>
                <h2 className='textTitle'>Descargá <span className="colorWord">Matching</span> y viví tu experiencia al máximo</h2>
                <p className='textP'>¡Usá la app desde el dispositivo que elijas!</p>
                <div className="downloadImages">
                    <img src={"./googlePlay.png"} alt="" />
                    <img src={"./appStore.png"} alt="" />
                </div>
            </div>
            <div className='conatinerMockUp'>
                <img className='leftMock' src="/leftMockUp.png" alt="" />
                <img className='centerMock' src="/centerMockUp.png" alt="" />
                <img className='rightMock' src="/rigthMockUp.png" alt="" />
            </div>
        </div>
    )
}

export default BannerMobile