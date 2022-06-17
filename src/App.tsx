import React, { useEffect, useState } from 'react';
import db from "./firebase"
import { addDoc, collection, doc, Firestore, getDocs, onSnapshot } from "firebase/firestore"
import './App.css';
import TestComponet from './TestComponet';
import { AddToPhotosOutlined, SettingsInputCompositeSharp} from '@mui/icons-material';
import { FormControl, TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Route, BrowserRouter, Routes,} from 'react-router-dom';
import Top from './components/Top';
import Login from './components/Login';
import TodoList from './components/TodoList';
import NotFound from './components/NotFound';
import About from './components/About';
import Web from './Web';

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
          <Web />  
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
