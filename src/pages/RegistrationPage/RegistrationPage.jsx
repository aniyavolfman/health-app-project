import css from './RegistrationPage.module.scss';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectiIsLoadingUser } from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';

const RegisterPage = () => {  
  const isLoading = useSelector(selectiIsLoadingUser);
  return (
    <div className={css.formContainer}>
      {isLoading && <Loader />}
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
