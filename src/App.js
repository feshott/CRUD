import React, { Component } from 'react';
import Message from './components/Message/Message'
import MessageForm from './components/MessageForm/MessageForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      allMessage:[
        {
          messageName:'name_1',
          messageText:'text_1',
          messageNumber:'111 111 111'
        },
        { 
          messageName:'name_2',
          messageText:'text_2',
          messageNumber:'222 222 222'
         },
        { 
          messageName:'name_3',
          messageText:'text_3',
          messageNumber:'333 333 333'
         }
      ]
    }
  }

  addMessage=(object)=>{
    let arrAllMessage = this.state.allMessage
    arrAllMessage.push(object)
    this.setState({
      allMessage: arrAllMessage
    })
  //  console.log(object)
  }

  removeMessage=(object)=>{
    let arrAllMessage = this.state.allMessage
    arrAllMessage.splice(object, 1)
    this.setState({
      allMessage: arrAllMessage
    })
  //  console.log(object)
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
