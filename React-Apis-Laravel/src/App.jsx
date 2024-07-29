import { Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [message, setMessage] = useState('');
  const [listMessage, setListMessage] = useState([]);

  useEffect(() => fetch('http://localhost:8000/api/chat/').then((data) => data.json()).then((data) => console.log(data)));
  
  return (
    <>
      <Body>
        <MessageBox>
          <Message listMessage={listMessage} />
        </MessageBox>
        <ChatBox message={message} setMessage={setMessage} listMessage={listMessage} setListMessage={setListMessage} />
      </Body>
    </>
  )
}

function Body({children}) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

function MessageBox({children}) {
  return (
    <div className="chatBox">
      {children}
    </div>
  );
}

function Message({listMessage}) {
  return (
    // <ul style={{ style: 'none' }}>
    //   {listMessage.map((message, index) => (
    //     <li key={index}>{message && `${message} success ✅`}</li>
    //   ))}
    // </ul>
    <>
    <p>
      hello world
    </p>
    </>
  );
}

function ChatBox({message, setMessage, listMessage, setListMessage}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSendData() {
    setListMessage([...listMessage, message]);
    fetch('http://localhost:8000/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message }) }).then((api) => api.json()).then((api) => console.log(api));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='chat-box'>
        <input type="text" onChange={(e) => setMessage(e.target.value)}/>
        <button type="submit" onClick={handleSendData}>Send</button>
      </form>
    </>
  );
}