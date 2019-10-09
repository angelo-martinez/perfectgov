import React from "react";
import { FaRegClock } from 'react-icons/fa';


export const FeedHeader = (props) => {
    return (
        <div className="row feed-header">
            <div className="feed-header-col">
                <p className="author">{props.author}</p>
            </div>
            <div className="feed-header-col">
                <FaRegClock />
            </div>
            <div className="feed-header-col">
                <p className="post-time">{props.time}</p>
            </div>
        </div>
    );
};
