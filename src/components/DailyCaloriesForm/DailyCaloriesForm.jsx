import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  getAuthRecommendations,
  getRecommendations,
} from 'redux/dailyRate/dailyRateOperations';
import css from './DailyCaloriesForm.module.scss';
import { selectId, selectIsLoggedIn } from 'redux/auth/authSelectors';

const schema = Yup.object().shape({
  height: Yup.number('Значення має бути числом')
    .min(100, 'Мінімальне значення 100 см')
    .max(260, 'Максимальне значення 250 см')
    .required('Поле обовʼязкове'),
  age: Yup.number('Значення має бути числом')
    .min(18, 'Мінімальне значення 18')
    .max(100, 'Максимальне значення 100')
    .required('Поле обовʼязкове'),
  weight: Yup.number('Значення має бути числом')
    .min(20, 'Мінімальне значення 20 кг')
    .max(500, 'Максимальне значення 500 кг')
    .required('Поле обовʼязкове'),
  desiredWeight: Yup.number('Значення має бути числом')
    .min(20, 'Мінімальне значення 20 кг')
    .max(500, 'Максимальне значення 500 кг')
    .required('Поле обовʼязкове'),
  bloodType: Yup.number().required('Поле обовʼязкове'),
});

export const DailyCaloriesForm = ({ handleOpenModal }) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectId);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onSubmit = values => {
    values.bloodType = Number(values.bloodType);

    if (!isLoggedIn) {
      handleOpenModal();
      dispatch(getRecommendations(values));
    } else {
      dispatch(getAuthRecommendations({ ...values, userId }));
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>
        Calculate your daily calorie intake right now
      </h2>

      <Formik
        initialValues={{
          height: '',
          age: '',
          weight: '',
          desiredWeight: '',
          bloodType: 1,
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.inputsWrapper}>
              <div className={css.inputsLeft}>
                <div>
                  <Field
                    type="number"
                    name="height"
                    min="100"
                    max="250"
                    required
                    placeholder="Height *"
                    autoFocus
                    className={
                      errors.height && touched.height
                        ? css.inputError
                        : css.input
                    }
                  />
                  {errors.height && touched.height && (
                    <p className="error">{errors.height}</p>
                  )}
                </div>
                <div>
                  <Field
                    className={
                      errors.age && touched.age ? css.inputError : css.input
                    }
                    type="number"
                    name="age"
                    min="18"
                    max="100"
                    placeholder="Age *"
                    required
                  />
                  {errors.age && touched.age && (
                    <p className="error">{errors.age}</p>
                  )}
                </div>
                <div>
                  <Field
                    className={
                      errors.weight && touched.weight
                        ? css.inputError
                        : css.input
                    }
                    type="number"
                    name="weight"
                    min="20"
                    max="500"
                    placeholder="Current weight *"
                    required
                  />
                  {errors.weight && touched.weight && (
                    <p className="error">{errors.weight}</p>
                  )}
                </div>
              </div>
              <div className={css.inputsRight}>
                <div>
                  <Field
                    className={
                      errors.desiredWeight && touched.desiredWeight
                        ? css.inputError
                        : css.input
                    }
                    type="number"
                    name="desiredWeight"
                    min="20"
                    max="500"
                    placeholder="Desired weight *"
                    required
                  />
                  {errors.desiredWeight && touched.desiredWeight && (
                    <p className="error">{errors.desiredWeight}</p>
                  )}
                </div>
                <div>
                  <p className={css.radioTitle}>Blood type *</p>
                  <div className={css.radioWrapper}>
                    <label className={css.radioLabel}>
                      <Field
                        className={css.radioInput}
                        type="radio"
                        name="bloodType"
                        value="1"
                        required
                      />
                      1
                    </label>
                    <label className={css.radioLabel}>
                      <Field
                        className={css.radioInput}
                        type="radio"
                        name="bloodType"
                        value="2"
                        required
                      />
                      2
                    </label>
                    <label className={css.radioLabel}>
                      <Field
                        className={css.radioInput}
                        type="radio"
                        name="bloodType"
                        value="3"
                        required
                      />
                      3
                    </label>
                    <label className={css.radioLabel}>
                      <Field
                        className={css.radioInput}
                        type="radio"
                        name="bloodType"
                        value="4"
                        required
                      />
                      4
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className={css.startBtn} type="submit">
              Start losing weight
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
