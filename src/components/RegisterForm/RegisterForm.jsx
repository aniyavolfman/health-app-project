import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUserRequest } from 'redux/auth/authOperations';
import css from './RegistrationForm.module.css';

const RegisterForm = () => {
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
      <form className={css.formContainer} onSubmit={handelSubmit}>
        <label className={css.labelForm}>
          Username
          <input className={css.inputForm} type="text" name="name" placeholder={'Input your name'} />
        </label>
        <label className={css.labelForm}>
          Email
          <input className={css.inputForm} type="email" name="email" placeholder={'Input your e-mail'} />
        </label>
        <label className={css.labelForm}>
          Password
          <input
          className={css.inputForm}
            type="password"
            name="password"
            placeholder={'Input password'}
          />
        </label>
        <button className={css.btnSubmit} type="submit">Register</button>
        <NavLink className={css.link} to="/login">LogIn</NavLink>
      </form>
  );
};

export default RegisterForm;
