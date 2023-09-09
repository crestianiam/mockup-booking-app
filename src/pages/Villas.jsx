import React from 'react'
import Villa from '../components/Villa'
import villas from "../data/villas.json"
import MyContainer from '../components/MyContainer'
import { Row, Col } from 'react-bootstrap'
import { useFilter } from '../context/FilterContext'
import { Button } from 'react-bootstrap'

const Villas = () => {
    const { openFilter } = useFilter()

    return (
        <MyContainer>
            <Button className="bg-yellow rounded-0 mb-4" style={{ border: "none" }} onClick={openFilter}>
                Filter
            </Button>
            <Row className='g-2'>
                {villas.map((v) => {
                    return (
                        <Col key={v.id} lg={6} md={12}>
                            <Villa villa={v} />
                        </Col>
                    )
                })}
            </Row>
        </MyContainer>
    );
}

export default Villas;
