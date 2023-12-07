import React, { useState } from 'react';
import { Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import "../index.css";

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
          backgroundColor: '#007BFF',
          color: '#fff',
          borderBottom: isChatOpen ? 'none' : '1px solid #ddd', 
        }}
        onClick={toggleChat} 
      >
        Chatbot
      </Card.Header>
      <Card.Body>
        <div className='chat-bubble'>
          <p>Do you have problems with your motorbike?</p>
        </div>
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
