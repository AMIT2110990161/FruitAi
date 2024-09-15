// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-green-200 to-blue-500 p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">About Fruit.ai</h1>
          <p className="text-lg mb-4">
            Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-powered chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
          </p>
          <button className="mt-4 py-2 px-4 bg-pink-500 text-white rounded hover:bg-pink-600">ABOUT</button>
        </div>
      </div>
    </div>
  );
}

export default About;
