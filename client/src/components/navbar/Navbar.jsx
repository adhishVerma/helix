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

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
        <span>HelixSocial</span></Link>
      <HomeOutlinedIcon/>
      <DarkModeOutlinedIcon/>
      <GridViewOutlinedIcon/>
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
          <img src="https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <span>John Doe</span>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
