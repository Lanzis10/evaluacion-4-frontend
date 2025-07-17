import React, { useEffect, useState } from 'react';

export default function Quote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Hacemos la petición a la API de Advice Slip
    fetch('https://api.adviceslip.com/advice')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar la frase");
        }
        return res.json();
      })
      .then((data) => {
        // En esta API, la frase está dentro de data.slip.advice
        setQuote(data.slip.advice);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote">
      <h3>Frase motivacional:</h3>
      {loading && <p>Cargando...</p>}
      {error && <p>No se pudo cargar la frase 😥</p>}
      {!loading && !error && <p>"{quote}"</p>}
    </div>
  );
}
