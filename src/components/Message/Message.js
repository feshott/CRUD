import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
  constructor(props){
    super(props)
    this.state={
      messageName : null,
      messageText : null,
      messageNumber : null
    }
  }

  render(){
    return(
      <div className="message">
        <h2 className="message_name">{this.props.messageName}</h2>
        <p className="message_text">{this.props.messageText}</p>
        <p className="message_number">{this.props.messageNumber}</p>
        <button className="message_delete" onClick={this.props.messageFunction}>delete message</button>
      </div>
    )
  }
}