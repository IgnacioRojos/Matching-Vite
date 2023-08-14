import {AiOutlineStar, AiFillStar  } from 'react-icons/ai';

const Estrellas = (props) =>{
    return (
        <div className='star'>
            {
                [... new Array(5)].map((star,app) =>{
                    return app < props.score ? <AiFillStar/> : <AiOutlineStar/>;
                })
            }
        </div>
    )
}

export default Estrellas;