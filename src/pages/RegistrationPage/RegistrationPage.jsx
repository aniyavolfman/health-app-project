import css from './RegistrationPage.module.css';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {  
  return (
    <div className={css.formSection}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
