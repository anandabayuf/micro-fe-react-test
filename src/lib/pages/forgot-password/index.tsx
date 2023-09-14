import AuthPageWrapper from 'lib/components/auth/AuthPageWrapper';
import ForgotPasswordForm from 'lib/components/auth/forgot-password/ForgotPasswordForm';
import ForgotPasswordHead from 'lib/components/auth/forgot-password/ForgotPasswordHead';

const ForgotPasswordPage = () => {
  return (
    <AuthPageWrapper>
      <ForgotPasswordHead />
      <ForgotPasswordForm />
    </AuthPageWrapper>
  );
};

export default ForgotPasswordPage;
