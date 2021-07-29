import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { itemsLoaded } from '../../actions';
import SingleItem from '../single-item';
import './item-list.css';
import { db } from '../../services/firebase';
import Spinner from '../spinner';

const ItemList = ({ items, loading, itemsLoaded }) => {
  useEffect(() => {
    db.collection('Products')
      .get()
      .then((data) => {
        console.log(data);
        const products = [];
        data.forEach((doc) => {
          const data = doc.data();
          const productId = doc.id;
          products.push({ productId, ...data });
        });
        itemsLoaded(products);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <section className='flex-container'>
      {items &&
        items.map((item) => {
          return <SingleItem item={item} key={item.productId} />;
        })}
    </section>
  );
};

const mapStateToProps = ({ reducer: { items, loading } }) => {
  return {
    items,
    loading,
  };
};

const mapDispatchToProps = {
  itemsLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
