import "../../css/feed.css";
import Story from "../Story/Story";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import { useEffect, useState } from "react";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  return (
    <div className="feed">
      <Story />
      <MessageSender />
      {posts.map((p) => (
        <Post
          key={p.data.id}
          profilePic={p.data.profilePic}
          message={p.data.message}
          timestamp={p.data.timestamp}
          username={p.data.username}
          image={p.data.image}
        />
      ))}
    </div>
  );
}
export default Feed;
