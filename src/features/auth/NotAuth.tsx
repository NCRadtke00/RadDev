import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface NotAuthProps {}

const NotAuth: React.FC<NotAuthProps> = ({ children }) => {
    const {data: session, status} = useSession();
    const loading = status === "loading"
    const router = useRouter();

    useEffect(()=> {
        if(session && !loading) {
            if(typeof router.query.next === "string") {
                router.push(router.query.next);
            }else{
                router.push("/");
            }
        }
    }, [session, loading, router]);

    return (
        <>
            {children}
        </>
    )
}

export default NotAuth;
