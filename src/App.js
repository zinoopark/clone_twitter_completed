import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Pages/Main';
import Profile from './Pages/Profile';
import Bookmark from './Pages/Bookmark';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import dummyData from './static/dummyData';




function App() {
  const [user,setUser] = useState({username:'zinoopark',picture: `${process.env.PUBLIC_URL}/profile.jpeg`});
  const [dummyTweets,setDummyTweets]  = useState(dummyData);
  const [markedTweets,setMarkedTweets] = useState(dummyData.filter(e=>e.marked));

  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-container'> 
          <Header picture={user.picture}></Header>
          <div className="main-container">  
          <Routes>
            <Route path="/" element={<Main user={user} dummyTweets={dummyTweets} setDummyTweets={setDummyTweets} setMarkedTweets={setMarkedTweets}></Main>}></Route>
            <Route path="/profile" element={<Profile user={user} dummyTweets={dummyTweets} setDummyTweets={setDummyTweets}></Profile>}></Route> 
            <Route path="/bookmark" element={<Bookmark dummyTweets={dummyTweets} setDummyTweets={setDummyTweets}></Bookmark>}></Route>
          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
