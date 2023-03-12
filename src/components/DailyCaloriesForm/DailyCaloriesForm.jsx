import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { schema } from './schema';

import {
  getAuthRecommendations,
  getRecommendations,
} from 'redux/dailyRate/dailyRateOperations';
import css from './DailyCaloriesForm.module.scss';
import { selectId, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';

export const DailyCaloriesForm = ({ handleOpenModal }) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectId);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  async function onSubmit(values, { resetForm }) {
    values.bloodType = Number(values.bloodType);

    if (!isLoggedIn) {
      handleOpenModal();
      dispatch(getRecommendations(values));
    } else {
      dispatch(getAuthRecommendations({ ...values, userId }));
      setTimeout(()=>navigate('/diary', { replace: true }), 500);
    }
    resetForm();
  }


  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Розрахувати денну норму калорій</h2>

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
          <Form className={css.form} noValidate>
            <div className={css.inputsWrapper}>
              <div className={css.inputsLeft}>
                <div>
                  <Field
                    type="text"
                    name="height"
                    min="120"
                    max="220"
                    required
                    placeholder="Зріст *"
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
                    type="text"
                    name="age"
                    min="18"
                    max="100"
                    placeholder="Вік *"
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
                    type="text"
                    name="weight"
                    min="40"
                    max="200"
                    placeholder="Вага *"
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
                    type="text"
                    name="desiredWeight"
                    min="40"
                    max="200"
                    placeholder="Бажана вага *"
                    required
                  />
                  {errors.desiredWeight && touched.desiredWeight && (
                    <p className="error">{errors.desiredWeight}</p>
                  )}
                </div>
                <div>
                  <p className={css.radioTitle}>Група крові *</p>
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
                  {errors.bloodType && touched.bloodType && (
                    <p className="error">{errors.bloodType}</p>
                  )}
                </div>
              </div>
            </div>

            <button className={css.startBtn} type="submit">
              Розпочати схуднення
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
