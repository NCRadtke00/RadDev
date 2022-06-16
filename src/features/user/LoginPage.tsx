import { ClientSafeProvider, signIn } from 'next-auth/react';
import { useStore } from 'stores/store';
import * as Yup from 'yup';
import Button from "components/buttons/Button";
import FormError from "components/form/FormError";
import PasswordInput from "components/form/PasswordInput";
import ProviderButtons from "components/form/ProviderButtons";
import TextInput from "components/form/TextInput";
import CenterLayout from "components/layouts/Center";
import { Form, Formik } from "formik";
import { useRouter } from "next/router"


interface LoginPageProps {
    providers: Record<string, ClientSafeProvider>;
  }

const LoginPage: React.FC<LoginPageProps> = ({ providers }) => {
    const { setAppLoading } = useStore().commonStore;
    const router = useRouter();
    const validationSchema = Yup.object({
        email: Yup.string()
          .required("Your E-mail is required")
          .email("Your E-mail is not in the correct format, should be something@like.this"),
        password: Yup.string().required("A Password is required"),
    });

    return (
        <CenterLayout>
            <h4>log in</h4>
            <Form onSubmit={handleSubmit} autoComplete="off" >

            </Form>
        </CenterLayout>
    )
}

export default LoginPage
