import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../../lib/dictionary';
import LoginSignupLayout from '@/app/common/layouts/LoginSignupLayout';
import SignupForm from '@/app/common/components/forms/signup-form/SignupForm';

const signUp = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);

  return (
    <LoginSignupLayout>
      <SignupForm signup={page.signup}/>
    </LoginSignupLayout>
  );
};

export default signUp;
