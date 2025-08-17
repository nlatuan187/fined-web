import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FinancialEducationWebsite from './components/FinancialEducationWebsite';
import TechcombankProjectDetail from './components/landing/TechcombankProjectDetail';
import ShinhanProjectDetail from './components/landing/ShinhanProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FinancialEducationWebsite />} />
        <Route path="projects/techcombank" element={<TechcombankProjectDetail />} />
        <Route path="projects/shinhan-finance" element={<ShinhanProjectDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
