import React, { createContext, useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'

type Props = {
    name: string
    message: string
}
export const CountContext = React.createContext({} as {
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
  })

const Top: React.FC<Props> = (props) => {
    const params: string = createSearchParams({
        query1: "value3",
        query2: "value4"
    }).toString();
    //   console.log(params); query1=value3&query2=value4

    const navigate = useNavigate();

    const [count, setCount] = useState(0)

    return (
        <>
            <CountContext.Provider value={{ count, setCount }}>
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
            </CountContext.Provider>
        </>


    )
}

export default Top