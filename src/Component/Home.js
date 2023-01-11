import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    // const navigatToAbout = () =>{
    //     navigate('./about');
    // }
    // const navigatTo = (url) =>{
    //         navigate(url);
    //     }
    return (
        <div>

            <h1>Welcome to Home Page</h1>
            <button onClick={() => navigate('./about')}>About</button>|
           {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
            {/* <button onClick={() => navigatToAbout()}>About</button> */}
            {/*<button onClick={() => navigatTo('./about')}>About</button>
            <button onClick={() => navigatTo('./contact')}>Contact</button> */}
        </div>
    )
}

export default Home
