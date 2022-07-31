import React, { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const passRef = useRef('')

  const [message, setMessage] = useState([
    {'msg':'This is first message', 'isCompleted':'yes'},
    {'msg':'This is second message', 'isCompleted':'no'}
  ])

  const messageHandle = ($event) => {
    $event.preventDefault();
    setMessage([...message, {msg:passRef.current.value}]);
    passRef.current.value = '';
  }

  const removeFromList = (index) => {
    const newList = message.filter((item) => item.msg !== index);
    setMessage(newList);
  }

  const markCompleted = (index) => {
    const indexNUmber = message.findIndex((item) => item.msg == index);
    if(indexNUmber != -1){
      let tempMessage = [...message]
      tempMessage[indexNUmber].isCompleted = 'yes';
      setMessage(tempMessage);
    }
    
  }

  const listItems = message.map((msg, index) =>
  <li key={msg.msg.toString()+index} className={msg.isCompleted}>
    <button className={msg.isCompleted == 'yes'?'d-none':'buttonCompleted'} onClick={() => markCompleted(msg.msg)} >✓</button> {msg.msg} <button className='buttonClose' onClick={() => removeFromList(msg.msg)}>X</button>
  </li>);

  return (
    <div className="App">
      <div className="container">
        <div className='heading'>
          <span>My Task Manager</span>
        </div>
        <div className='content'>
          <ul>{listItems}</ul>
        </div>
        <div className='footer'>
          <form action="" onSubmit={messageHandle}>
            <input type="text" placeholder='Your message' ref={passRef}/>
            <button onClick={messageHandle} type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
