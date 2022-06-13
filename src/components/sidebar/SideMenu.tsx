import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";

import SidebarMenuItem from "./SideMenuItem";


interface SidebarMenuProps {}

const SidebarMenu: React.FC<SidebarMenuProps> = () => {
  const { cartTotalItems } = useStore().cartStore;
  const { totalBookmarks } = useStore().bookmarkStore;

  return (
    <div className="flex flex-col">
      <SidebarMenuItem Icon={HomeRoundedIcon} paths={["/"]} tooltip="Home" />
      <SidebarMenuItem
        Icon={ShoppingCartRoundedIcon}
        paths={["/cart"]}
        tooltip="Cart"
        count={cartTotalItems}
      />
      <SidebarMenuItem
        Icon={BookmarksRoundedIcon}
        paths={["/bookmarks"]}
        tooltip="Bookmarks"
        count={totalBookmarks}
      />
      <SidebarMenuItem
        Icon={WatchLaterRoundedIcon}
        paths={["/orders"]}
        tooltip="Orders"
      />
    </div>
  );
};

export default observer(SidebarMenu);
