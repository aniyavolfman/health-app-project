import { useDispatch } from 'react-redux';

import { registerUserRequest } from '../../redux/auth/authOperations';
// import css from '../../styles/Contacts.module.css';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const { username, email, password } = event.target.elements;
    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    dispatch(registerUserRequest(user));
    console.log(user);
    event.target.reset();
  };
  return (
    <div>
        <form onSubmit={handelSubmit}>
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder={'Input your name'}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder={'Input your e-mail'}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder={'Input password'}
            />
          </label>
          <button type="submit">
            Register
          </button>
          <button type="submit">
            LogIn
          </button>
        </form>
    </div>
  );
};
