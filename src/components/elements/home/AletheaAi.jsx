import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cardData = [{
    img: 'assets/w1.svg',
    cardHeader: 'AI Systems',
    para: 'The AI Protocol connects developers of AI Systems with those seeking to customize, utilize, or integrate them in decentralized applications. Alethea AI’s CharacterGPT is the first of many such cutting-edge AI Systems that will be available within the Intelligence Layer of the AI Protocol. ',
},
{
    img: 'assets/w2.svg',
    cardHeader: 'AI Protocol',
    para: ' The AI Protocol is the property rights backbone of the Generative AI Economy. Its suite of decentralized smart contracts enables ownership, interoperability, and governance of AI Characters and Assets. Alethea AI is a proud contributor to the AI Protocol.',
},
{
    img: 'assets/w3.svg',
    cardHeader: 'dApps',
    para: ' The AI Protocol offers a suite of tools for anyone looking to build AI-powered decentralized Apps: no code smart contracts deployment, gasless transactions, multi-blockchain compatibility, non-custodial wallet creation, in-app tokens to credit conversions, and much more. ',
}];

const AletheaAi = () => {
    return (
        <div className='AletheaAi-section py-5'>
            <div className="container">
                <h1 className='text-white mb-3 mb-md-5 text-center'>Alethea AI and the AI Protocol</h1>
                <p className='text-center fw-4 heading-small px-3 px-md-5 mx-0 mx-md-5'>Alethea AI is a research and development studio building at the intersection of two of the most transformative technologies of our time: Generative AI and Blockchain. Our mission is to use these technologies to enable decentralized ownership and democratic governance of AI.</p>
                <div className='px-4 px-md-5 mx-2 mx-md-5 text-white text-center'><p className='px-4 px-md-5 mx-2 mx-md-5'>We believe the key to achieving our mission is to partner and work with those who share our values to advance the development and adoption of the AI Protocol.</p></div>

                <Row xs={1} md={3} className="g-4">
                    {cardData.map((cardItem) => (
                        <Col>
                            <Card width={370} className='text-center'>
                                <Card.Img variant="top" className='mx-auto' src={cardItem.img} style={{ width: '100px' }} />
                                <Card.Body>
                                    <Card.Title className='my-3'>{cardItem.cardHeader}</Card.Title>
                                    <Card.Text>
                                        {cardItem.para}
                                    </Card.Text>
                                    <Button variant="success" className='btn btn-learn mt-3 mt-md-5'>Learn More <img src="assets/btn-arrow.svg" alt="" /></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </div>
    )
}

export default AletheaAi