// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Books from './components/Booklist';
import NavBar from './components/NavBar';
import Categories from './components/Categories';

const App = () => (
  <Provider store={store}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
