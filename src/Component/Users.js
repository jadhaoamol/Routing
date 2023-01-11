import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
    return (
        <>
            <div className='user-menu'>
                <h1>This is user page</h1>
                <Link to={'/users/1'}>User 1</Link>
                <Link to={'/users/2'}>User 2</Link>
                <Link to={'/users/3'}>User 3</Link>
                <Link to={'/users/admin'}>admin</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Users
