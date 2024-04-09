import React from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

function LayOut({ children }) {
    return (
        <div className=' min-h-[90vh] bg-gray-900 text-white'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default LayOut
