// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 p-6 flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-white">Fruit.Ai</h1>
        <p className="text-xl text-white">"Be Healthy"</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Link to="/chatbot" className="bg-yellow-400 text-2xl font-bold p-6 rounded-xl text-center">
          Chat.
        </Link>
        <Link to="/translator" className="bg-green-300 text-2xl font-bold p-6 rounded-xl text-center">
          G<sub>Translate</sub>
        </Link>
        <Link to="/faq" className="bg-blue-300 text-2xl font-bold p-6 rounded-xl text-center">
          FAQs
        </Link>
        <Link to="/about" className="bg-pink-300 text-2xl font-bold p-6 rounded-xl text-center">
          About
        </Link>
      </div>
    </div>
  );
}

export default Home;
