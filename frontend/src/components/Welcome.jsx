import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag,  IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";
import PostRequest from "../components/userDashboard/PostRequest"
import Dashboard1 from "../components/accountantDashboard/Dashboard1"



// import Sample from './Sample'

const Welcome = () => {


  
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      
     

      {/* <h1 className="title" style={{
        paddingTop:15,
        textShadow: "1px 1px 2px black, 0 0 10px orange, 0 0 5px black",
        color:'black'
      }}>Dashboard</h1> */}
      <h2 className="subtitle" style={{
        textShadow: "1px 1px 2px black, 0 0 5px orange, 0 0 5px black",
        color:'black'
      }}>
        Welcome Back <strong style={{
          textShadow: "1px 1px 2px black, 0 0 5px orange, 0 0 5px black",
          color:'black'
        }}>{user && user.name}</strong>
      </h2>
      <div>
      {user && user.role === "users" && (
      <div>
       <PostRequest/>
      </div>
    )}

      {user && user.role === "accountant" && (
      <div>
       <Dashboard1/>
      </div>
    )}
      </div>
    </div>
 
    
  );
};

export default Welcome;
