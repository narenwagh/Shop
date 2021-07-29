import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { db } from '../../services/firebase';
import { singleProductLoaded } from '../../actions';

const SingleProductPage = ({ id, singleProduct, singleProductLoaded }) => {
  useEffect(() => {
    db.collection('Products')
      .doc(id)
      .get()
      .then((snapshot) => {
        const product = snapshot.data();
        singleProductLoaded(product.values);
      });
  }, []);
  if (singleProduct) {
    const { name, imageUrl, sizeWidth, sizeHeight, weight } = singleProduct;
    return (
      <div className='container'>
        <h2>{name}</h2>
        <img src={imageUrl} alt='prod' />
        <p>{sizeHeight}</p>
        <p>{sizeWidth}</p>
        <p>{weight}</p>
      </div>
    );
  }
  return <h1>woops</h1>;
};

const mapStateToProps = ({ reducer: { singleProduct } }) => {
  return {
    singleProduct,
  };
};
const mapDispatchToProps = {
  singleProductLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);
