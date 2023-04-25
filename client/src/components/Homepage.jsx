import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <homeNav>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </homeNav>
            <h1>Pot It Like It's Hot</h1>
            <h3><span>Track</span> your plants progress</h3>
            <h3><span>Document</span> your plants life</h3>
            <h3><span>Learn</span> from you past plants</h3>
        </div>
    )
}

export default HomePage