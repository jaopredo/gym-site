import React from 'react';

// import { Container } from './styles';

function Traineer({ src, name, desc }) {
    return (
        <li>
            <figure>
                <img className='traineer-image' src={src} alt={name} />
                <figcaption>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </figcaption>
            </figure>
        </li>
    );
}

export default Traineer;