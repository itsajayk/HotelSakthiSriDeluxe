// components/PageTransitionWrapper.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time on route change
    setLoading(true);
    window.scrollTo(0, 0); // Scroll to top

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // Change delay for preloader effect

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className={`page-transition ${loading ? 'loading' : 'loaded'}`}>
      {children}
    </div>
  );
};

export default PageTransitionWrapper;
