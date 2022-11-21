import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
const ViewRequestFromUsers = () => {
  const [ceoApproveUserRequest, setCeoApproveUserRequest] = useState([]);
  const [query, setQuery] = useState("");
  

  

  useEffect(() => {
    getCeoApproveUserRequest();
  }, []);

  const getCeoApproveUserRequest = async () => {
    const response = await axios.get("http://localhost:5000/ceoApproveUserRequest");
    setCeoApproveUserRequest(response.data);
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
        <th scope='col'>CEO</th>
       
      </tr>
    </MDBTableHead>
    <MDBTableBody>
          {ceoApproveUserRequest.filter(ceoApproveUserRequest=>
            ceoApproveUserRequest.staffName.toLowerCase().includes(query)
           
           
            )
            
            .map((ceoApproveUserRequest, index) => (
            <tr key={ceoApproveUserRequest.uid}>
              <td>{index + 1}</td>
              <td>{ceoApproveUserRequest.staffId}</td>
              <td>{ceoApproveUserRequest.staffName}</td>
              <td>{ceoApproveUserRequest.requestingFor}</td>
              <td>{ceoApproveUserRequest.department}</td>
              <td>{ceoApproveUserRequest.amountRequest}</td>
              <td>{ceoApproveUserRequest.amountRequestInWords}</td>
              <td>{ceoApproveUserRequest.purpose}</td>
              <td>{ceoApproveUserRequest.signature}</td>
              <td>{ceoApproveUserRequest.ceoApproval}</td>
             
              
             
            </tr>
          ))}
          </MDBTableBody>
          </MDBTable>
    </div>
  );
};

export default ViewRequestFromUsers;




