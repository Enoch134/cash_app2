import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag,  IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";
import UserRequests from "../../pages/userDashboard/UserRequests";
import ViewLog from "../../pages/userDashboard/ViewLog";

const PostRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  

  return (
    <div style={{display:'flex'}} >
       <div>
       <button
       onClick={UserRequests}
       className="button is-white"
       type="submit"
       style={{ 
        marginTop: 10, 
        width:'250%', 
        backgroundColor:'#EDEDED',
        marginLeft:'40px',
        marginTop:'70px',
        height:'80%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderLeft: '4px solid orange',
         }}
     >
       <NavLink to={"/userRequests"} style={{textDecoration:'none', textAlign:'right'}}>User Request</NavLink>
     </button>

    

       </div>

       <div>
       <button
       onClick={ViewLog}
       className="button is-white"
       type="submit"
       style={{ 
        marginTop: 10, 
        width:'100%',
        backgroundColor:'#EDEDED',
        marginLeft:'320px',
        marginTop:'70px', 
        height:'80%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderLeft: '4px solid green',
         }}
     >
       <NavLink to={"/viewLog"}  style={{textDecoration:'none', textAlign:'center'}}>View Logs</NavLink>
     </button>
       </div>
    </div>
    
  );
};

export default PostRequest;
