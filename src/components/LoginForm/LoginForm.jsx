import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginUserRequest } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

const LoginForm = () => {
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
      <form className={css.formContainer} onSubmit={handelSubmit}>
        <label  className={css.labelForm} >
          Email
          <input 
          className={css.inputForm} 
          type="email" 
          name="email" 
          placeholder={'Input your e-mail'} 
          />
        </label>
        <label  className={css.labelForm} >
          Password
          <input 
            className={css.inputForm}
            type="password"
            name="password"
            placeholder={'Input password'}
          />
        </label>
        <button  className={css.btnSubmit} type="submit">Log In</button>
         <NavLink className={css.link} to="/register">Register</NavLink> 
      </form>

  );
};

export default LoginForm;
