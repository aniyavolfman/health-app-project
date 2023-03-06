import { useDispatch } from 'react-redux';
import { registerUserRequest } from 'redux/auth/authOperations';
// import css from '../../styles/Contacts.module.css';

export const Register = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(registerUserRequest(user));
    event.target.reset();
  };
  return (
    <div>
        <form onSubmit={handelSubmit}>
          <label>
            Username
            <Input
              type="text"
              name="name"
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
          <NavLink>
            LogIn
          </NavLink>
        </form>
    </div>
  );
};
