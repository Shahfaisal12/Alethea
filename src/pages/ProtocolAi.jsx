import React from 'react'
import AiProtocol from '../components/elements/protocol/AiProtocol'
import Build from '../components/elements/protocol/Build'
import Economy from '../components/elements/protocol/Economy'
import FeatureOfProtocol from '../components/elements/protocol/FeatureOfProtocol'
import Hero from '../components/elements/protocol/Hero'
import JoinNetwork from '../components/elements/protocol/JoinNetwork'
import Utalize from '../components/elements/protocol/Utalize'
import UtalizedToken from '../components/elements/protocol/UtalizedToken'

const ProtocolAi = () => {
  return (
    <>
    <Hero />
    <Economy />
    <FeatureOfProtocol />
    <Utalize />
    <Build />
    <AiProtocol />
    <UtalizedToken />
    <JoinNetwork />
    </>
  )
}

export default ProtocolAi