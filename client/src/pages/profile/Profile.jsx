import "./profile.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <img
          className="profilePic"
          src="https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="demographic">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>john.dev</span>
              </div>
            </div>
          </div>
          <div className="right">
            <button>Follow</button>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
