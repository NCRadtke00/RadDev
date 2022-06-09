import { auth } from "configs/firebase";

const login = async (email: string, password: string) => {
    const res = await auth.signInWithEmailAndPassword(email, password);
    if(!res.user?.emailVerified){
        auth.currentUser?.sendEmailVerification();
        throw new Error(
            "Your account is not verified, check your email for the link. Please check your spam folder before sending us an email."
        );
    }
    return{ 
        name: res.user?.displayName,
        email: res.user?.email,
        image: res.user?.photoURL,
    };
};
export default login;