import React, {Component} from 'react';
import {
    UncontrolledPopover,
    PopoverBody
} from 'reactstrap';


class PopoverComponent extends Component{
    constructor(props){
        super(props);
        this.state =''
    }

    render(){
        const {trigger, isOpen, placement, target, toggle} = this.props;
        return(
            
             <UncontrolledPopover trigger ={trigger}  isOpen={isOpen} placement={placement} target={target} toggle={toggle} >
                    <PopoverBody>
                        {this.props.children}   
                    </PopoverBody>
            </UncontrolledPopover> 
        );
    }
}


export default PopoverComponent;


