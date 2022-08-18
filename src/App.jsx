import React from 'react';
import { Header } from './components/Header';
import { TasksBoard } from './components/TasksBoard';
import { Insert } from './components/Insert';
import { Footer } from './components/Footer';
import { TasksContextProvider } from './contexts/TasksContext';

import './global.css';

function App() {
  return (
    <TasksContextProvider>
      <div className="App">
        <Header />
        <Insert />
        <TasksBoard/>
        <Footer />
      </div>
    </TasksContextProvider>
  )
}

export default App
