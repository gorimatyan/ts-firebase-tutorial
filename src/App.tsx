import React, { useEffect, useState } from 'react';
import db from "./firebase"
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

const App: React.FC = () => {
  // 1、tasksコレクションを取得
  const collections = collection(db, 'tasks');

  // 2、taskコレクション内の2yWjz..のドキュメントを取得
  const documents = doc(db, 'tasks', '2yWjzTXLnGcyTtJ8DBfN');
  const documents_2 = doc(db, 'tasks/2yWjzTXLnGcyTtJ8DBfN'); // でも可
  console.log(collections);
  console.log(documents);



  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Top />} />
            <Route path='/login' element={<Login />} />
            <Route path='/todo' element={[<TodoList />, <Login />]} />
            <Route path='/about' element={<About Message='これはprops.messageです' />} />
            <Route path="*" element={<NotFound />} />
            <Route path='items' element={<Items />} >
              <Route index />
              <Route path='item1' element={<Item1 />} />
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
