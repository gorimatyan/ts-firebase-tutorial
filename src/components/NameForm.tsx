import React from 'react'
import { setTokenSourceMapRange } from 'typescript'

type Props = {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    // sayHello:  () => void
}


const NameForm:React.FC<Props>= (props) => {
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setName((): string => e.target.value);
    }

  return (
    <>
        <div>名前：{props.name} </div>
        <input type="text" value={props.name} onChange={(e) => {changeName(e)}}/>
    </>
    )
}

export default NameForm

function setName(value: string) {
    throw new Error('Function not implemented.')
}
