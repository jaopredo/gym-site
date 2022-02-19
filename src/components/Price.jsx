import React from 'react';

// import { Container } from './styles';

function Price({ number, time, price, children }) {
    return (
        <li>
            <span className='number-container'>
                {number}
            </span>
            {time}
            <p>{children}</p>
            <span>
                R&#36;{price}
            </span>
            <a href="#">COMPRAR</a>
        </li>
    );
}

export default Price;