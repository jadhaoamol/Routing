import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Product() {
    return (
        <>
            <div>
                <h1>this is product Page</h1>
            </div>
            <nav className='subnav'>
                <Link to='shirts'>Shirts</Link> {/*here we are not used to="/shirts" bez we used relative path */}
                <Link to='jeans'>Jeans</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Product
