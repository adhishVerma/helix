import "./post.scss";
import FavouriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavouriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlineIcon from "@mui/icons-material/ShareOutlined";
import MoreHoizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {

  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="user-photo" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHoizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavouriteOutlinedIcon/> : <FavouriteBorderOutlinedIcon/>}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon/>
            14 comments
          </div>
          <div className="item">
            <ShareOutlineIcon/>
            Share
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;
