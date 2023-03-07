export const selectUserData = state => state.auth;
export const selectUserName = state => state.auth.username;
export const selectUserEmail = state => state.auth.email;
export const selectAccessToken = state => state.auth.accessToken;
export const selectRefreshToken = state => state.auth.refreshToken;
export const selectiIsLoading = state => state.auth.IsLoading;
export const selectError = state => state.auth.error;
export const selectSid = state => state.auth.sid;

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
