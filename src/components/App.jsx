import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
// import { useDispatch } from 'react-redux';
// import { getCurrentUserRequest } from 'redux/authOperations';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

const LazyLayout = lazy(() => import('./Layout/Layout'));
const LazyHomepage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyLoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const LazyRegisterPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LazyDiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));
const LazyCalculatorPage = lazy(() =>
  import('../pages/CalculatorPage/CalculatorPage')
);

function App() {
  // const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getCurrentUserRequest());
  //   }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
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
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
