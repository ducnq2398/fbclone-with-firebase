import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import "../../css/messageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PublicIcon from "@material-ui/icons/Public";
import { useState } from "react";
import { useStateValue } from "../../StateProvider";

function MessegeSender() {
  const [open, setOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            onClick={() => setOpen(true)}
            className="messageSender_input"
            placeholder="Đức ơi, bạn đang nghĩ gì thế?"
          />
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h6>Video trực tiếp</h6>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h6>Ảnh/Video</h6>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h6>Cảm xúc/Hoạt động</h6>
        </div>
      </div>
      <Dialog onClose aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          style={{ textAlign: "center" }}
          id="customized-dialog-title"
        >
          <label>Tạo bài viết</label>
          <IconButton style={{ float: "right" }} onClick={() => setOpen(!open)}>
            <HighlightOffIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <div style={{ display: "flex" }}>
            <Avatar src={user.photoURL} />
            <div style={{padding: '5px 5px '}}>
              <h5>{user.displayName}</h5>
              <div>
                <PublicIcon fontSize="small"/>
                <label>Cong khai</label>
              </div>
            </div>
          </div>
          <div>
            <TextField
              variant="outlined"
              placeholder="Đức ơi, bạn đang nghĩ gì thế?"
              fullWidth
            />
          </div>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default MessegeSender;
