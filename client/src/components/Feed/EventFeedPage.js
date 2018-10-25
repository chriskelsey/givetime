import React from "react";
import NavSideBar from "../Nav"
import FeedListItem from "./FeedListItem.js";
import "./EventFeedPage.css";
import MyEvent from '../MyEvents/MyEvent';

const EventFeedPage = ({ size, children }) => (
    <div>
        <div>
        <NavSideBar />
        </div>

        <div className = "content">
            <div className= "blank "></div>
            <h2>Event Feed</h2>
            <FeedListItem />
        </div>
        <div>
         <MyEvent/>
        </div>
        
    </div>
);

export default EventFeedPage;