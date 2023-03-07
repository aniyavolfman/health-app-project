import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginUserRequest } from 'redux/auth/authOperations';
// import css from '../../styles/Contacts.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(loginUserRequest(user));
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>
          Email
          <input type="email" name="email" placeholder={'Input your e-mail'} />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder={'Input password'}
          />
        </label>
        <button type="submit">Log In</button>
        <NavLink to="/register">Register</NavLink>
      </form>
    </div>
  );
};

export default Login;
