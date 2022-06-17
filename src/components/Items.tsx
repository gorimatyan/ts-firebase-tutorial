import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Item1 from './Item1'
import Item2 from './Item2'
const Items = () => {
  return (
    <>
      <div>Items</div>
      <ul>
        <li><Link to={'item1'}>Item1</Link></li>
        <li><Link to={'item2'}>Item2</Link></li>
        <li><Link to={'item3'}>Item3</Link></li>
        <li><Link to={''}>戻る</Link></li>
      </ul>
      {/* <Routes> ↓これはOutletの中身
            <Route path='item1' element={<Item1 />} />
            <Route path='item2' element={<Item2 />} />
            <Route path='item3' element={<Item3 />} />
            <Route path='' />
          </Routes> */}
      <Outlet  />
    </>
  )
}

export const Item3 = () => {
  return (
    <h3>これはItem3</h3>
  )
}

export default Items