import React from 'react';
import { Container } from 'react-bootstrap';

const MyContainer = ({ children }) => {
    return (
        <Container className='px-0'>
            {children}
        </Container>
    );
}

export default MyContainer;
