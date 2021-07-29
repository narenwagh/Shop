import React, { useEffect, useState } from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import { AddNewProductPage, ProductListPage } from '../pages';
import Header from '../header/header';
import SingleProductPage from '../pages/single-product-page';
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact>
          <ProductListPage />
        </Route>
        <Route path='/add-new-product'>
          <AddNewProductPage />
        </Route>
        <Route
          path='/single-product/:id'
          render={({ match }) => {
            const { id } = match.params;
            return <SingleProductPage id={id} />;
          }}
        />
      </Switch>
    </React.Fragment>
  );
};

export default App;
