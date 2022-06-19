import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Item1 = () => {
    return (
        <><div>Item1どぅえーす</div>
        <Link to='detail'>詳細</Link>
        
            <Outlet />
        </>
    )
}

export default Item1