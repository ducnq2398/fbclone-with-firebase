import "../../css/mystory.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

function MyStory({ image, title }) {
  const [{ user }, dispatch] = useStateValue();
  const [images, setImage] = useState("");
  const [open, setOpen] = useState(false);

  function checkImage(e) {
    if (e.target.files.length !== 0) {
      if (
        e.target.files[0].type !== "image/jpeg" &&
        e.target.files[0].type !== "image/png" &&
        e.target.files[0].type !== "image/jpg"
      ) {
        console.log("ko phai anh");
      }
    } else {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        setImage(reader.result);
      }.bind(this);
      setOpen(true);
    }
  }

  function createStory(e) {
    e.preventDefault();
    const number = Math.random();
    const data = {
      image: images,
      profileSrc: user.photoURL,
      username: user.displayName,
    };
    db.collection("stories").doc(number.toString(36)).set(data);
  }
  return (
    <div
      id="file-input"
      style={{ backgroundImage: `url(${image})` }}
      className="myStory"
    >
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        hidden={true}
        onChange={checkImage}
      />
      <label htmlFor="icon-button-file">
        <AddCircleOutlineIcon
          color="primary"
          fontSize="large"
          className="myStory_avatar"
        />
      </label>
      <h6>{title}</h6>
      <Dialog open={open}>
        <DialogTitle>Confirm your new profile picture</DialogTitle>
        <DialogContent>
          <img
            className="new-avt"
            src={images}
            alt=""
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={createStory}
          >
            Set new profile picture
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default MyStory;
