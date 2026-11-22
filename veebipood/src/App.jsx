import './App.css'
import { Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Kinkekaardid from './pages/Kinkekaardid'
import Seaded from './pages/Seaded'
import Kalkulaator from './pages/Kalkulaator'
import Esindused from './pages/Esindused'
import NotFound from './pages/NotFound'
import Tooted from './pages/Tooted'
import Ostukorv from './pages/Ostukorv'
import Menu from './components/Menu'
import Supplier from './pages/Supplier'


function App() {

  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/kinkekaardid" element={<Kinkekaardid />} />
        <Route path="/seaded" element={<Seaded />} />
        <Route path="/kalkulaator" element={<Kalkulaator />} />
        <Route path="/esindused" element={<Esindused />} />
        <Route path="/tooted" element={<Tooted />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/tarnija" element={<Supplier />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
