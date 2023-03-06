export const selectUserData = state => state.auth.authData;
export const selectUserName = state => state.auth.authData.name;
export const selectUserEmail = state => state.auth.authData.email;
export const selectToken = state => state.auth.token;
export const selectiIsLoading = state => state.auth.IsLoading;
export const selectError = state => state.auth.error;

// додатково: якщо знадобляться при рендері сторінок:
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;


// export const selectUser = state => state.user.user;

// HOOKS: _______________________________↓

// import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from 'redux/user/selectors';

// export const useAuth = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const user = useSelector(selectUser);

//   return {
//     isLoggedIn,
//     isRefreshing,
//     user,
//   };
// };

// Auth

