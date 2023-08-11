import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Template from './templates/Template';
import Index from './pages/index';
import ListBarang from './pages/listbarang/ListBarang';
import TambahBarang from './pages/listbarang/TambahBarang';
import UbahBarang from './pages/listbarang/UbahBarang';

export default function App() {
    return (
      <>
      <Routes>
        <Route path='/' element={<Template/>}>
          <Route path='/' element={<Index/>}/>
          <Route path='/listbarang' element={<ListBarang/>}/>
          <Route path='/tambahbarang' element={<TambahBarang/>}/>
          <Route path='/ubahbarang' element={<UbahBarang/>}/>
        </Route>
      </Routes>
      </>
    )
}