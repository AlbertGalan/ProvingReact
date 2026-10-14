import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

// Importamos los círculos de los botones
import imgcat from './assets/catalan_circle.png';
import imgen from './assets/english_circle.png';
import imges from './assets/spanish_circle.png';

// Importamos estáticamente las 9 páginas de Inglés (en)
import en1 from './assets/en/CoinFlipTowerEN-1.png';
import en2 from './assets/en/CoinFlipTowerEN-2.png';
import en3 from './assets/en/CoinFlipTowerEN-3.png';
import en4 from './assets/en/CoinFlipTowerEN-4.png';
import en5 from './assets/en/CoinFlipTowerEN-5.png';
import en6 from './assets/en/CoinFlipTowerEN-6.png';
import en7 from './assets/en/CoinFlipTowerEN-7.png';
import en8 from './assets/en/CoinFlipTowerEN-8.png';
import en9 from './assets/en/CoinFlipTowerEN-9.png';

// Importamos estáticamente las 9 páginas de Español (es)
import es1 from './assets/es/CoinFlipTowerES-1.png';
import es2 from './assets/es/CoinFlipTowerES-2.png';
import es3 from './assets/es/CoinFlipTowerES-3.png';
import es4 from './assets/es/CoinFlipTowerES-4.png';
import es5 from './assets/es/CoinFlipTowerES-5.png';
import es6 from './assets/es/CoinFlipTowerES-6.png';
import es7 from './assets/es/CoinFlipTowerES-7.png';
import es8 from './assets/es/CoinFlipTowerES-8.png';
import es9 from './assets/es/CoinFlipTowerES-9.png';

// Importamos estáticamente las 9 páginas de Catalán (cat)
import cat1 from './assets/cat/CoinFlipTowerCAT-1.png';
import cat2 from './assets/cat/CoinFlipTowerCAT-2.png';
import cat3 from './assets/cat/CoinFlipTowerCAT-3.png';
import cat4 from './assets/cat/CoinFlipTowerCAT-4.png';
import cat5 from './assets/cat/CoinFlipTowerCAT-5.png';
import cat6 from './assets/cat/CoinFlipTowerCAT-6.png';
import cat7 from './assets/cat/CoinFlipTowerCAT-7.png';
import cat8 from './assets/cat/CoinFlipTowerCAT-8.png';
import cat9 from './assets/cat/CoinFlipTowerCAT-9.png';

// Diccionario que vincula el idioma seleccionado ('en', 'es', 'cat') con su array de imágenes
const imagesMap = {
  en: [en1, en2, en3, en4, en5, en6, en7, en8, en9],
  es: [es1, es2, es3, es4, es5, es6, es7, es8, es9],
  cat: [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9],
};

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Objeto con las imágenes para pasárselo al componente de selección
  const langImages = { en: imgen, es: imges, cat: imgcat };

  if (!selectedLanguage) {
    return <LanguageSelector onSelectLanguage={setSelectedLanguage} images={langImages} />;
  }

  // Obtenemos el array de imágenes correspondiente al idioma elegido ('en', 'es' o 'cat')
  const currentImages = imagesMap[selectedLanguage];

  return (
    <div className="main-container">
      <button onClick={() => setSelectedLanguage(null)} style={{ marginBottom: '15px', cursor: 'pointer', padding: '5px 10px' }}>
        ← Volver a selección de idioma
      </button>

      <HTMLFlipBook width={500} height={400} showCover={true}>
        {currentImages.map((imageSrc, index) => (
          <div className="page" key={index}>
            <img 
              src={imageSrc} 
              alt={`Página ${index + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default App;