import "../../css/sidebar.css";
import SideBarRow from "../SidebarRow/SidebarRow";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import HistoryIcon from "@material-ui/icons/History";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../../StateProvider";

function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SideBarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SideBarRow Icon={SupervisorAccountIcon} title="Bạn bè" />
      <SideBarRow Icon={WhatsAppIcon} title="Messenger" />
      <SideBarRow Icon={HistoryIcon} title="Kỷ niệm" />
      <SideBarRow Icon={SubscriptionsIcon} title="Watch" />
      <SideBarRow Icon={ExpandMoreIcon} title="Xem thêm" />
    </div>
  );
}

export default Sidebar;
