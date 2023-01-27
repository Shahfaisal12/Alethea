import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cardData = [{
    img: 'assets/ai1.svg',
    cardHeader: 'Decentralized Governance',
    para: 'The ALI Utility Token empowers the AI Protocols community to shape its policies, rules, and constitution. This helps ensure that the right balance is achieved between reducing malicious actors and protecting creative freedom.',
},
{
    img: 'assets/ai2.svg',
    cardHeader: 'Content Moderation Council',
    para: 'The ALI Utility Token holders elect members to the Content Moderation Council, which serves to review any flagged characters or reported malicious content within the AI Protocol that may be in violation of its Constitution or Policies.',
},
{
    img: 'assets/ai3.svg',
    cardHeader: 'Reputation Staking',
    para: 'The ALI Utility Token can be used by iNFTs for reputational staking to access more sensitive and powerful AI Systems. This provides a financial incentive for the iNFT and the dApp being powered through it to not engage in malicious activity.',
}];


const UtilityToken = () => {
    return (
        <div className='UtilityToken-section py-5'>
            <div className="container">
                <h1 className='text-white mb-3 mb-md-5 text-center'>The ALI Utility Token Enables Moderation and Governance</h1>
                <p className='px-4 px-md-5 mx-2 mx-md-5 text-white text-center'>The power of Generative AI Systems creates immense potential for harmful and malicious actions. If provided the right framework, the AI Protocol’s Community has the capacity to efficiently moderate and govern itself. The AI Protocol features in-built mechanisms that allow the ALI Utility Token to function as a tool against malicious actors and ensure that the AI Protocol stays true to the values enshrined in its community approved constitution. These features include:</p>

                <Row xs={1} md={3} className="g-4 mt-5">
                    {cardData.map((cardItem) => (
                        <Col>
                            <Card width={370} className='text-center'>
                                <Card.Img variant="top" className='mx-auto' src={cardItem.img} />
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

export default UtilityToken