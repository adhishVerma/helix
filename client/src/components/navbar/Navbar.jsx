import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const {darkMode, toggle} = useContext(DarkModeContext); 
  const {currentUser} = useContext(AuthContext); 

  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
        <span>HelixSocial</span></Link>
      <HomeOutlinedIcon className="icon"/>
      {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} className="icon"/> : <DarkModeOutlinedIcon onClick={toggle} className="icon"/>}
      <GridViewOutlinedIcon className="icon"/>
      <div className="search">
        <SearchOutlinedIcon/>
        <input type="text" placeholder="search"/>
      </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
