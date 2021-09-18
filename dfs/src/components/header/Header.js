import React from 'react'
import Topbar from './Topbar'
import Innerwrapper from './Innerwrapper'
import Navbar from './Navbar'

function Header() {
    return (
        <div>
            <Topbar/>
            <Innerwrapper/>
            <Navbar/>
        </div>
    )
}

export default Header
