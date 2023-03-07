import React from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export default function DiaryAddProductForm() {
  //  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const [productId, setProductId] = useState('');
  const [weight, setWeight] = useState('');
  const userMap = {
    data: setData,
    productId: setProductId,
    weight: setWeight,
  };
  const handleAddProducts = e => {
    const { name, value } = e.target;
    userMap[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(
    //   productName({
    //     title,
    // weight,
    //     kcal,
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
            min="100"
            name="grams"
            placeholder="Grams"
            // value="100"
            onChange={handleAddProducts}
          />
        </label>

        <button type="submit">+</button>
      </form>
    </div>
  );
}

// day

// приклад тіла запиту  {
//   "date": "2020-12-31",
//   "productId": "5d51694802b2373622ff552c",
//   "weight": 100
// }

// export async function day(credentials) {
//   try {
//     const { data } = await axios.post('/day', credentials);
//     return data;
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// }

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );
