import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>
          <Link to='/'>Home </Link>
          <Link to='/otherpage'>Other page</Link>
        </h1>
        <Routes>
          <Route exact path='/' element={<Fib />} />
          <Route exact path='/otherpage' element={<OtherPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
