import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {useSession} from "next-auth/react";
import {useRouter} from "next/router"
import {useStore} from "../../stores/store"
import SideMenuItem from "./SideMenuItem";


interface SideUserProps {}

const SideUser: React.FC<SideUserProps> = () => {
    const { data: session } = useSession();
    const { toggleSidebar } = useStore().commonStore;
    const router = useRouter();
    return (
        <>
         {session?.user ? (
             <img 
                src={session.user.image || "public/default.jpg"}
                onClick={() => {
                    router.push("/auth/profile");
                    toggleSidebar();
                }}
                alt="avatar"
                data-tip="Account"
                data-for="sidebarToolTip"
                className="w-10 h-10 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 object-contain cursor-pointer"
            />
         ) : (
             <SideMenuItem 
                Icon={ AccountCircleRoundedIcon }
                paths={["/auth/login", "/auth/register", "/auth/password-reset"]}
                tooltip="Login / Register"
             />
         )}   
        </>
    )
}

export default SideUser
