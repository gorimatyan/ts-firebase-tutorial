import React from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'

const Top: React.FC = () => {
    const params: string = createSearchParams({
        query1: "value3",
        query2: "value4"
      }).toString();
      //   console.log(params); query1=value3&query2=value4

    const navigate = useNavigate();
    
    return (
        <>
            <h1>Top</h1>
            <ul>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='todo'>TodoList</Link></li>
                <li><Link to={`todo?${params}`}>パラメータ付きTodoList</Link></li>
                <li><Link to={'about'}>About</Link></li>
            </ul>

            <button onClick={() => navigate(`todo?${params}`)}>パラメータ付きTodoList</button>
        </>


    )
}

export default Top