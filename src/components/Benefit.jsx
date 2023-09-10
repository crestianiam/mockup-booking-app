import React from 'react';
import { Card } from 'react-bootstrap';

const Benefit = ({ title, text, children }) => {
    return (
        <Card className='border'>
            {children}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Benefit;
