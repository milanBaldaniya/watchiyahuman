import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'

const Layout = (props) => {
    const { children } = props
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout