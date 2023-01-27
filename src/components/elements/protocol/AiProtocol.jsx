import React from 'react'
import Card from 'react-bootstrap/Card';

const AiProtocol = () => {
    return (
        <div className='Protocol-AiProtocol-section py-5'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <h1>The AI Protocol’s dApps are <span className=''>powered by iNFTs</span></h1>
                    <p>An iNFT is an ERC-721 asset NFT that is fused with an ERC-721 Intelligence Pod using the AI Protocol.</p>
                    <p>iNFTs have the exclusive right to access the Intelligence Layer (which hosts CharacterGPT and other AI Systems) of the AI Protocol. The iNFT owners can not only access and customize the AI Systems using their iNFTs, but also integrate those AI Systems with their dApps.</p>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="row ">
                        <div className="col-md-3 d-flex align-items-end mt-5">
                            <p>iNFTs have exclusive access to the AI Protocol's Intelligence Layer. Intelligence Pods allow the flow of intelligence from the Intelligence Layer to the iNFT.</p>
                        </div>
                        <div className="col-md-3 mt-5">
                            <div className="dev">
                                <Card className='bg-transparent'>
                                    <video
                                        src="assets/protocol/Frida-Kahlo Revenant.mp4"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        className=''
                                    />
                                    <Card.Body className='px-0'>
                                        <Card.Text>
                                            An intelligent Non-Fungible Token (iNFT).
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-end mt-5">
                            <p>Owning an iNFT is necessary to build dApps on the AI protocol. iNFTs allow the flow of Intelligence from the iNFTs to dApps.</p>
                        </div>
                        <div className="col-md-3 mt-5">

                            <div className="dev">
                                <Card className='bg-transparent'>
                                    <Card.Img variant="top" src="assets/protocol/timeline2.svg" className='img-fluid' />
                                    <Card.Body className='px-0'>
                                        <Card.Text>
                                            dApps built on the AI Protocol provide AI Services to their users and rely on the iNFTs for their access to the Intelligence Layer. Each iNFT can power one dApp.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="bg-img"></div>
                </div>
            </div>
        </div>
    )
}

export default AiProtocol