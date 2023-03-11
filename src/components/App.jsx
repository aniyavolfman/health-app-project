import { Routes, Route, Link } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectSid } from 'redux/auth/authSelectors';

const LazyLayout = lazy(() => import('./Layout/Layout'));
const LazyHomepage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyLoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const LazyRegisterPage = lazy(() =>import('../pages/RegistrationPage/RegistrationPage'));
const LazyDiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));
const LazyCalculatorPage = lazy(() =>import('../pages/CalculatorPage/CalculatorPage'));

function App() {
  const dispatch = useDispatch();
  const sid = useSelector(selectSid);

  useEffect(() => {
    //dispatch(refreshUserRequest(sid));
    dispatch(fetchCurrentUser());
  }, [dispatch, sid]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LazyLayout />}>
          <Route index element={<LazyHomepage />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<LazyRegisterPage />} />
            <Route path="/login" element={<LazyLoginPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/diary" element={<LazyDiaryPage />} />
            <Route path="/calculator" element={<LazyCalculatorPage />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                Вибачте, сторінка не знайдена.
                <span>
                  <Link to="/">Додому</Link>
                </span>
              </div>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
