import { Figure } from 'react-bootstrap'

type LocationProps = {
    title: string,
    total: number,
    imgUrl: string
}

const Location = ({ title, total, imgUrl }: LocationProps) => {
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
