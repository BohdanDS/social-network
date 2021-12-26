import React from 'react';
import Navbar from "../Navbar/Navbar";
import FriendsContainer from "../Friends/FriendsContainer";

type SidebarType = {
    // state: Array<FriendType>
}

const Sidebar = (props: SidebarType) => {
    return (
        <div className="sidebar">
            <Navbar/>
            <FriendsContainer/>
            {/*<Friends friends={props.state}/>*/}
        </div>
    );
}
export default Sidebar;