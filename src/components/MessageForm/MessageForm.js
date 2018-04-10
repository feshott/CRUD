import React, { Component } from 'react';
import SityList from '../SityList'
import './MessageForm.css';

export default class MessageForm extends Component {
  constructor(props){
    super(props)
    this.state={
      messageName : '',
      messageText : '',
      messageNumber : '',
      messageSity: ''
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

  setMessageSity=(event)=>{
    this.setState({
      messageSity: event.target.value
    })
  }

  submitForm=()=>{
    this.props.messageFormFunction(this.state)
    this.setState({
      messageName:'',
      messageText: '',
      messageNumber: '',
      messageSity: ''
    })
  }
    
  render(){
    const{messageName,messageText,messageNumber} = this.state

    return(
      <div className="message_form">

        <h3>Название обьявления</h3>
        <textarea className='input_message_name' value={messageName} onChange={this.setMessageName} maxLength="100" placeholder='Введите название обьявления'/>

        <h3>Описание обьявления</h3>
        <textarea className='input_message_text' value={messageText} onChange={this.setMessageText} placeholder='Введите описание обьявления' maxLength="300"/>

        <h3>Ваш номер</h3>
        <input type="tel" className='input_message_number' value={messageNumber} onChange={this.setMessageNumber} maxLength="10" placeholder='(999)222-22-22'/>
        
        <h3>Ваш город</h3>
        <select size='1' onChange={this.setMessageSity}>
          <option disabled>Выберите город</option>
          {SityList.map((item,i)=>{
            return  <option key={i}>{item}</option>
          })}
        </select>

        <button className='message_add_btn' onClick={(messageName && messageNumber) ? (this.submitForm) : null}>Создать обьявление</button>

      </div>
    )
  }
}