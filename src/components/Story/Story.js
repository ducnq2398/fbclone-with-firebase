import { useEffect, useState } from "react";
import "../../css/story.css";
import { useStateValue } from "../../StateProvider";
import StoryItem from "../StoryItem/StoryItem";
import db from "../../firebase";
import MyStory from "../MyStory/MyStory";

function Story() {
  const [{ user }, dispatch] = useStateValue();
  const [stories, setStories] = useState([]);
  
 
  useEffect(() => {
    db.collection("stories").onSnapshot((snapshot) => {
      setStories(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  return (
    <div className="story">
      <MyStory
        image={user.photoURL}
        title="Tạo tin"
      />
      {stories.map((story) => (
        <StoryItem
          key={story.id}
          image={story.data.image}
          profileSrc={story.data.profileSrc}
          title={story.data.title}
        />
      ))}
    </div>
  );
}
export default Story;
