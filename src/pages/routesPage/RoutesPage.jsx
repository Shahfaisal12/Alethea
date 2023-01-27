import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from '../Layout/Base'
import Home from '../Home'
import PageNotFound from '../../pages/PageNotFound'
import ProtocolAi from '../ProtocolAi'
import CharacterGpt from '../CharacterGpt'
import DApps from '../DApps'

const RoutesPage = () => {
    return (
        <>
            <BrowserRouter>
                <Base>
                    <Routes >
                        <Route index path='/' element={<Home />} />
                        <Route path='/protocolai' element={<ProtocolAi />} />
                        <Route path='/charactergpt' element={<CharacterGpt />} />
                        <Route path='/dapp' element={<DApps />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage