import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {


  render(){
    const { messageName, messageText, messageNumber, messageSity, messageIndex, messageFunction} =this.props
    return(
      <div className="message">
      
        <h2 className="message_name">{messageName}</h2>

        {messageText && <p className="message_text">{messageText}</p>}

        <p className="message_number">{messageNumber}</p>

        {messageSity && <p className="message_sity">{messageSity}</p>}

        <button className="message_delete" onClick={()=>this.props.messageFunction(messageIndex)}>Удалить обьявление</button>

      </div>
    )
  }
}