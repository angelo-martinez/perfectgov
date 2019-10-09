import React from "react";
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa';


export const FeedSidebar = (props) => {
  return (
    <div className="feed-sidebar">
        <div className="top">
          <FaArrowUp />
            {props.postUpvotes}
          <FaArrowDown />
        </div>
        <a className="bottom">
            <FaComment />
        </a>
    </div>
  );
};
