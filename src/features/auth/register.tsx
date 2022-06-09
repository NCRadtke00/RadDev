import {auth,db} from "configs/firebase";

const register = async (name: string, email: string, password: string) => {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const photoURL = "https://i.pravatar.cc/"

    auth.currentUser?.updateProfile({
        displayName: name,
        photoURL,
    });
    await db.collection("users").doc(email).set({
        name,
        email,
        photoURL: photoURL,
    });
    if(!res.user?.emailVerified){
        auth.currentUser?.sendEmailVerification();
        throw new Error(
            "Verify your email to finish registration, check your inbox and spam folder."
        );
    };
    return {
        name: res.user?.displayName,
        email: res.user?.email,
        image: res.user?.photoURL,
    };
};
export default register