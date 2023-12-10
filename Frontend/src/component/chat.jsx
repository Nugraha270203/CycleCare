import React, { useState } from 'react';
import { Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import "../index.css";
import bot from "../assets/bot.png"
import bot2 from "../assets/bxs_bot.png"

const FloatingChat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(true);

  const handleInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Card className={`floating-chat ${isChatOpen ? 'open' : 'closed'}`} style={{ width: "25%" }}>
      <Card.Header
        style={{
          cursor: 'pointer',
          backgroundColor: '#C53938',
          color: '#fff',
          borderBottom: isChatOpen ? 'none' : '1px solid #ddd',
          height: '60px'
        }}
        onClick={toggleChat}
      >
        <div className='d-flex'>
          <div className='row'>
            <div className='col-3'>
              <img src={bot} alt="" />
            </div>
            <div className='col'>
            <p style={{paddingBottom:"20px"}} className='fw-bold'>C&C Bot <p  style={{color:"green", fontWeight:"600"}}>• Online</p></p>
            </div>

          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <div className='text-center'>
          <img src={bot2} alt="" />
          <h6>Hi, <h6 className='fw-bold'>Rahmat!</h6></h6>
          <h6>How can i help you to day?</h6>
        </div>
        {/* <div className='chat-bubble'>
          <p>Do you have problems with your motorbike?</p>
        </div> */}
        {messages.map((message, index) => (
          <div key={index} className="chat-bubble1">
            <p>{message}</p>
          </div>
        ))}
      </Card.Body>
      <Card.Footer className="d-flex">
        <InputGroup>
          <FormControl
            type="text"
            value={currentMessage}
            onChange={handleInputChange}
          />
          <Button variant="primary" onClick={handleSendMessage} style={{ marginLeft: "10px" }}>Send</Button>
        </InputGroup>
      </Card.Footer>
    </Card>
  );
};

export default FloatingChat;
