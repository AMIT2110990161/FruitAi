// src/pages/Chatbot.js
import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = { sender: 'user', text: input };
      setMessages([...messages, newMessage]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: 'Thank you for your message!' },
        ]);
      }, 1000);

      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-between items-center">
      {/* Chat Header */}
      <div className="w-full p-4 bg-gray-800 text-white text-center">
        <h2 className="text-lg font-bold">John Doe</h2>
        <p className="text-sm">Online</p>
      </div>

      {/* Chat Window */}
      <div className="flex-grow w-full p-4 overflow-y-auto bg-gray-700">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-xl px-4 py-2 ${msg.sender === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-black'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="w-full p-4 bg-gray-800 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 rounded-lg border-none bg-gray-700 text-white mr-2"
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} className="bg-purple-500 text-white p-2 rounded-full">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
