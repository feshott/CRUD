import React, { Component } from 'react';
import Message from './components/Message/Message'
import MessageForm from './components/MessageForm/MessageForm'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      allMessage:[]
    }
  }

  componentWillMount(){
    let arrAllMessage = JSON.parse(localStorage.getItem('message'))
    if(arrAllMessage){
      this.setState({
        allMessage : arrAllMessage
      })
    }
  }

  addMessage=(nowMessage)=>{
    console.log(nowMessage)
    const oldAllMessage = this.state.allMessage
    const newAllMessage = [...oldAllMessage, nowMessage]
    this.setState({
      allMessage: newAllMessage
    })
    localStorage.setItem('message',JSON.stringify(newAllMessage))
  }

  removeMessage=(object)=>{
    const oldAllMessage = this.state.allMessage
    // const newAllMessage = oldAllMessage.splice(object, 1)
    const newAllMessage = [...oldAllMessage.slice(0, object), ...oldAllMessage.slice(object + 1)];
    this.setState({
      allMessage: newAllMessage
    })
    localStorage.setItem('message',JSON.stringify(newAllMessage))
  }

  render() {
    const { allMessage } = this.state
    return (
      <div className="App">
        <div className="message_wrapper">
          {allMessage.map((item,i)=>{
            return <Message messageFunction = {this.removeMessage}
                            messageName = {item.messageName} 
                            messageText = {item.messageText}
                            messageNumber = {item.messageNumber}
                            messageCity = {item.messageСity}
                            messageIndex ={i}
                            key={i}
                    />
          })}
        </div>
        <MessageForm messageFormFunction={this.addMessage}/>
      </div>
    );
  }
}

export default App;
