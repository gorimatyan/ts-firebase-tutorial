import React from 'react'

type Props = {
    message: string;
    setMessage:  React.Dispatch<React.SetStateAction<string>>;
}

const MessageForm: React.FC<Props> = (props) => {

    const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setMessage((): string => {
            return e.target.value;
        })
    }

  return (
    <>
        <h1>MessageForm</h1>
        <input type="text" value={props.message} onChange={(e) => {changeMessage(e)}}/>
    </>
  )
}

export default MessageForm