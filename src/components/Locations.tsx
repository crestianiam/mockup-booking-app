import Location from './Location'
import MyContainer from './MyContainer'
import { Row, Col } from 'react-bootstrap'
import groups from "../data/groups.json"

const Locations = () => {
    return (
        <MyContainer>
            <Row className="g-1">
                {groups.map((group) => {
                    return (
                        <Col key={group.id} lg={3} md={6} sm={12} >
                            <Location title={group.location} total={group.total} imgUrl={group.imgUrl} />
                        </Col>
                    )
                })}
            </Row>
        </MyContainer>
    )
}

export default Locations
