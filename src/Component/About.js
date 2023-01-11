import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to About Page</h1>
            <button onClick={()=>navigate('/contact')}>Cotacts</button>|
            {/*<button onClick={() => navigate(-1)}>Go Back</button> */}
        </div>
    )
}

export default About
