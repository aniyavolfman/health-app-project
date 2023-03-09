import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUserRequest } from 'redux/auth/authOperations';
import css from './RegistrationForm.module.scss';

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
    <div className={css.formSection} >
      <h2 className={css.formTitle}>register</h2>
      <form className={css.form} onSubmit={handelSubmit}>
        
      <input 
          className={css.inputForm} 
          type="text" 
          name="name" 
          placeholder={'Name *'} 
          />

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
        <button className={css.btnSubmit} type="submit">Register</button>
        <NavLink className={css.link} to="/login">Log in</NavLink>
        </div>
      </form>
     </div>
  );
};

export default RegisterForm;
