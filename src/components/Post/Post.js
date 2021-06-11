import { Avatar } from '@material-ui/core'
import React from 'react';
import '../../css/post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar"/>
                <div className="post_topInfor">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
                    <p>Thích</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon/>
                    <p>Bình luận</p>
                </div>
                <div className="post_option">
                    <NearMeIcon/>
                    <p>Chia sẻ</p>
                </div>
                <div className="post_option">
                    <Avatar/>
                    <ExpandMoreIcon/>
                </div>
            </div>
        </div>
    )
}
export default Post;
