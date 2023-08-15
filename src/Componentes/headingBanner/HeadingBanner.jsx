import './headingBanner.css'

const HeadingBanner = ({ src,title, text }) => {
    return (
      <div className='imageHeading'>
        <img src={src} alt=""/>
        <div className='imageTextTitle'>
          {title}
        </div>
        <div className='imageText'>
            {text}
        </div>
      </div>
    );
}

export default HeadingBanner