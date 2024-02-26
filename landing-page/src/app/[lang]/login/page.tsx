import { Locale } from '@/i18n.config';
import LoginForm from '@/app/common/components/forms/login-form/LoginForm';
import { getDictionary } from '../../../../lib/dictionary';
import LoginSignupLayout from '@/app/common/layouts/LoginSignupLayout';

const login = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { Navigation } = await getDictionary(lang);

  return (
    <LoginSignupLayout>
      <LoginForm />
    </LoginSignupLayout>
  );
};

export default login;
