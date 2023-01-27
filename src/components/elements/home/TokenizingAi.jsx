import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cardData = [{
    img: 'assets/a1.svg',
    cardHeader: 'Provable Ownership',
    para: 'The AI Characters exist on the blockchain as NFTs, enabling their creators to verify their ownership without a trusted third party.'
},
{
    img: 'assets/a2.svg',
    cardHeader: 'Data Sovereignty',
    para: 'The digital labor of the tokenized AI Characters benefits their owners, who also get to curate and customize the datasets that are added to the knowledge bases of their AI Characters. '
},
{
    img: 'assets/a3.svg',
    cardHeader: 'Character Assets',
    para: 'The tokenized AI Characters can generate and own a variety of AI Assets that exist on the AI Protocol and can be traded with others.'
},
{
    img: 'assets/a4.svg',
    cardHeader: 'Intelligence Customization',
    para: 'The tokenized AI Characters can upgrade their intelligence, evolve various aspects of their personality, and be trained on specialized domains by their owners.'
},
{
    img: 'assets/a5.svg',
    cardHeader: 'Decentralized Interoperability',
    para: 'The AI Characters are interoperable across all the dApps on the AI Protocol, enabling their utilization across multiple ecosystems, and providing the dApps with an existing user base to target.'
}];


const TokenizingAi = () => {
    return (
        <div className='TokenizingAi-section py-5'>
            <div className="container">
                <h1 className='mb-5'>Advantages of Tokenizing AI Characters on the AI Protocol</h1>
                <Row xs={1} md={3} className="g-4 justify-content-center">
                    {cardData.map((cardItem) => (
                        <Col>
                            <Card width={370} className='text-center'>
                                <Card.Img variant="top" className='mx-auto' src={cardItem.img} style={{ width: '50px' }} />
                                <Card.Body>
                                    <Card.Title className='my-3'>{cardItem.cardHeader}</Card.Title>
                                    <Card.Text>
                                        {cardItem.para}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default TokenizingAi