import React, { Component } from "react";
import "./Chats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody
} from 'reactstrap';


class  Chat extends Component{
    constructor(props){
        super(props)
        this.state = {
            isHovered:false, 
            popoverOpen: false
        }
        this.messageHover = this.messageHover.bind(this);
        this.togglePopover = this.togglePopover.bind(this);

    }


    togglePopover(){
        this.setState({
            popoverOpen: !this.state.popoverOpen
        })
    }


     messageHover (){
        this.setState({
            isHovered: !this.state.isHovered
        }); 
        
    }
    //wrap the span element within a div, alongside the font awesome icon. Div could be a flex item with row direction to avoid text moving 
    render(){
        const {text, is_user_msg, number} = this.props.message;
        const target_key = `popover${this.props.user_id}${number}`; //target key is a unique id for each message in the entire app for easy targeting by the popover
        return(
            <>
                <span className={`Chat ${is_user_msg ? "is-user-msg" : "" } `}  onMouseEnter={this.messageHover} onMouseLeave ={this.messageHover}>
                    {text}
                    <span id = {target_key}  className = {`${this.state.isHovered? "show": "hide" } chat-menu-icon `} >
                        <FontAwesomeIcon icon ={faAngleDown}  />
                    </span>  
                </span>
                    <UncontrolledPopover trigger ="legacy"  isOpen={this.state.popoverOpen} placement="bottom" target={target_key} toggle = {this.togglePopover}>
                    <PopoverHeader>Legacy Trigger</PopoverHeader>
                    <PopoverBody>
                        Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.</PopoverBody>
                    </UncontrolledPopover>
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




export default Chats;
