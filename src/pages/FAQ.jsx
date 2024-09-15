// src/pages/FAQ.js
import React, { useState } from 'react';

const initialFaqs = [
  { question: 'What is an apple?', answer: 'An apple is a fruit.' },
  { question: 'How does a chatbot work?', answer: 'It uses AI to respond.' },
];

function FAQ() {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  const handleAddFaq = () => {
    setFaqs([...faqs, newFaq]);
    setNewFaq({ question: '', answer: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>
      <div className="mb-6">
        <input
          type="text"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
          placeholder="New Question"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
          placeholder="New Answer"
          className="border p-2 w-full"
        />
        <button
          onClick={handleAddFaq}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Add FAQ
        </button>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
            <h2 className="font-bold">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
