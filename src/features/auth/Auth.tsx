import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface AuthProps {
    children?: React.ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => {
    const {data: session, status} = useSession();
    const loading = status === "loading"
    const router = useRouter();

    useEffect(()=> {
        if(!session && !loading) {
            router.replace("/auth/login?next" + router.pathname);
        }
    }, [session, loading, router]);

    return (
        <>
            {children}
        </>
    )
}

export default Auth;
