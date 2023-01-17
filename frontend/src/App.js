import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NewPlacePage from './pages/NewPlacePage';
import UserPlacesPage from './pages/UserPlacesPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<UsersPage />} />
        <Route path='/:userId/places' element={<UserPlacesPage />} />
        <Route path='/places/new' element={<NewPlacePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
