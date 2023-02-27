import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Helix Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            officiis blanditiis placeat consequuntur, expedita minima?
          </p>
          <span>Do you have an account ?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="submit" className="submit-button" value="register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
