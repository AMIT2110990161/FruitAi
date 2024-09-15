import React, { useState } from 'react';

function Translator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace with your actual Google Translate API key
  const API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY';

  const handleTranslate = async () => {
    if (!text) {
      setError('Please enter text to translate.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            target: 'hi', // You can dynamically change this to other languages
          }),
        }
      );
      const data = await response.json();
      setTranslatedText(data.data.translations[0].translatedText);
    } catch (err) {
      setError('Failed to translate. Please try again later.');
    }
    
    setLoading(false);
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
        disabled={loading}
      >
        {loading ? 'Translating...' : 'Translate'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {translatedText && (
        <div className="mt-4 bg-white p-4 rounded shadow-lg">
          <p><strong>Translated Text:</strong></p>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default Translator;
