import React from 'react';
import { Figure } from 'react-bootstrap';

const MyImage = ({ title, total, imgUrl }) => {
    return (
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={imgUrl}
            />
            <Figure.Caption>
                <div>{title} Sicily</div>
                <div>{total} Villas</div>
            </Figure.Caption>
        </Figure>
    );
}

export default MyImage;
