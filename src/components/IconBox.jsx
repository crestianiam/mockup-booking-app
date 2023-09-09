import React from 'react';
import { Card } from 'react-bootstrap';

const IconBox = ({ title, text, children }) => {
    return (
        <Card className='border-0'>
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

export default IconBox;
