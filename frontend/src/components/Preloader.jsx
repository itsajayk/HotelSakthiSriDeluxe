// src/components/Preloader.jsx
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      // give a tiny delay to let the fade‑out CSS run if you like
      setTimeout(() => setVisible(false), 200);
    };

    // If page is already loaded (e.g. hot‑reload), hide immediately
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div id="preloder">
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
