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
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email:"", password:"", error: null}}
                onSubmit={ async (values, {setErrors}) =>{
                    const {email, password} = values;
                    setAppLoading(true);
                    signIn("credentials",{
                        email, password, redirect: false,
                    }).then((res) => {
                        setErrors({ error:res?.error });
                    });
                    setAppLoading(false)
                }}
            >

            {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormError error={errors.error} />
            <TextInput name="email" label="Email" type="text" />
            <PasswordInput name="password" label="Password" />
            <Button
              className="w-full uppercase !transform-none mt-4"
              type="submit"
              variant="primary"
            >
              Log In
            </Button>
            <span
              onClick={() => router.push("/auth/password-reset")}
              className="text-center text-sm p-2 block mb-4 cursor-pointer"
            >
              Need help logging in?
            </span>
            <hr className="bg-gray-200 w-11/12 my-2 ml-[5%]" />
            <Button
              className="w-full uppercase !transform-none mt-4"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                router.push("/auth/register");
              }}
            >
              Sign Up
            </Button>
            <ProviderButtons providers={providers} />
          </Form>
        )}
            </Formik>
        </CenterLayout>
    )
}

export default LoginPage
