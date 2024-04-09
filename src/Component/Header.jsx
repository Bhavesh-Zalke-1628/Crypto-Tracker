import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className=' absolute w-full h-[10vh] flex  items-center justify-between px-20'>
            <h1 className=' text-lg font-bold'>CryptoTracker <span className=' text-blue-300 text-4xl'>.</span></h1>
            <div>
                <ul className=' flex gap-4'>
                    <li>compre</li>
                    <Link to='/show'>
                        <li>show</li>
                    </Link>
                </ul>
            </div>
            <button>
                Dashboard
            </button>
        </div>
    )
}

export default Header
