import React, { useEffect, useState } from 'react';
import { db } from "./firebase"
import { addDoc, collection, doc, Firestore, getDocs, onSnapshot } from "firebase/firestore"
import './App.css';
import TestComponet from './TestComponet';
import { AddToPhotosOutlined, SettingsInputCompositeSharp } from '@mui/icons-material';
import { FormControl, TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Route, BrowserRouter, Routes, } from 'react-router-dom';
import Top from './components/Top';
import Login from './components/Login';
import TodoList from './components/TodoList';
import NotFound from './components/NotFound';
import About from './components/About';
import Web from './Web';
import Items from './components/Items';
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import { Item3 } from './components/Items';
import Message from './components/Message';
import NameForm from './components/NameForm';
import Detail from './components/Detail';
import MessageForm from './components/MessageForm';
import ImgUpload from './components/ImgUpload';

const App: React.FC = () => {
  // 1、tasksコレクションを取得
  const collections = collection(db, 'tasks');

  // 2、taskコレクション内の2yWjz..のドキュメントを取得
  const documents = doc(db, 'tasks', '2yWjzTXLnGcyTtJ8DBfN');
  const documents_2 = doc(db, 'tasks/2yWjzTXLnGcyTtJ8DBfN'); // でも可
  console.log(collections);
  console.log(documents);

  const [message, setMessage] = useState<string>("");
  // const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setMessage(e.target.value);
  // };
  const [name, setName] = useState<string>("名前　初期値");
  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const sayHello = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <div className="App-header">
        <Message message={message} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Top name={name} />} />
            <Route path='/nameform' element={<NameForm name={name} setName={setName}  />} />
            <Route path='/messageform' element={<MessageForm message={message} setMessage={setMessage} />} />
            <Route path='/imgupload' element={<ImgUpload />} />
            <Route path='/login' element={<Login />} />
            <Route path='/todo' element={[<TodoList />, <Login />]} />
            <Route path='/about' element={<About Message='これはprops.messageです' />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/items' element={<Items />} >
              <Route index />
              <Route path='item1' element={<Item1 />}>
                {/* Route（/item1）のネスト要素 */}
                <Route path='detail' element={<Detail />} /> 
              </Route>
              <Route path='item2' element={<Item2 />} />
              <Route path='item3' element={<Item3 />} />
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
