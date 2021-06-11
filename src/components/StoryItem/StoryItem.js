import { Avatar } from '@material-ui/core';
import '../../css/storyItem.css';

function StoryItem({image, profileSrc, title}){
    return(
        <div style={{backgroundImage:`url(${image})`}} className="storyItem">
            <Avatar className="story_avatar" src={profileSrc}/>
            <h6>{title}</h6>
        </div>
    )
}
export default StoryItem;