import React from 'react';
import IconBox from '../components/IconBox';
import { Gem, Star, PeopleFill, Magic, Gift } from 'react-bootstrap-icons';
import MyContainer from './MyContainer';
import { Row, Col } from 'react-bootstrap';

const iconData = [
    {
        title: "High Quality Assured",
        text: "A stunning collection of high-quality villas suitable for all group sizes in some of Sicily's top locations.",
        icon: <Gem size={48} color=' #64b4fa' />,
    },
    {
        title: "Outstanding Service",
        text: "Superb attention to details from your first enquiry and 24/7 assistance once you have arrived in Sicily.",
        icon: <Star size={48} color=' #64b4fa' />,
    },
    {
        title: "Local Team",
        text: "Get detailed advice from our location who know our villas and the island inside out.",
        icon: <PeopleFill size={48} color=' #64b4fa' />,
    },
    {
        title: "Extra Services",
        text: "Choose from a wide range of Extra Services, from cookery to wine tasting to enhance your holiday.",
        icon: <Magic size={48} color=' #64b4fa' />,
    },
    {
        title: "E-Travel Pack",
        text: "All your travel and local information will be supplied in a convenient user-friendly Travel Pack.",
        icon: <Gift size={48} color=' #64b4fa' />,
    },
];

const ChooseList = () => {
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
                        <IconBox title={item.title} text={item.text}>
                            {item.icon}
                        </IconBox>
                    </Col>
                ))}
            </Row>
        </MyContainer>
    );
}

export default ChooseList;

