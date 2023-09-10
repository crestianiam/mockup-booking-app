import React from 'react'
import { Figure } from 'react-bootstrap'

const Location = ({ title, total, imgUrl }) => {
    return (
        <Figure>
            <Figure.Image
                alt={"figure " + { title }}
                src={imgUrl}
            />
            <Figure.Caption>
                <div>{title}</div>
                <div>{total} Villas</div>
            </Figure.Caption>
        </Figure>
    )
}

export default Location
