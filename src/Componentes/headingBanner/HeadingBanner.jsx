import './headingBanner.css'


const HeadingBanner = ({ src, title, text }) => {
  return (
    <div className='imageHeading'>
      <img src={src} alt="" />
      <div className='containerText'>
        <div className='imageTextTitle'>
          {title}
        </div>
        <div className='imageText'>
          {text}
        </div>
      </div>

    </div>
  );
}

export default HeadingBanner