import React from "react";


const Tweet = ({el,dummyTweets,setDummyTweets}) =>{
    const parsedDate = new Date(el.createdAt).toLocaleDateString("ko-kr");

    const handleBookmark = () =>{
        setDummyTweets(dummyTweets.map(e=>{
            if(e===el) {
                e.marked=!e.marked;
                return e;
            }
            else return e;
        }))
    }
    const handleDelete = () =>{
        setDummyTweets(dummyTweets.filter(e=>e!==el));
    }
    return(
        <li>
            <div className="tweet-wrapper">
                <div className="tweet-img-wrapper">
                    <img src={el.picture}></img>
                </div>
                <div className="tweet-text-wrapper">
                    <h4 className="tweet-username">{el.username}&nbsp;&nbsp;<span>{parsedDate}</span>
                        <div className="tweet-icon-container">
                            <div className="icon-wrapper">
                                <i 
                                className=
                                {el.marked?"fa-solid fa-bookmark":"fa-regular fa-bookmark"}
                                onClick={handleBookmark}
                                ></i>
                            </div>
                            <div className="icon-wrapper">
                                <i 
                                className="fa-solid fa-xmark"
                                onClick={handleDelete}
                                ></i>
                            </div>   
                        </div>
                    </h4>
                                     
                    <div>{el.content}</div>
                </div>
            </div>
        </li>
    )
}
export default Tweet