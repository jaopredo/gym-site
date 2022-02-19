import React from 'react';

// import { Container } from './styles';

function Article({ children, ...rest }) {
    return (
        <article {...rest}>
            {children}
        </article>
    );
}

export default Article;