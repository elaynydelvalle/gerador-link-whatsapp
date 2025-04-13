import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');

  const generateLink = () => {
    if (!number) {
      alert('Por favor, insira o número com DDD.');
      return;
    }

    const encodedMessage = encodeURIComponent(message || '');
    const generatedLink = `https://wa.me/${number}?text=${encodedMessage}`;
    setLink(generatedLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
      .then(() => alert('Link copiado com sucesso!'))
      .catch(() => alert('Erro ao copiar o link.'));
  };

  return (
    <div className="App">
      <h1>Gerador de Link do WhatsApp</h1>
      <div className="form-group">
        <label>Número com DDD:</label>
        <input
          type="tel"
          placeholder="Ex: 11987654321"
          value={number}
          onChange={(e) => setNumber(e.target.value.replace(/\D/g, ''))}
        />
      </div>
      <div className="form-group">
        <label>Mensagem personalizada:</label>
        <textarea
          rows="3"
          placeholder="Digite sua mensagem aqui"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={generateLink}>Gerar link grátis</button>
      {link && (
        <div className="result">
          <p>Link Gerado:</p>
          <input type="text" value={link} readOnly />
          <button onClick={copyToClipboard}>Copiar link</button>
        </div>
      )}
    </div>
  );
}

export default App;
