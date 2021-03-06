/* eslint-disable @next/next/no-img-element */
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
//import Image from 'next/image'
interface LogoProps {
    
}

const Logo: React.FC<LogoProps> = () => {
    const {sidebarActive, toggleSidebar} = useStore().commonStore;

    return (
        <img
            loading="lazy"
            src="/images/icons/hoodie.svg"
            alt="icon"
            onClick={toggleSidebar}
            className={`w-10 sm:w-8 z-20 transition-all duration-200  rounded-full bg-violet-300  shadow-md sm:shadow-none transform -translate-x-20  sm:translate-x-0 p-2 sm:p-0 ${ sidebarActive && "!translate-x-0 !shadow-none"}`}
        />
    )
}

export default observer(Logo)
