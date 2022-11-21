import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
const ViewManagerApproved = () => {
  const [managerApproveForUserRequest, setManagerApproveForUserRequest] = useState([]);
  const [query, setQuery] = useState("");
  

  

  useEffect(() => {
    getManagerApproveForUserRequest();
  }, []);

  const getManagerApproveForUserRequest = async () => {
    const response = await axios.get("http://localhost:5000/managerApproveForUserRequest");
    setManagerApproveForUserRequest(response.data);
  };

  
  
//  


  

  return (
    <div>
    
      <h1 className="title">Request</h1>
      <h2 className="subtitle">List of Request</h2>
      <input
         className="search"
         placeholder="Search..."
         onChange={(e) => setQuery(e.target.value)}
       />

       <Link to="/viewCeoApprovedList/add" className="button is-dark mb-2" style={{
        textDecoration:'none',
        textShadow: "1px 1px 2px black, 0 0 5px orange, 0 0 5px black",
        color:'white',
        textAlign:'center',
        marginLeft:'700px', 
      }}>
        Print
      </Link>
      <MDBTable responsive>

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
        <th scope='col'>Manager Approved</th>
        
      </tr>
    </MDBTableHead>
    <MDBTableBody>
          {managerApproveForUserRequest.filter(managerApproveForUserRequest=>
            managerApproveForUserRequest.staffName.toLowerCase().includes(query)
           
           
            )
            
            .map((managerApproveForUserRequest, index) => (
            <tr key={managerApproveForUserRequest.uid}>
              <td>{index + 1}</td>
              <td>{managerApproveForUserRequest.staffId}</td>
              <td>{managerApproveForUserRequest.staffName}</td>
              <td>{managerApproveForUserRequest.requestingFor}</td>
              <td>{managerApproveForUserRequest.department}</td>
              <td>{managerApproveForUserRequest.amountRequest}</td>
              <td>{managerApproveForUserRequest.amountRequestInWords}</td>
              <td>{managerApproveForUserRequest.purpose}</td>
              <td>{managerApproveForUserRequest.signature}</td>
              <td>{managerApproveForUserRequest.adminApproval}</td>
              <td>
              
              
              </td>

              
             
            </tr>
          ))}
          </MDBTableBody>
          </MDBTable>
    </div>
  );
};

export default ViewManagerApproved;




