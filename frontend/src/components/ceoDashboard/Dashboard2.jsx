import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag,  IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";
import DoughnutChart from "./DoughnutChart";
import Apex from "./Apex";
import CeoList1 from "../../pages/adminDashboard/CeoList1";
import Users from "../../pages/adminDashboard/Users";
import RequestForm from "../../pages/adminDashboard/RequestForm";

const Dashboard2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const bttn ={
    height:'20%'
  }
  const ape ={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  }

  return (
    <div>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <div>
      <p>Report</p>
      </div>
      <div>
      <button
      onClick={CeoList1}
      className="button is-primary"
      type="submit"
      style={{bttn}}
      >Generate Report</button>
      </div>
    </div>
    <div style={{display:'flex', flexDirection:'row'}} >
      
       <div>
       <button
       onClick={CeoList1}
       className="button is-white"
       type="submit"
       style={{ 
        marginTop: 10, 
        width:'160%', 
        backgroundColor:'#EDEDED',
        marginLeft:'10px',
        marginTop:'20px',
        height:'120%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderLeft: '4px solid orange',
         }}
     >
       <NavLink to={"/simple"}className="text-left" style={{textDecoration:'none'}}>User Request</NavLink>
     </button>

    

       </div>

       <div>
       <button
       onClick={Users}
       className="button is-white"
       type="submit"
       style={{ 
        marginTop: 10, 
        width:'100%',
        backgroundColor:'#EDEDED',
        marginLeft:'110px',
        marginTop:'20px', 
        height:'120%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderLeft: '4px solid green',
         }}
     >
       <NavLink to={"/viewLog"}  style={{textDecoration:'none', textAlign:'center'}}>Users</NavLink>
     </button>
       </div>

       <div>
       <button
       onClick={RequestForm}
       className="button is-blue"
       type="submit"
       style={{ 
        marginTop: 10, 
        width:'100%', 
        backgroundColor:'#EDEDED',
        marginLeft:'130px',
        marginTop:'20px',
        height:'120%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderLeft: '4px solid orange',
         }}
     >
       <NavLink to={"/simple"} style={{textDecoration:'none', textAlign:'right'}}>Form</NavLink>
     </button>

    

       </div>

        <div>
       <button
       onClick={RequestForm}
       className="button is-white"
       type="submit"
       style={{ 
        marginTop: 10, 
        width:'92%',
        backgroundColor:'#EDEDED',
        marginLeft:'150px',
        marginTop:'20px',
        height:'120%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderLeft: '4px solid orange',
         }}
     >
       <NavLink to={"/simple"} style={{textDecoration:'none', textAlign:'left'}}>Request</NavLink>
       
     </button>
    

    

       </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={ape}>
       <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginLeft:'20px' }}>
       <Apex/>
       </div>
       <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginRight:'40px'}}>
       <DoughnutChart/>
       </div>
    
    </div>
   
    
    </div>
    
  );
};

export default Dashboard2;
