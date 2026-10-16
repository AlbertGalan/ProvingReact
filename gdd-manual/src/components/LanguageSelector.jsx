import React from 'react';

const LanguageSelector = ({ onSelectLanguage, images, embedded = false }) => {
  return (
    <div className={`main-container${embedded ? ' language-selector-embedded' : ''}`}>
      {!embedded && <h1 className="title">GDD MANUAL</h1>}
      <div className="location-circle" style={{ display: 'flex', gap: '20px', marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={() => onSelectLanguage('en')} className="circle-button">
          <img src={images.en} alt="English" style={{ width: '80px', height: '80px' }} />
          <span>English</span>
        </button>

        <button onClick={() => onSelectLanguage('es')} className="circle-button">
          <img src={images.es} alt="Español" style={{ width: '80px', height: '80px' }} />
          <span>Español</span>
        </button>

        <button onClick={() => onSelectLanguage('cat')} className="circle-button">
          <img src={images.cat} alt="Català" style={{ width: '80px', height: '80px' }} />
          <span>Català</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;