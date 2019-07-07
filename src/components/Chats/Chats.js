import React, { Component } from "react";
import "./Chats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import PopoverComponent from '../PopoverComponent';
import store from '../../store';
import { deleteMessage, setTypingValue, setEditing} from "../../actions";


class  Chat extends Component{
    constructor(props){
        super(props)
        this.state = {
            isHovered:false, 
            popoverOpen: false
        }

        // this.messageHover = this.messageHover.bind(this);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
        this.handleEditMessage = this.handleEditMessage.bind(this);
        this.togglePopover = this.togglePopover.bind(this);

    }

    togglePopover(){
        this.setState({
            popoverOpen: !this.state.popoverOpen
        })
    }

    handleDeleteMessage(){
        store.dispatch(deleteMessage(this.props.user_id, this.props.message.number));
    }

    handleEditMessage(){
        store.dispatch(setTypingValue(this.props.message.text));
        store.dispatch(setEditing(this.props.message.number));
        this.togglePopover();
    }


    //wrap the span element within a div, alongside the font awesome icon. Div could be a flex item with row direction to avoid text moving 
    render(){
        
        const {text, is_user_msg, number, edited} = this.props.message;
        const target_key = `popover${this.props.user_id}${number}`; //target key is a unique id for each message in the entire app for easy targeting by the popover
        
        return(
            <>
                <div id ="message_container" className={`Chat ${is_user_msg ? "is-user-msg" : "" } `} >
                    {text}
                    <div id ="message_container_inner">
                        <MenuIcon id = {target_key}  className ="show chat-menu-icon" />
                        {edited && <span style ={{fontSize:'0.7rem', fontStyle:'italic', color:'gray'}}>Edited</span>}
                    </div>
                </div>

                <PopoverComponent
                    trigger = "legacy"
                    isOpen = {this.state.popoverOpen}
                    placement = "top"
                    target = {target_key}
                    toggle = {this.togglePopover}
                >
                    <ul className = "list-group list-group-flush">
                        <li className ="list-group-item" onClick = {this.handleDeleteMessage} >Delete Message</li>
                        {is_user_msg && <li className ="list-group-item" onClick = {this.handleEditMessage}>Edit Message</li>}
                    </ul>
                </PopoverComponent>
            </>
        );
    }
}


class Chats extends Component {
    constructor(props){
        super(props);
        this.chatsRef = React.createRef();
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };

    render() {
        return (
            <div className="Chats" ref = {this.chatsRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} user_id = {this.props.user_id} />
                ))}
                
            </div>
        );
    }
}


const MenuIcon = ({id, className}) =>{
    return (
        <span id = {id} className = {className}>
            <FontAwesomeIcon icon ={faAngleDown}  />
        </span>
    );
}




export default Chats;
