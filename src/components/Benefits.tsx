import Benefit from './Benefit'
import { Gem, Star, PeopleFill, Magic, Gift } from 'react-bootstrap-icons'
import MyContainer from './MyContainer'
import { Row, Col } from 'react-bootstrap'
import { benefitsList } from '../data/lists'
import { ReactNode } from 'react'

type IconData = {
    title: string,
    text: string,
    icon: ReactNode
}

const iconData: IconData[] = [
    {
        title: benefitsList[0].title,
        text: benefitsList[0].text,
        icon: <Gem size={48} className='clr-blue' />,
    },
    {
        title: benefitsList[1].title,
        text: benefitsList[1].text,
        icon: <Star size={48} className='clr-blue' />,
    },
    {
        title: benefitsList[2].title,
        text: benefitsList[2].text,
        icon: <PeopleFill size={48} className='clr-blue' />,
    },
    {
        title: benefitsList[3].title,
        text: benefitsList[3].text,
        icon: <Magic size={48} className='clr-blue' />,
    },
    {
        title: benefitsList[4].title,
        text: benefitsList[4].text,
        icon: <Gift size={48} className='clr-blue' />,
    },
]

const Benefits = () => {
    return (
        <MyContainer>
            <div className="custom-bg-grey">
                <Row className='g-2'>
                    <Col lg={4} md={12}>
                        <h2 className='title-paragraph mb-4'>
                            Perché <span className='underline-blue'>scegliere</span>
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
            </div>
        </MyContainer>
    )
}

export default Benefits

