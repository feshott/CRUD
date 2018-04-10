import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {


  render(){
    const { messageName, messageText, messageNumber, messageIndex, messageFunction} =this.props
    return(
      <div className="message">
        <h2 className="message_name">{messageName}</h2>
        <p className="message_text">{messageText}</p>
        <p className="message_number">{messageNumber}</p>
        <button className="message_delete" onClick={()=>this.props.messageFunction(messageIndex)}>delete message</button>
      </div>
    )
  }
}