import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { omit } from 'lodash';

const $publicHost = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const token = {
  set: (token, token_type) => {
    $privateHost.defaults.headers.common.Authorization = `${token_type} ${token}`;
  },
  unSet: () => {
    $privateHost.defaults.headers.common.Authorization = '';
  },
};

//реєстрація користувача

export async function register(userData) {
  const { data } = await $publicHost.post(`/auth/register`, userData);
  return data;
}

//логінізація користувача

export async function login(userData) {
  const { data } = await $publicHost.post(`/auth/login`, userData);
  return data;
}

//розлогінізація користувача

export async function logOut() {
  const { data } = await $privateHost.post(`/auth/logout`);
  return data;
}

// refresh користувача

export async function refresh(sid, refreshToken) {
  const { data } = await $privateHost({
    data: { sid },
    headers: { Authorization: refreshToken },
    method: 'post',
    url: `/auth/refresh`,
  });
  return data;
}

// getUser

export async function getUser() {
  const { data } = await $privateHost.get(`/user`);
  return data;
}

// daily-rate

export async function dailyRate(credentials) {
  try {
    const { data } = await $publicHost.post('/daily-rate', credentials);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// daily-rate-id

export async function dailyRateId(credentials) {
  
  try {
    const { data } = await $privateHost.post(
      `/daily-rate/${credentials.userId}`,
      omit(credentials, ['userId'])
    );

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

//Product-search
export async function productSearch(search) {
  try {
    const { data } = await $privateHost.get(`/product?search=${search}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// day

export async function day(credentials) {
  try {
    const { data } = await $privateHost.post('/day', credentials);
    return data;
  } catch (error) {
    console.log(error.message);
    alert('перейдіть')
  }
}

// day delete


export async function dayDelete(dayId) {
  try {
    const { data } = await $privateHost.delete('/day', { data: dayId });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function dayInfo(credentials) {
  try {
    const { data } = await $privateHost.post('/day/info', credentials);
    return data;
  } catch (error) {
    Notify.warning('Заповніть, будь ласка, форму на сторінці підрахунку!');
  }
}
