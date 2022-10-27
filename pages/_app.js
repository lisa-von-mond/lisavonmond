import '../styles/globals.css'
import { useState, useEffect } from 'react';
import MoonPreloader from '../components/preloader';

function MyApp({ Component, pageProps }) {

  
const [loading, setLoading] = useState(false);

useEffect(() => {
  setTimeout(() => setLoading(true), 3000);
  }, []);


  return(
    <>
  {loading ? (
  <Component {...pageProps} />
  ) : (
    <MoonPreloader />
  )}
  </>)
}

export default MyApp