import { Avatar } from '@material-ui/core';
import '../../css/sidebarrow.css'

function SideBarRow({src, Icon, title}){
    return(
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h6>{title}</h6>
        </div>
    )
}
export default SideBarRow;