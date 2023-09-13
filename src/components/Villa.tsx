import { Card } from 'react-bootstrap'

export type VillaType = {
    id: number;
    location: string;
    imgUrl: string;
    name: string;
    city: string;
    province: string;
    seats: number;
    bedrooms: number;
    bathrooms: number;
    pricePerNight: number;
    checkIn: string;
    checkOut: string;
    villaIdeas: string[];
    experiences: string[];
}

type VillaProps = {
    villa: VillaType
}

const Villa = ({ villa }: VillaProps) => {
    return (
        <Card >
            <Card.Img variant="top" src={villa.imgUrl} style={{ width: "100%", aspectRatio: "5/3" }} />
            <Card.Body>
                <Card.Title>{villa.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{villa.city} {"(" + villa.province + ")"} - {villa.location}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">From €{villa.pricePerNight}/night - €{villa.pricePerNight * 7}/week</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Seats {villa.seats} - Bedrooms {villa.bedrooms} - Bathrooms {villa.bathrooms}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">From {villa.checkIn} To {villa.checkOut}</Card.Subtitle>
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
