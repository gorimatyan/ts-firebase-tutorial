import React from 'react'

type Props = {
    message: string
}

const Message = (props: Props) => {
  return (
    <div>Message:{props.message}</div>
  )
}

export default Message