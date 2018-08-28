import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='robots' src={`https://robohash.org/${id}?250x250`} /> 
            <div>
                <h2> { name } </h2>
                <p> { email } </p>
                <p> { id } </p>
            </div>
        </div>
    );
}

export default Card;