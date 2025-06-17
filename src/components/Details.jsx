import React, { useState } from 'react';

const Details = ({ item, onBack }) => {
  const [imagemExpandida, setImagemExpandida] = useState(null);

  if (!item) return null;

  const abrirImagem = (src) => {
    setImagemExpandida(src);
  };

  const fecharImagem = () => {
    setImagemExpandida(null);
  };

  return (
    <div className="container">
      <button onClick={onBack} className="back-button">Voltar</button>

      <h2>{item.name}</h2>

      <div className="main-image">
        <img
          src={item.mainImage}
          alt={item.name}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '20px'
          }}
        />
      </div>

      <p>{item.summary}</p>

      <div className="horizontal-images">
        {item.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`related ${index}`}
            className="thumb imagem-relacionada"
            onClick={() => abrirImagem(img)}
          />
        ))}
      </div>

      {/* Modal de imagem expandida */}
      {imagemExpandida && (
        <div className="modal-img show" onClick={fecharImagem}>
          <img src={imagemExpandida} alt="expandida" />
        </div>
      )}
    </div>
  );
};

export default Details;
