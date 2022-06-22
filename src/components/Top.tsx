import React from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'

type Props ={
    name: string
    message: string
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
        <div className='flex flex-col'>
            <h1 className='font-bold text-red-400 mb-3.5'>Top</h1>

            <ul>
                <li><Link to='nameform'>名前を変更</Link></li>
                <li><Link to='messageform'>メッセージを変える</Link></li>
                <li><Link to='imgupload'>画像を変える</Link></li>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='todo'>TodoList</Link></li>
                <li><Link to={`todo?${params}`}>パラメータ付きTodoList</Link></li>
                <li><Link to={'about'}>About</Link></li>
                <li><Link to={'items'}>Go Items</Link></li>
            </ul>

            <button onClick={() => navigate(`todo?${params}`)}>パラメータ付きTodoList</button>
        </div>
        </>


    )
}

export default Top