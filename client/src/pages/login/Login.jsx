import "./login.scss"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias corporis eaque quod beatae saepe excepturi soluta, omnis a? Enim quasi voluptas quam perspiciatis ea voluptatem neque officia tenetur voluptatum quos!</p>
          <span>Don't have an account ?</span>
          <Link to="/register">
          <button>Register</button></Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password" />
            <input type="submit" className="submit-button" value="login" onClick={handleLogin} onSubmit={handleLogin}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
