import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag,  IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";
import DoughnutChart from "./DoughnutChart";
import Apex from "./Apex";
import AdminList from "../../pages/accountantDashboard/AdminList";
import CeoList from "../../pages/accountantDashboard/CeoList";
// import CeoApprovedList from "../components/accountantDashboard/CeoApprovedList";
import axios from "axios";

const Dashboard1 = () => {
  const[ceoApproveRequest, setCeoApproveRequest] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    getCeoApproveRequest();
  }, []);

  const getCeoApproveRequest = async () => {
    const response = await axios.get("http://localhost:5000/ceoApproveRequest");
    setCeoApproveRequest(response.data);
  };
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
      onClick={AdminList}
      className="button is-primary"
      type="submit"
      style={{bttn}}
      >Generate Report</button>
      
      </div>
    </div>
    <div style={{display:'flex', flexDirection:'row'}} >
      
       <div>
       <button
       onClick={AdminList}
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
       onClick={AdminList}
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
       <NavLink to={"/viewLog"}  style={{textDecoration:'none', textAlign:'center'}}>View Logs</NavLink>
     </button>
       </div>

       <div>
       <button
       onClick={CeoList}
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
       <NavLink to={"/simple"} style={{textDecoration:'none', textAlign:'right'}}>example</NavLink>
     </button>

    

       </div>

        <div>
       <button
       onClick={CeoList}
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
       <NavLink to={"/simple"} style={{textDecoration:'none', textAlign:'left'}}>Sample</NavLink>
       
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
    {/* tables */}
 
    </div>
    
  );
};

export default Dashboard1;
