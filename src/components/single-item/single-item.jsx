import React from 'react';
import { Fragment } from 'react';
import './single-item.css';
import { withRouter } from 'react-router-dom';
const SingleItem = ({ item, history }) => {
  const {
    productId,
    values: { name, imageUrl, sizeHeight, sizeWidth },
  } = item;

  const onItemSelected = (productId) => {
    history.push(`/single-product/${productId}`);
  };
  return (
    <div className='single-item'>
      <img
        src={imageUrl}
        width='150'
        height='150'
        className='item-img'
        alt=''
      />
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-text'>{sizeWidth}</p>
        <p className='card-text'>{sizeHeight}</p>
        <button
          onClick={() => onItemSelected(productId)}
          className='btn btn-primary'
        >
          More
        </button>
      </div>
    </div>
  );
};

export default withRouter(SingleItem);
