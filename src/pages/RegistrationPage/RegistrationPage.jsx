import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUserRequest } from 'redux/auth/authOperations';
// import css from '../../styles/Contacts.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const user = {
      username: name.value,
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
          <input type="text" name="name" placeholder={'Input your name'} />
        </label>
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
        <button type="submit">Register</button>
        <NavLink to="/login">LogIn</NavLink>
      </form>
    </div>
  );
};

export default RegisterPage;
