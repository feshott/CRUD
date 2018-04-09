import React, { Component } from 'react';
import Message from './components/Message/Message'
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

  testFunc=()=>{
   console.log(123)
  }

  render() {

    const { allMessage } = this.state

    return (
      <div className="App">

        <div className="message_wrapper">

          {allMessage.map(function(item){
            return <Message messageName = {item.messageName} 
                            messageText = {item.messageText}
                            messageNumber = {item.messageNumber}
                    />
          })}
          
          <Message
            messageName = 'Значимость этих проблем на столь очевидна, что постоянное информационно-пропагандистское обеспечение'
            messageText = 'Значимость этих проблем настолько очевидна, что по информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна,этих проблем настолько очевидна'
            messageNumber = '+ 7(999)234-45-45'
            messageFunction = {this.testFunc}/>

        </div>

        <form className="message_form">

          <h3>Имя сообщения</h3>
          <textarea className='input_message_name' maxLength="100" placeholder='Введите название обьявления'  required/>

          <h3>Текст сообщения</h3>
          <textarea className='input_message_text' placeholder='Введите описание обьявления' maxLength="300"/>

          <h3>Ваш номер</h3>
          <input type="tel" name="tel" placeholder='+7(999)222-22-22' required/>

          <button className='message_add_btn'>Создать обьявление</button>

        </form>

      </div>
    );
  }
}

export default App;
