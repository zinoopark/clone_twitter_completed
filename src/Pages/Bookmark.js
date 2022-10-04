import React from "react";
import Tweet from "../Components/Tweet";
import bookmark from "../img/bookmark.png"


const Bookmark = ({dummyTweets,setDummyTweets}) => {
    const markedTweets = dummyTweets.filter(e=>e.marked);
    return (
        <div>
            <div className="main-container__header">
                <h4>Bookmarks</h4>
            </div>
                
            {
                markedTweets.length
                ?
                (
                    <ul className="tweet-container">
                        {
                        markedTweets.map(e=>{
                            return <Tweet key={e.id} el={e} dummyTweets={dummyTweets} setDummyTweets={setDummyTweets} ></Tweet>
                        })
                        }
                    </ul>
                )
                :
                (
                    <div className="bookmark-container">
                        <img src={bookmark}></img>
                        <h1>Save Tweets For Later</h1>
                        <span>Don’t let the good ones fly away! Bookmark</span>
                        <span>Tweets to easily find them again in the future.</span>
                    </div>
                )
            }

        </div>
    )
}

export default Bookmark;