import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import News from './components/News/News'
import Profile from './components/Profile/Profile';
import Foto from './components/Foto/Foto'
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <main className="main">
          <Route path='/Profile' component={Profile} />
          <Route path='/Messages' component={Messages} />
          <Route path='/News' component={News} />
          <Route path='/Foto' component={Foto} />
        </main>
      </div>
    </BrowserRouter>
  );
}


export default App;
