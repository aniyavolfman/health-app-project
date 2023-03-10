import css from './LoginPage.module.scss';
import LoginForm from 'components/LoginForm/LoginForm';
import { Loader } from 'components/Loader/Loader';
import { selectiIsLoadingUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const LoginPage = () => {

  const isLoading= useSelector(selectiIsLoadingUser)
  return (
    <div className={css.formContainer}>
      {isLoading && <Loader />}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
