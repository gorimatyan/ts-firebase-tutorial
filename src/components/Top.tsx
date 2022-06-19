import React, { useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'

type Props ={
    name: string
}
const Top: React.FC<Props> = (props) => {
    const params: string = createSearchParams({
        query1: "value3",
        query2: "value4"
    }).toString();
    //   console.log(params); query1=value3&query2=value4

    const navigate = useNavigate();
    

    return (
        <>
            <h1>Top</h1>
            <h2>{props.name}</h2>
            <ul>
                <li><Link to='nameform'>名前を変更</Link></li>
                <li><Link to='messageForm'>メッセージを変える</Link></li>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='todo'>TodoList</Link></li>
                <li><Link to={`todo?${params}`}>パラメータ付きTodoList</Link></li>
                <li><Link to={'about'}>About</Link></li>
                <li><Link to={'items'}>Go Items</Link></li>
            </ul>

            <button onClick={() => navigate(`todo?${params}`)}>パラメータ付きTodoList</button>
        </>


    )
}

export default Top