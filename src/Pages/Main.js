import React, { useState } from "react";
import uuid from "react-uuid";
import Tweet from "../Components/Tweet"

const Main = ({user,dummyTweets,setDummyTweets}) =>{
    const [content,setContent] = useState('');

   const handleChangeMsg = (event) =>{
    setContent(event.target.value);
   }
   const handleSubmit = () =>{
    if(content==='') return;
    const tweet = {
        id : uuid(),
        username : user.username,
        picture : user.picture,
        content : content,
        createdAt : new Date
      };
    setDummyTweets([tweet,...dummyTweets]);
    setContent('');
   }
    

    return(
        <main>
                <div className="main-container__header">
                    <h4>Home</h4>
                </div>
                <div className="tweet-textarea">
                    <img src={user.picture}></img>
                    <div className="tweet-input-container">
                        <textarea 
                        placeholder="What's happening?"
                        onChange={handleChangeMsg}
                        value={content}
                        ></textarea>
                        <button
                        onClick={handleSubmit}
                        >Tweet</button>
                    </div>
                </div>
                <ul className="tweet-container">
                {

                    dummyTweets.map(e=>{
                        return(
                        <Tweet key= {e.id} el={e} dummyTweets={dummyTweets} setDummyTweets={setDummyTweets}></Tweet>
                            )
                    })
                }
                </ul>
                
        </main>
    )
}

export default Main