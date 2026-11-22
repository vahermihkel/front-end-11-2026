import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartSumContextProvider } from './context/CartSumContextProvider.jsx'

// navigeerimine / URL vahetamine koos HTMLi muutmisega
// 1. npm i react-router-dom
// 2. import { BrowserRouter } from 'react-router-dom'
// 3. BrowserRouter ümber App komponendi
// 4. App.jsx failis import { Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <App />
      </CartSumContextProvider>
    </BrowserRouter>
  </StrictMode>
)

// 1. E 02.11 - Reacti algus
// 2. R 06.11 - useState
// 3. T 10.11 - alamkomponendid
// 4. R 13.11 - useContext
// 5. R 20.11 - API päringud
// 6. P 22.11 - tõlkimine, kaart
// 7. T 24.11 - CSS moodulid, useContext autentimine, serverisse üles
// 8. R 27.11 - Redux
// 9. T 01.12 - backend
//10. R 04.12 - frontendist backendi päringud (lisamine)
//11. K 09.12 - automaattestid
//12. R 11.12
//13. T 15.12
//14. R 18.12
//15. T 29.12 - Next.js
//16. T 05.01 - React Native
//17. R 08.01
// ---> lõpuprojekti kirjutamiseks (varupäevade jaoks)
//18. K 27.01
