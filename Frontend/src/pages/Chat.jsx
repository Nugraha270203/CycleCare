import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const PopupContainer = styled(animated.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

const ChatHistory = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

const MessageInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SendMessageButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ChatbotButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1000;
`;

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatHistoryRef = useRef();

  const springProps = useSpring({
    opacity: showChatbot ? 1 : 0,
    transform: showChatbot ? 'translateY(0)' : 'translateY(100%)',
  });

  useEffect(() => {
    // Auto-scroll to the bottom when chat history updates
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  }, [chatHistory]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, { type: 'user', text: message }]);
      // Simulate a response from the chatbot (you can replace this with actual logic)
      setChatHistory([...chatHistory, { type: 'bot', text: 'Your chatbot response goes here.' }]);
      setMessage('');
    }
  };

  return (
    <div>
      <ChatbotButton onClick={() => setShowChatbot(!showChatbot)}>
        {showChatbot ? 'Hide Chatbot' : 'Show Chatbot'}
      </ChatbotButton>
      <PopupContainer style={springProps}>
        <ChatHeader>Chat with Chatbot</ChatHeader>
        <ChatHistory ref={chatHistoryRef}>
          {chatHistory.map((chat, index) => (
            <p key={index} style={{ textAlign: chat.type === 'user' ? 'right' : 'left' }}>
              {chat.text}
            </p>
          ))}
        </ChatHistory>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <MessageInput
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendMessageButton onClick={handleSendMessage}>Send</SendMessageButton>
        </div>
      </PopupContainer>
    </div>
  );
};

export default App;
