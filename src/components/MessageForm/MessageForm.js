import React, { Component } from 'react';
import СityList from '../СityList'
import './MessageForm.css';

export default class MessageForm extends Component {
  constructor(props){
    super(props)
    this.state={
      messageName : '',
      messageText : '',
      messageNumber : '',
      messageСity: ''
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

  setMessageСity=(event)=>{
    this.setState({
      messageСity: event.target.value
    })
  }

  checkName=(nameValue)=>{
    if (nameValue.length != 0) {
      return true
    }else{
      return false
    }
  }

  checkNumber=(numberValue)=>{
    const regular =  new RegExp('8-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}')
    if (regular.test(numberValue)) {
      return true
    }else{
      return false
    }
  }

  checkNumberValue=(numberValue)=>{
    if (numberValue.length>15) {
      return false
    }else{
      return true
    }
  }

  submitForm=(el)=>{
    el.preventDefault();
    const numberValidation = this.checkNumber(this.state.messageNumber)
    const numberLenght = this.checkNumberValue(this.state.messageNumber)
    const nameLenght = this.checkName(this.state.messageName)

    if(numberValidation && numberLenght && nameLenght){
      this.props.messageFormFunction(this.state)
      this.setState({
        messageName:'',
        messageText: '',
        messageNumber: '',
        messageСity: ''
      })
    }
  }
    
  render(){
    const{messageName,messageText,messageNumber} = this.state

    return(
      <form className="message_form">

        <label htmlFor="messageName">Название обьявления</label>
        <textarea id="messageName" className='input_message_name' value={messageName} onChange={this.setMessageName} maxLength="100" placeholder='Введите название обьявления'/>

        <label htmlFor="messageText">Описание обьявления</label>
        <textarea id='messageText' className='input_message_text' value={messageText} onChange={this.setMessageText} placeholder='Введите описание обьявления' maxLength="300"/>

        <label htmlFor="messageNumber">Ваш номер</label>
        <input id='messageNumber' type="tel" className='input_message_number' value={messageNumber} onChange={this.setMessageNumber}  placeholder='8-999-222-22-22'/>
        
        <label htmlFor="messageСity">Ваш город</label>
        <select id='messageСity' size='1' onChange={this.setMessageСity}>
          <option disabled>Выберите город</option>
          {СityList.map((item,i)=>{
            return  <option key={i}>{item}</option>
          })}
        </select>

        <input type='submit' value="Создать обьявление" className='message_add_btn' onClick={this.submitForm}/>
        

      </form>
    )
  }
}