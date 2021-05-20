import React from 'react';
import { Router, Link } from '@reach/router';
import AllProducts from './components/AllProducts';
import NewProduct from './components/NewProduct';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Products!</h1>
      <p><Link to="/products/new">Create New Product</Link></p>

      <p><Link to="/">Home</Link></p>
      <Router>
        <AllProducts path= "/" />
        <NewProduct path= "/products/new" />
        <Details path="/products/:id" />
        <Edit path="/products/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
