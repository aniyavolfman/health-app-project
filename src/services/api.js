import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


//реєстрація користувача

// приклад тіла запиту {
//       email: 'userbob@example.com',
//       password: 'qwerty123',
//       username: 'Emma',
//     }

export async function register(credentials) {
  try {
      const { data } = await axios.post('/auth/register', credentials);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}


//логінізація користувача

// приклад тіла запиту {
//       email: 'userbob@example.com',
//       password: 'qwerty123',
//     }

export async function login(credentials) {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    token.set(data.accessToken);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

//розлогінізація користувача

export async function logout() {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    Notify.failure(error.message);
  }
}

// refresh користувача

// приклад тіла запиту {
//   "sid": "507f1f77bcf86cd799439011"
// }

export async function refresh(sid) {
  try {
    const { data } = await axios.post('/auth/refresh', sid);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}


// daily-rate

// приклад тіла запиту  {
//   "weight": 100,
//   "height": 170,
//   "age": 30,
//   "desiredWeight": 60,
//   "bloodType": 1
// }


export async function dailyRate(credentials) {
  try {
    const { data } = await axios.post('/daily-rate', credentials);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

// daily-rate-id

// приклад тіла запиту  {
//   "weight": 100,
//   "height": 170,
//   "age": 30,
//   "desiredWeight": 60,
//   "bloodType": 1
// }

export async function dailyRateId(credentials, id) {
  try {
    const { data } = await axios.post(`/daily-rate/${id}`, credentials);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}


// day

// приклад тіла запиту  {
//   "date": "2020-12-31",
//   "productId": "5d51694802b2373622ff552c",
//   "weight": 100
// }

export async function day(credentials) {
  try {
    const { data } = await axios.post('/day', credentials);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

// day delete

// приклад тіла запиту  {
//   "dayId": "507f1f77bcf86cd799439011",
//   "eatenProductId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
// }

export async function dayDelete(credentials) {
  try {
    const { data } = await axios.delete('/day', credentials);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}