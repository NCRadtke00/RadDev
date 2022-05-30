import {observer} from 'mobx-react-lite';
import dynamic from "next/dynamic";
import {useStore} from "../../stores/store"


interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
    const {sidebarActive} = useStore().commonStore;

    return (
        <div >
            side barrr
        </div>
    )
}

export default observer(Sidebar);
