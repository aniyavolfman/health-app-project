import css from './RegistrationPage.module.scss';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {  
  return (
    <div className={css.formContainer}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
