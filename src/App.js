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

  addMessage=(object)=>{
    let arrAllMessage = this.state.allMessage
    arrAllMessage.push(object)
    this.setState({
      allMessage: arrAllMessage
    })
    localStorage.setItem('message',JSON.stringify(arrAllMessage))
  }

  removeMessage=(object)=>{
    let arrAllMessage = this.state.allMessage
    arrAllMessage.splice(object, 1)
    this.setState({
      allMessage: arrAllMessage
    })
    localStorage.setItem('message',JSON.stringify(arrAllMessage))
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
                            messageSity = {item.messageSity}
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
