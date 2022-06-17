import React from 'react'


type Props = {
    Message: string
};

const About: React.FC<Props> = (props) => {

    return (
        <>
            <h1>About</h1>
            <div>{props.Message}</div>
        </>
    )
}

export default About