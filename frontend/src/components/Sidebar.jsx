import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag,  IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import styled from "styled-components";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };


  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const formStyle ={
    boxShadow: '20px, black',
    backgroundColor: '#4C0033',
    // borderRadius: 20,
    minHeight: 100,
   height:'120%',
    shadow: '0 0 10 0 #0000',
    marginTop:'-24px',
    positon:'relative',
    color:'#4C0033',
    }
    const stl={
     color: isHover?'#4C0033': 'white',
     textDecoration:'none',
    }

  
    
    // .fit {
    //   color:'black',
     
    // }
   
  return (
    <div style={formStyle} >
      <aside className="menu pl-2 has-dark" style={{
        // textShadow: "1px 1px 2px black, 0 0 5px orange, 0 0 5px black",
        color:'white'
      }} >
        {/* <p className="menu-label" style={{paddingTop:10, color:'white'}}>General</p> */}

        <ul className="menu-list">
          {/* <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to={"/request"}>
              <IoPricetag /> Request
            </NavLink>
          </li> */}
        </ul>


        {/* Admin/Super Admin Role Start here*/}
        {user && user.role === "admin" && (
          <div style={{
            // textShadow: "1px 1px 2px black, 0 0 5px orange, 0 0 5px black",
            color:'white'
          }}>
            <p className="menu-label" style={{color:'white'}}>Users</p>
            <ul className="menu-list" >
            
            <li>
            <NavLink to={"/adminDash"}style={stl} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >
              <IoPricetag /> Dashboard
            </NavLink>
          </li>

            <li>
            <NavLink to={"/users"}style={stl} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >
              <IoPricetag /> Users
            </NavLink>
          </li>

          <li>
              <NavLink to={"/requestForm"} style={stl} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                <IoPricetag /> Users List
              </NavLink>
            </li>

            <li>
            <NavLink to={"/ceoList1"} style={stl} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              <IoPricetag /> CEO Approved
            </NavLink>
          </li>

          <li>
          <NavLink to={"/managerApproved1"}style={stl}  onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <IoPricetag /> Manager Approved
          </NavLink>
        </li>

        <li>
        <NavLink to={"/pendingRequest"}style={stl}  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <IoPricetag /> Manager Pending
        </NavLink>
      </li>


            </ul>
            <p className="menu-label" style={{color:'white'}}>Admin</p>
            <ul className="menu-list">

             

            </ul>
          </div>
        )}
        {/* Admin/Super Admin  Role End here*/}


        {/* Accountant  Role Start here*/}
        {user && user.role === "accountant" && (
          <div>
            <p className="menu-label" style={{color:'white'}}>Accountant</p>
            <ul className="menu-list">
            {/*
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            */}

            <li>
            <NavLink to={"/accountantDashboard1"}style={stl} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} >
              <IoPerson />  Dashboard
            </NavLink>
          </li>
           
        

          <li>
          <NavLink to={"/adminList"} style={stl} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <IoPerson />  Admin Approval
          </NavLink>
        </li>

        <li>
        <NavLink to={"/ceoList"}style={stl} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
          <IoPerson />  CEO Approval
        </NavLink>
      </li>
       </ul>
      </div>
        )}
        {/* accountant Role end here*/}


        {/* ceo Role  Start here*/}
        {user && user.role === "ceo" && (
          <div>
            <p className="menu-label" style={{color:'white'}}>CEO</p>
            <ul className="menu-list" style={stl} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              <li>
                <NavLink to={"/dashboard1"}style={stl} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                  <IoPerson /> Dashboard
                </NavLink>
              </li>

              <li>
              <NavLink to={"/addReq"} style={stl} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                <IoPerson />Manager Request
              </NavLink>
            </li>
{/* 
            <li>
            <NavLink to={"/receiveFrom1"} style={stl} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              <IoPerson /> Manager
            </NavLink>
          </li> */}
{/* 
              <li>
              <NavLink to={"/dashboard1"} style={stl} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                <IoPerson /> View DashBoard
              </NavLink>
            </li> */}

            
            {/* <li>
              <NavLink to={"/receiveForm"} style={stl} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                <IoPerson /> UsersList
              </NavLink>
            </li> */}

            <li>
            <NavLink to={"/receiveFrom"} style={stl} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              <IoPerson /> View users
            </NavLink>
          </li>
            </ul>
          </div>
        )}
        {/* ceo Role end Here*/}



      



        {/* User Role  Start here*/}
        {user && user.role === "user" && (
          <div>
            <p className="menu-label" style={{color:'white'}}>Users</p>
            <ul className="menu-list">
             

            {/* <li>
            <NavLink to={"/postRequest"} style={stl} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              <IoPerson /> PostRequest
            </NavLink>
          </li> */}

         
    
    

           
             

             
            </ul>
          </div>
        )}
        {/* User Role End here*/}











{/* 
        <p className="menu-label" style={{color:'white'}}>Settings</p> */}
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white" style={{backgroundColor:'white'}}>
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
