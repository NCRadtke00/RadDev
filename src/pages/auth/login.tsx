import NotAuth from "features/auth/NotAuth";
import LoginPage from "features/user/LoginPage";
import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders, getSession } from "next-auth/react";

interface LoginProps {
  providers: Record<string, ClientSafeProvider>;
}

const Login: React.FC<LoginProps> = ({ providers }) => {
  return (
    <NotAuth>
      <LoginPage providers={providers} />
    </NotAuth>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const providers = await getProviders();

  return {
    props: { session, providers },
  };
};