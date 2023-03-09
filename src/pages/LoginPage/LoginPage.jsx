import css from './LoginPage.module.scss';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={css.formContainer}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
