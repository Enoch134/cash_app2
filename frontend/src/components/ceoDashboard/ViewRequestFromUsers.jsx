import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
const ViewRequestFromUsers = () => {
  const [adminRequest, setAdminRequest] = useState([]);
  const [query, setQuery] = useState("");
  

  

  useEffect(() => {
    getAdminRequest();
  }, []);

  const getAdminRequest = async () => {
    const response = await axios.get("http://localhost:5000/adminRequest");
    setAdminRequest(response.data);
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
    width:'80%',
    fontSize:'13px',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'20px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
   }


  

  return (
    <div>
    
      <h1 className="title">Request</h1>
      <h2 className="subtitle">List of Request</h2>
      <div>
      <input
      className="search"
      placeholder="Search..."
      onChange={(e) => setQuery(e.target.value)}
    />

      <NavLink to={"/addReq"} className="button is-primary mb-2" style={btn}>
        Manager Approved
      </NavLink>

      <NavLink to={"/ceoPending1"} className="button is-primary mb-2" style={btn}>
        CEO Pending
      </NavLink>


      <NavLink to={"/ceoApproval1"} className="button is-primary mb-2" style={btn}>
        CEO ApprovalList
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
        <th scope='col'>Approve</th>
       
      </tr>
    </MDBTableHead>
    <MDBTableBody>
          {adminRequest.filter(adminRequest=>
            adminRequest.staffName.toLowerCase().includes(query)
           
           
            )
            
            .map((adminRequest, index) => (
            <tr key={adminRequest.uid}>
              <td>{index + 1}</td>
              <td>{adminRequest.staffId}</td>
              <td>{adminRequest.staffName}</td>
              <td>{adminRequest.requestingFor}</td>
              <td>{adminRequest.department}</td>
              <td>{adminRequest.amountRequest}</td>
              <td>{adminRequest.amountRequestInWords}</td>
              <td>{adminRequest.purpose}</td>
              <td>{adminRequest.signature}</td>
              <td>{adminRequest.ceoApproval}</td>
             

              
             
            </tr>
          ))}
          </MDBTableBody>
          </MDBTable>
    </div>
  );
};

export default ViewRequestFromUsers;




