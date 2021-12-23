import { Link, useHistory } from "react-router-dom";

const HomeNavbar = () => {
  const history = useHistory();

  return (
    <div className="f1-navbar">
      <img src="/assets/logo.png" className="f1-logo" alt="header" />
      <div className="f1-navbar-items">
        <div className="item active">Home</div>
        <div className="item">
          <Link to="/exam">Exam</Link>
        </div>
        <div className="item">Class</div>
        <div className="item">Subject</div>
        <div className="item">Blog</div>
        <div className="item">About Us</div>
        <div className="item">
          <div className="f1-button f1-login-button">
            <button onClick={() => history.push("/login")}>Login</button>
          </div>
        </div>

        <div className="item">
          <div className="f1-button f1-signup-button">
            <button className="">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
