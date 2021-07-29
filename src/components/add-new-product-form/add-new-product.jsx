import React from 'react';
import { Field, reduxForm } from 'redux-form/dist/redux-form';
import './add-new-product.css';
let AddNewProductForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='imageUrl'>Image url</label>
        <Field name='imageUrl' component='input' type='text' />
      </div>
      <div>
        <label htmlFor='name'>Product Name</label>
        <Field name='name' component='input' type='text' />
      </div>
      <div>
        <label htmlFor='sizeWidth'>sizeWidth</label>
        <Field name='sizeWidth' component='input' type='number' />
      </div>
      <div>
        <label htmlFor='sizeHeight'>sizeHeight</label>
        <Field name='sizeHeight' component='input' type='number' />
      </div>
      <div>
        <label htmlFor='weight'>Weight</label>
        <Field name='weight' component='input' type='number' />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

AddNewProductForm = reduxForm({
  // a unique name for the form
  form: 'products',
})(AddNewProductForm);
export default AddNewProductForm;
