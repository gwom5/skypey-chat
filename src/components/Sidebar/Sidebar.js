import React from 'react';
import './Sidebar.css';
import User from '../../containers/User';


const Sidebar =({contacts, user})=>{
    return (
        <aside className="Sidebar">
            <CurrentUser user = {user} />
            <div className = "sidebar-chats">
                {
                    contacts.map(contact => <User user={contact} key={contact.user_id} />)
                }
            </div>
        </aside>);
}


const CurrentUser = ({user})=>{
    const {name, profile_pic} = user;
    return(
        <section className ="main-user-section">
            <div id ="main-user">
                <img src={profile_pic} alt={name} className="user__pic" />
            </div>
            <div >
                <input id ="main-user-section-search"></input>
            </div>

        </section>
    );
}

export default Sidebar;