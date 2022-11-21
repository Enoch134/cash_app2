import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
const UserViewLog = () => {
  const [userRequest, setUserRequest] = useState([]);
  const [query, setQuery] = useState("");
  

  

  useEffect(() => {
    getUserRequest();
  }, []);

  const getUserRequest = async () => {
    const response = await axios.get("http://localhost:5000/userRequest");
    setUserRequest(response.data);
  };

  
  
 const btn={
  textDecoration:'none',
  // padding:'12px',
  boderRadius:'7px',
  marginLeft:'40px',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  backgroundColor: '#4C0033',
 
 }
 const tbl={
  width:'60%',
  fontSize:'13px',
  marginLeft:'auto',
  marginRight:'auto',
 }


  

  return (
    <div>
    
      <h1 className="title">Request</h1>
      <h2 className="subtitle">List of Request</h2>
   
     <div >

     <input
     className="search"
     placeholder="Search..."
     onChange={(e) => setQuery(e.target.value)}
   />

      <NavLink to={"/managerPending1"} className="button is-primary mb-2" style={btn}>
        Manager Pending
      </NavLink>

      <NavLink to={"/ceoPending"} className="button is-primary mb-2" style={btn}>
        CEO Pending
      </NavLink>


      <NavLink to={"/ceoViewList"} className="button is-primary mb-2" style={btn}>
        CEO ApprovalList
      </NavLink>

      <NavLink to={"/viewManagerList"} className="button is-primary mb-2" style={btn} >
      Manager ApprovalList
    </NavLink>

     

    </div>
      
      <MDBTable responsive style={tbl}>

      <MDBTableHead>
      <tr>
        <th scope='col'>No</th>
        <th scope='col'>Staff ID</th>
        <th scope='col'>Staff Name</th>
        <th scope='col'>Requesting For</th>
        <th scope='col'>Department</th>
        <th scope='col'>Amount No</th>
        <th scope='col'>Amount In Words</th>
        <th scope='col'>Purpose</th>
        <th scope='col'>Signature</th>
        <th scope='col'>Manager</th>
        <th scope='col'>Ceo</th>
      
      </tr>
    </MDBTableHead>
    <MDBTableBody>
          {userRequest.filter(userRequest=>
            userRequest.staffName.toLowerCase().includes(query)
           
           
            )
            
            .map((userRequest, index) => (
            <tr key={userRequest.uid}>
              <td>{index + 1}</td>
              <td>{userRequest.staffId}</td>
              <td>{userRequest.staffName}</td>
              <td>{userRequest.requestingFor}</td>
              <td>{userRequest.department}</td>
              <td>{userRequest.amountRequest}</td>
              <td>{userRequest.amountRequestInWords}</td>
              <td>{userRequest.purpose}</td>
              <td>{userRequest.signature}</td>
              <td>{userRequest.adminApproval}</td>
              <td>{userRequest.ceoApproval}</td>
              
              <td>
              
              
              </td>

              
             
            </tr>
          ))}
          </MDBTableBody>
          </MDBTable>
    </div>
  );
};

export default UserViewLog;




