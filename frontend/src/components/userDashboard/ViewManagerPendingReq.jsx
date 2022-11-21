import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
const ViewManagerPendingReq = () => {
  const [managerPendingByIdRequest, setManagerPendingByIdRequest] = useState([]);
  const [query, setQuery] = useState("");
  

  

  useEffect(() => {
    getManagerPendingByIdRequest();
  }, []);

  const getManagerPendingByIdRequest = async () => {
    const response = await axios.get("http://localhost:5000/managerPendingByIdRequest");
    setManagerPendingByIdRequest(response.data);
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
        <th scope='col'>Manager Pending</th>
       
      </tr>
    </MDBTableHead>
    <MDBTableBody>
          {managerPendingByIdRequest.filter(managerPendingByIdRequest=>
            managerPendingByIdRequest.staffName.toLowerCase().includes(query)
           
           
            )
            
            .map((managerPendingByIdRequest, index) => (
            <tr key={managerPendingByIdRequest.uid}>
              <td>{index + 1}</td>
              <td>{managerPendingByIdRequest.staffId}</td>
              <td>{managerPendingByIdRequest.staffName}</td>
              <td>{managerPendingByIdRequest.requestingFor}</td>
              <td>{managerPendingByIdRequest.department}</td>
              <td>{managerPendingByIdRequest.amountRequest}</td>
              <td>{managerPendingByIdRequest.amountRequestInWords}</td>
              <td>{managerPendingByIdRequest.purpose}</td>
              <td>{managerPendingByIdRequest.signature}</td>
              <td>{managerPendingByIdRequest.adminApproval}</td>
              <td>
              
              
              </td>

              
             
            </tr>
          ))}
          </MDBTableBody>
          </MDBTable>
    </div>
  );
};

export default ViewManagerPendingReq;




