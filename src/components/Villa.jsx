import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Villa = ({ villa }) => {
    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={villa.imgUrl} style={{ width: "100%", aspectRatio: "5/3" }} />
            <Card.Body>
                <Card.Title>{villa.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{villa.city} {"(" + villa.province + ")"}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">From €{villa.pricePerNight * 7}/week</Card.Subtitle>
                <Card.Text className="d-flex">
                    {villa.experiences.map((exp, index) => {
                        return (
                            <span key={exp}>
                                {exp}{index < villa.experiences.length - 1 ? "/" : null}
                            </span>
                        )
                    })}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Villa;
