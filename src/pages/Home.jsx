import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import MyContainer from '../components/MyContainer';
import IconBox from '../components/IconBox';
import { Gem, Star, PeopleFill, Magic, Gift } from 'react-bootstrap-icons';
import groups from "../data/groups.json"
import MyImage from '../components/MyImage';
import Review from '../components/Review';

const Home = () => {
    return (
        <MyContainer>
            <Image src='/images/home.jpg' alt='homepage-image' style={{ height: "80vh", width: "100%" }} />
            <MyContainer>
                <Row>
                    <Col>
                        <h2 className='title-paragraph'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloruoloremque, ad facere provident nihil a
                            eaque dolore ipsum libero commodi, ratione nam! Maiores, qui reiciendis!
                        </h2>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus cum obcaecati consectetur rem cumque eos
                            laboriosam debitis doloremque ea, atque veniam nihil esse aliquam, nemo sequi perferendis officiis voluptatem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus cum obcaecati consectetur rem cumque eos
                            laboriosam debitis doloremque ea, atque veniam nihil esse aliquam, nemo sequi perferendis officiis voluptatem!
                            <br />
                            <br />
                        </p>
                    </Col>
                    <Col>
                        <Image src='/images/map.jpg' alt='homepage-image' fluid />
                    </Col>
                </Row>
            </MyContainer>
            <MyContainer>
                <Row>
                    <Col className='col-4'>
                        <h2 className='title-paragraph'>
                            Perché scegliere
                        </h2>
                    </Col>
                    <Col className='col-4'>
                        <IconBox title={"High Quality Assured"}
                            text={"A stunning collection of high-quality villas suitable for all group sizes in some of Sicily's top locations."}>
                            <Gem size={48} />
                        </IconBox>
                    </Col>
                    <Col className='col-4'>
                        <IconBox title={"Outstanding Service"}
                            text={"Superb attention to details from your first enquiry and 24/7 assistance once you have arrived in Sicily."}>
                            <Star size={48} />
                        </IconBox>
                    </Col>
                    <Col className='col-4'>
                        <IconBox title={"Local Team"}
                            text={"Get detailed advice from our location who know our villas and the island inside out."}>
                            <PeopleFill size={48} />
                        </IconBox>
                    </Col>
                    <Col className='col-4'>
                        <IconBox title={"Extra Services"}
                            text={"Choose from a wide tange of Extra Services, from cookery to wine tasting to enhance your holiday."}>
                            <Magic size={48} />
                        </IconBox>
                    </Col>
                    <Col className='col-4'>
                        <IconBox title={"E-Travel Pack"}
                            text={"All your travel and comprehensive local information will be supplied in a convenient user-friendly Travel Pack."}>
                            <Gift size={48} />
                        </IconBox>
                    </Col>
                </Row>
            </MyContainer>
            <MyContainer>
                <h2 className='title-paragraph' class='text-center'>
                    Choose your next Desination
                </h2>
                <p class='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque numquam fuga facilis voluptatum sit i
                    ste eos similique illo voluptatibus! Exercitationem, est autem voluptas aliquam laborum nostrum sequi minus eveniet.</p>
            </MyContainer>
            <MyContainer>
                <Row>
                    {groups.map((group) => {
                        return (
                            <Col key={group.id} className='col-3'>
                                <MyImage title={group.location} total={group.total} imgUrl={group.imgUrl} />
                            </Col>
                        )
                    })}
                </Row>
            </MyContainer>
            <MyContainer>
                <Row>
                    <Col className='col-4'>
                        <h2 class="title-paragraph">
                            What the say about
                        </h2>
                    </Col>
                    <Col class='col-4'>
                        <Review author={"Peter Masters"} stars={4}
                            text={"We thoroughly enhoyed our holiday in Sicily and were very pleased with our stay ad Alesa.Domineco were always quick to respond and very helpful."} />
                    </Col>
                    <Col class='col-4'>
                        <Review author={"theguardian"} stars={4}
                            text={"The Guardian discovers south Sicily's secrets during a week's stay at Casa d'Eraclea. Quiet beaches, fresh seafood and impressive ancient monuments all combine to create a wonderful week in southern Sicily."} />
                    </Col>
                </Row>
            </MyContainer>
        </MyContainer >
    );
}

export default Home;
