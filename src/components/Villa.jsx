import React from 'react'
import { Card } from 'react-bootstrap'

const Villa = ({ villa }) => {
    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={villa.imgUrl} style={{ width: "100%", aspectRatio: "5/3" }} />
            <Card.Body>
                <Card.Title>{villa.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{villa.city} {"(" + villa.province + ")"} - {"Location: " + villa.location}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">From €{villa.pricePerNight}/night - €{villa.pricePerNight * 7}/week</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Seats: {villa.seats} - Bathrooms: {villa.bathrooms}</Card.Subtitle>
                <Card.Subtitle className="mb-2 d-flex text-muted">
                    {villa.villaIdeas.map((idea, index) => {
                        return (
                            <span key={idea}>
                                {idea}{index < villa.villaIdeas.length - 1 ? "/" : null}
                            </span>
                        )
                    })}
                </Card.Subtitle>
                <Card.Subtitle className="d-flex text-muted">
                    {villa.experiences.map((exp, index) => {
                        return (
                            <span key={exp}>
                                {exp}{index < villa.experiences.length - 1 ? "/" : null}
                            </span>
                        )
                    })}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default Villa
