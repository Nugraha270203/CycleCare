
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const PopupContainer = styled(animated.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  background-color: red;
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

const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const MessageInput = styled.input`
  
  padding: 2px;
  border: none;
  border-top: 1px solid #ddd;
`;

const SendMessageButton = styled.button`
  background-color: red; 
  color: white;
  padding: 7px;
  border: none;
  border-radius:10px;
  cursor: pointer;

`;

const ChatbotButton = styled.button`
  position: fixed;
  bottom: 28px;
  right: 30px;
  background-color: red;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 10px;
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
      setChatHistory([...chatHistory, { type: 'bot', text: 'I am Here Dude...' }]);
      setMessage('');
    }
  };

  return (
    <div>
      <ChatbotButton onClick={() => setShowChatbot(!showChatbot)}>
        {showChatbot ? 'x' : 'Show Chatbot'}
      </ChatbotButton>
      <PopupContainer style={springProps}>
        <ChatHeader>Messenger</ChatHeader>
        <ChatHistory ref={chatHistoryRef}>
          {chatHistory.map((chat, index) => (
            <p key={index} style={{ textAlign: chat.type === 'user' ? 'right' : 'left' }}>
              {chat.text}
            </p>
          ))}
        </ChatHistory>
        <MessageInputContainer>
          <MessageInput
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendMessageButton onClick={handleSendMessage}>Send</SendMessageButton>
        </MessageInputContainer>
      </PopupContainer>
    </div>
  );
};

export default App;
