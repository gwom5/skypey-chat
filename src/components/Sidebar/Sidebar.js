import React from 'react';
import store from "../../store";
import {searchContacts} from '../../actions';
import './Sidebar.css';
import User from '../../containers/User';


const Sidebar =({contacts, user}) =>{
   const state = store.getState();
   const {searching} = state;
    
   //use the current state of the search box to filter the contacts
    const filteredContacts = contacts.filter(contact=>{
        return contact.name.toLowerCase().includes(searching.toLowerCase());
    });

    return (
        <aside className="Sidebar">
            <div className= "user-section-container"> 
                <section className = "main-user-section">
                    <CurrentUser user = {user} />
                </section>
                <Search value = {searching}/> 
            </div>

            <AllChats  contacts = {filteredContacts} />
            
        </aside>
    );
    
}


const CurrentUser = ({user})=>{
    const {name, profile_pic} = user;
    return(

            <div id ="main-user" >
                <img src={profile_pic} alt={name} className="user-pic" />
            </div>
    );
}

const Search = (props)=>{

    const handleChange = (e) =>{
        store.dispatch (searchContacts(e.target.value));
    }

    return(
        <input 
            value = {props.value} 
            id ="main-user-section-search" 
            placeholder = "Search or start new chat" 
            onChange = {handleChange}
        />
    );
}


const AllChats = ({contacts})=>{

    return (
        <div className = "sidebar-chats">
                    {
                       contacts.map(contact => <User user={contact} key={contact.user_id} />)
                    }
            </div>
    );
}



export default Sidebar;