import { useState, useEffect } from 'react';
import { useLocation, Routes } from 'react-router-dom';

export default function PageTransitionWrapper({ children }) {
  const realLocation = useLocation();
  const [displayLocation, setDisplayLocation] = useState(realLocation);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (realLocation.pathname !== displayLocation.pathname) {
      setLoading(true);
      window.scrollTo(0, 0);

      const timer = setTimeout(() => {
        setDisplayLocation(realLocation);
        setLoading(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [realLocation, displayLocation]);

  return (
    <div className={`page-transition ${loading ? 'loading' : 'loaded'}`}>
      <Routes location={displayLocation}>
        {children.props.children}
      </Routes>
    </div>
  );
}
