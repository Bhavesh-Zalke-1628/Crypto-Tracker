import React from 'react'
import LayOut from '../Layout/LayOut'

const HomePage = () => {
    return (
        <LayOut>
            <div className=' min-h-[90vh] flex items-center justify-center gap-56'>
                <div className=' '>
                    <h1 className=' text-9xl leading-snug'>
                        Crypto
                    </h1>
                    <span className=' text-9xl ml-52 '>
                        Tracker
                    </span>
                </div>
                <div className=' border-2 border-none shadow-[0_0_10px_black] h-96 w-96'>
                </div>
            </div>
        </LayOut>
    )
}

export default HomePage
