import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../../lib/dictionary';
import LoginSignupLayout from '@/app/common/layouts/LoginSignupLayout';
import SignupForm from '@/app/common/components/forms/signup-form/SignupForm';

const signUp = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { Navigation } = await getDictionary(lang);

  return (
    <LoginSignupLayout>
      <SignupForm />
    </LoginSignupLayout>
  );
};

export default signUp;
