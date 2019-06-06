import React, { Component } from "react";
import "./Chats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

class  Chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHovered:false
        }
    
        this.messageHover = this.messageHover.bind(this);
    }
     messageHover (){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        })); 
        
    }
    //wrap the span element within a div, alongside the font awesome icon. Div could be a flex item with row direction to avoid text moving
    render(){
        const {text, is_user_msg} = this.props.message;
        const hoverClass = this.state.isHovered? "hover": "";
        if(!this.state.isHovered === true){
            return (

                <span className={`Chat ${is_user_msg ? "is-user-msg" : "" } ${hoverClass}`}  onMouseEnter={this.messageHover} onMouseLeave ={this.messageHover}>{text} </span>
            );
        }
        else{
            return (
                <span className={`Chat ${is_user_msg ? "is-user-msg" : "" } ${hoverClass}`}  onMouseEnter={this.messageHover} onMouseLeave ={this.messageHover}>
                    {text} 
                    <MenuIcon top = {true}/>   
                </span>
            );
        }
        
    }
}


const MenuIcon =()=>{

    return (
        <FontAwesomeIcon icon ={faAngleDown} />
    );


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
                    <Chat message={message} key={message.number}  />
                ))}
            </div>
        );
    }
}

export default Chats;
