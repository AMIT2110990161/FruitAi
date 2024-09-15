// src/pages/Translator.js
import React, { useState } from 'react';

function Translator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Static translation for now
    setTranslatedText(`Translated: ${text}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Translator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleTranslate}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Translate
      </button>
      {translatedText && (
        <div className="mt-4 bg-white p-4 rounded shadow-lg">
          {translatedText}
        </div>
      )}
    </div>
  );
}

export default Translator;
