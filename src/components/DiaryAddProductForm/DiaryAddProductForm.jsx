import React from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export default function DiaryAddProductForm() {
  // const dispatch = useDispatch();
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
  const userMap = {
    product: setProduct,
    grams: setGrams,
  };
    const handleAddProducts = e => {
      const { name, value } = e.target;
      userMap[name](value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(
    //   productName({
    //     product,
    //     grams,
    //   })
    // );
    e.target.reset();
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label label="Product">
          <input
            type="text"
            name="product"
            placeholder="Enter product name"
            onChange={handleAddProducts}
          />
        </label>

        <label label="Grams">
          <input
            type="number"
            name="grams"
            placeholder="Grams"
            onChange={handleAddProducts}
          />
        </label>

        <button type="submit">+</button>
      </form>
    </div>
  );
}
