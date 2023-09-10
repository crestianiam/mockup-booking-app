import React from 'react'
import Benefit from './Benefit'
import { Gem, Star, PeopleFill, Magic, Gift } from 'react-bootstrap-icons'
import MyContainer from './MyContainer'
import { Row, Col } from 'react-bootstrap'
import { benefitsList } from '../data/lists'

const iconData = [
    {
        title: benefitsList[0].title,
        text: benefitsList[0].text,
        icon: <Gem size={48} color=' #64b4fa' />,
    },
    {
        title: benefitsList[1].title,
        text: benefitsList[1].text,
        icon: <Star size={48} color=' #64b4fa' />,
    },
    {
        title: benefitsList[2].title,
        text: benefitsList[2].text,
        icon: <PeopleFill size={48} color=' #64b4fa' />,
    },
    {
        title: benefitsList[3].title,
        text: benefitsList[3].text,
        icon: <Magic size={48} color=' #64b4fa' />,
    },
    {
        title: benefitsList[4].title,
        text: benefitsList[4].text,
        icon: <Gift size={48} color=' #64b4fa' />,
    },
]

const Benefits = () => {
    return (
        <MyContainer>
            <Row className='g-2'>
                <Col lg={4} md={12}>
                    <h2 className='title-paragraph'>
                        Perché scegliere
                    </h2>
                </Col>
                {iconData.map((item, index) => (
                    <Col lg={4} md={12} key={index}>
                        <Benefit title={item.title} text={item.text}>
                            {item.icon}
                        </Benefit>
                    </Col>
                ))}
            </Row>
        </MyContainer>
    )
}

export default Benefits

