import React from 'react'
import { Route, BrowserRouter, Routes,} from 'react-router-dom';
import Top from './components/Top';
import Login from './components/Login';
import TodoList from './components/TodoList';
import NotFound from './components/NotFound';
import About from './components/About';


const Web = () => {
    
    return (
        <Routes>
            <Route path='/' element={<Top />} />
            <Route path='/login' element={<Login />} />
            <Route path='/todo' element={[<TodoList />,<Login />]} />
            <Route path='/about' element={<About Message='これはprops.messageです' />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}

export default Web