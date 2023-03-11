export const selectUserData = state => state.auth;
export const selectUserName = state => state.auth.username;
export const selectUserEmail = state => state.auth.email;
export const selectAccessToken = state => state.auth.accessToken;
export const selectRefreshToken = state => state.auth.refreshToken;
export const selectiIsLoadingUser = state => state.auth.IsLoading;
export const selectError = state => state.auth.error;
export const selectSid = state => state.auth.sid;
export const selectId = state => state.auth.id;

// додатково: якщо знадобляться при рендері сторінок:
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

