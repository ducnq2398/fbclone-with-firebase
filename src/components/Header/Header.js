import "../../css/header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <div className="header_input">
        <SearchIcon/>
          <input type="text" placeholder="Tìm kiếm trên Facebook"/>
        </div>
      </div>

      <div className="header_middle">
          <div className="header_option header_option--active">
              <HomeIcon fontSize="large"/>
          </div>
          <div className="header_option">
              <FlagIcon fontSize="large"/>
          </div>
          <div className="header_option">
              <SubscriptionsIcon fontSize="large"/>
          </div>
          <div className="header_option">
              <StorefrontIcon fontSize="large"/>
          </div>
          <div className="header_option">
              <SupervisedUserCircleIcon fontSize="large"/>
          </div>
      </div>

      <div className="header_right">
          <div className="header_infor">
            <Avatar src={user.photoURL}/>
            <h5>{user.displayName}</h5>
          </div>
          <IconButton>
              <AppsIcon/>
          </IconButton>
          <IconButton>
              <WhatsAppIcon/>
          </IconButton>
          <IconButton>
              <NotificationsIcon/>
          </IconButton>
          <IconButton>
              <ExpandMoreIcon/>
          </IconButton>
      </div>
    </div>
  );
}
export default Header;
