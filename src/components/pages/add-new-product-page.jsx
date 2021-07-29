import React from 'react';
import AddNewProductForm from '../add-new-product-form';
import { db } from '../../services/firebase';
const AddNewProductPage = () => {
  const AddNewItem = (values) => {
    db.collection('Products').add({
      values,
    });
  };

  const Submit = (values) => {
    AddNewItem(values);
    console.log(values);
  };

  return <AddNewProductForm onSubmit={Submit} />;
};

export default AddNewProductPage;
