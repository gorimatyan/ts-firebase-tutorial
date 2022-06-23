import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../index';
import { CountContext } from './Top';


const Item1: React.FC = () => {

    const userContext = useContext(UserContext);
    // const selfIntroduceContext = useContext(IntroduceContext);
    // const {introduce,setIntroduce} = useContext(IntroduceContext);
    // console.log(userContext);
    // console.log(selfIntroduceContext.introduce);
    const {count, setCount} = useContext(CountContext)

    const changeIntroduce: React.MouseEventHandler<HTMLDivElement> = () => {
        setCount( (prev) => {return prev + 1;})
        // console.log(selfIntroduceContext.introduce)
    }
    console.log(count);
    return (
        <>
            <div onClick={changeIntroduce}>Item1どぅえーす</div>
            <div>{userContext.name}</div>
            <div >{count}</div>
            <Link to='detail'>詳細</Link>

            <Outlet />
        </>
    )
}

export default Item1