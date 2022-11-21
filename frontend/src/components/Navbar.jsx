import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
   const log={
    width:'10vw',
    // height:'95%',
    marginLeft:'10px',
    marginBottom:'10px'
   }

  return (
    <div  style={{backgroundColor:'black'}}>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
        style={{ boxShadow: '1px 2px 9px #000000', borderRadius: 0, height:'8%'}}
      >
        <div className="navbar-brand">
         
          <NavLink to="/dashboard" className="navbar-item">
          <img src="/assets/mclogo.jpg" alt="logo of the project" style={log}/>
          </NavLink>

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light" style={{
                  backgroundColor:'#4C0033',
                   height:'2%',
                    marginTop:'-20px',
                    color:'white',
                  }}>
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
