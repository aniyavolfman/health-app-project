import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginUserRequest } from 'redux/auth/authOperations';
import css from './LoginForm.module.scss';

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
    <div className={css.formSection} >
        <h2 className={css.formTitle}>log in</h2>
        <form className={css.form} onSubmit={handelSubmit}>
        <input 
          className={css.inputForm} 
          type="email" 
          name="email" 
          placeholder={'Email *'} 
          />

        <input 
            className={css.inputForm}
            type="password"
            name="password"
            placeholder={'Password *'}
          />
          <div className={css.btnBox}>
          <button  className={css.btnSubmit} type="submit">Log in</button>
              <NavLink className={css.link} to="/register">Register</NavLink>  
          </div>          
          </form>
    </div>
  );
};

export default LoginForm;
