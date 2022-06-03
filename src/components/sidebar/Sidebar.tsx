import {observer} from 'mobx-react-lite';
import dynamic from "next/dynamic";
import {useStore} from "../../stores/store"
import Logo from "./Logo"

const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });


interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
    const {sidebarActive} = useStore().commonStore;

    return (
        <div  className={`wr-20 sm:w-24 h-screen fixed z-50 top-0 right-0 shadow-lg bg-white flex flex-col justify-between items-center py-6 sm:py-12 transition-all duration-200 transform translate-x-20 sm:translate-x-[0px] ${sidebarActive && "translate-x-0"}`}>
            <Logo />
            <ReactTooltip
                place="left"
                id="sidebarToolTip"
                backgroundColor="#201a2ced"
                effect="solid"
                className="!rounded-lg whitespace-nowrap" />
        </div>
    )
}

export default observer(Sidebar);
