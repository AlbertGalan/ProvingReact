import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

import imgcat from './assets/catalan_circle.png';
import imgen from './assets/english_circle.png';
import imges from './assets/spanish_circle.png';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Objeto con las imágenes para pasárselo fácil al componente
  const langImages = { en: imgen, es: imges, cat: imgcat };

  if (!selectedLanguage) {
    return <LanguageSelector onSelectLanguage={setSelectedLanguage} images={langImages} />;
  }

  return (
    <div className="main-container">
      <button onClick={() => setSelectedLanguage(null)} style={{ marginBottom: '15px' }}>
        ← Volver a selección de idioma
      </button>

      <HTMLFlipBook width={500} height={300} showCover={true}>
        <div className="page cover">
          <h2>GDD ({selectedLanguage.toUpperCase()})</h2>
        </div>
        <div className="page">
          <p>Contenido del GDD...</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default App;