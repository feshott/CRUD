import React, { Component } from 'react';
import './MessageForm.css';

export default class MessageForm extends Component {
  constructor(props){
    super(props)
    this.state={
      messageName : '',
      messageText : '',
      messageNumber : ''
    }
  }

  setMessageName=(event)=>{
    this.setState({
      messageName: event.target.value
    })
  }

  setMessageText=(event)=>{
    this.setState({
      messageText: event.target.value
    })
  }

  setMessageNumber=(event)=>{
    this.setState({
      messageNumber: event.target.value
    })
  }
    
  render(){
    const{messageName,messageText,messageNumber} = this.state

    return(
      <div className="message_form">

        <h3>Имя сообщения</h3>
        <textarea className='input_message_name' value={messageName} onChange={this.setMessageName} maxLength="100" placeholder='Введите название обьявления'/>

        <h3>Текст сообщения</h3>
        <textarea className='input_message_text' value={messageText} onChange={this.setMessageText} placeholder='Введите описание обьявления' maxLength="300"/>

        <h3>Ваш номер</h3>
        <input type="tel" value={messageNumber} onChange={this.setMessageNumber} placeholder='+7(999)222-22-22'/>
       
        <button className='message_add_btn' onClick={(messageName && messageNumber) ? (()=>this.props.messageFormFunction(this.state)) : null}>Создать обьявление</button>

      </div>
    )
  }
}