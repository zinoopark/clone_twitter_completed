import React, { useState } from "react";
import Tweet from "../Components/Tweet";


const Profile = ({user,dummyTweets,setDummyTweets}) =>{
    const myTweets = dummyTweets.filter(e=>e.username===user.username);
    return(
        <div>
            <div className="main-container__header">
                <h4>{user.username}</h4>
            </div>
            <div className="profile-modal">
                <div className="profile-bg">
                    <div className="profile-img-container">
                        <img className="profile-img" src={user.picture}></img>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="profile-info">
                    <h2>{user.username}</h2>
                    <div>
                        <span>Joined September 2021</span>
                    </div>
                    <div><strong>0</strong> <span>Following</span>&nbsp;&nbsp;&nbsp;&nbsp;<strong>0</strong> <span>Follower</span></div>
                </div>
            </div>
            <ul className="tweet-container">
            {
                myTweets.map(e=>{
                    return(
                        <Tweet key={e.id} el ={e} dummyTweets={dummyTweets} setDummyTweets={setDummyTweets}/>
                    )
                })
            }
            </ul>
            
        </div>
    )
}

export default Profile