import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommandations } from 'redux/dailyRate/dailyRateOperations';

export const DailyCaloriesForm = () => {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState('1');
  //const contacts = useSelector(selectContacts);
  //const dispatch = useDispatch();

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'height':
        setHeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'currentWeight':
        setCurrentWeight(value);
        break;
      case 'desiredWeight':
        setDesiredWeight(value);
        break;
      case 'bloodType':
        setBloodType(value);
        break;
      default:
        break;
    }
  };

  const userParams = {
    height,
    age,
    currentWeight,
    desiredWeight,
    bloodType,
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userParams);
    //dispatch(getRecommandations(userParams));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Calculate your daily calorie intake right now</h2>
        <label>
          Height *
          <input
            type="number"
            name="height"
            value={height}
            onChange={handleInputChange}
            autoFocus
            required
          />
        </label>
        <label>
          Age *
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Current weight *
          <input
            type="number"
            name="currentWeight"
            value={currentWeight}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Desired weight *
          <input
            type="number"
            name="desiredWeight"
            value={desiredWeight}
            onChange={handleInputChange}
            required
          />
        </label>
        <p>Blood type *</p>
        <label>
          <input
            type="radio"
            name="bloodType"
            value="1"
            onChange={handleInputChange}
            checked={bloodType === '1'}
            required
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="bloodType"
            value="2"
            onChange={handleInputChange}
            checked={bloodType === '2'}
            required
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="bloodType"
            value="3"
            onChange={handleInputChange}
            checked={bloodType === '3'}
            required
          />
          3
        </label>
        <label>
          <input
            type="radio"
            name="bloodType"
            value="4"
            onChange={handleInputChange}
            checked={bloodType === '4'}
            required
          />
          4
        </label>

        <button type="submit">Start losing weight</button>
      </form>
    </div>
  );
};
