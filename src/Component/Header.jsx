import React from 'react'

function Header() {
    return (
        <div className=' absolute w-full h-[10vh] flex  items-center justify-between px-20'>
            <h1>logo</h1>
            <div>
                <ul className=' flex gap-4'>
                    <li>compre</li>
                    <li>show</li>
                </ul>
            </div>
            <button>
                Dashboard
            </button>
        </div>
    )
}

export default Header
