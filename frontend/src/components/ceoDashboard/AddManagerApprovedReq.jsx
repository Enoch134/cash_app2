import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
const AddManagerApprovedReq = () => {
  const [managerApproveRequest, setManagerApproveRequest] = useState([]);
  const [query, setQuery] = useState("");
  

  

  useEffect(() => {
    getManagerApproveRequest();
  }, []);

  const getManagerApproveRequest = async () => {
    const response = await axios.get("http://localhost:5000/managerApproveRequest");
    setManagerApproveRequest(response.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/managerApproveRequest/?q=${query}`);
      setManagerApproveRequest(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  
  
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
        <th scope='col'>Approved</th>
        
      </tr>
    </MDBTableHead>
    <MDBTableBody>
          {managerApproveRequest.filter(managerApproveRequest=>
             managerApproveRequest.staffName.toLowerCase().includes(query)||
             managerApproveRequest.requestingFor.toLowerCase().includes(query) ||
             managerApproveRequest.department.toLowerCase().includes(query)||
             managerApproveRequest.amountRequest.toLowerCase().includes(query)||
             managerApproveRequest.purpose.toLowerCase().includes(query)
           
           
            )
            
            .map((managerApproveRequest, index) => (
            <tr key={managerApproveRequest.uid}>
              <td>{index + 1}</td>
              <td>{managerApproveRequest.staffId}</td>
              <td>{managerApproveRequest.staffName}</td>
              <td>{managerApproveRequest.requestingFor}</td>
              <td>{managerApproveRequest.department}</td>
              <td>{managerApproveRequest.amountRequest}</td>
              <td>{managerApproveRequest.amountRequestInWords}</td>
              <td>{managerApproveRequest.purpose}</td>
              <td>{managerApproveRequest.signature}</td>
              <td>{managerApproveRequest.adminApproval}</td>
              <td>
              
              
              </td>

              
             
            </tr>
          ))}
          </MDBTableBody>
          </MDBTable>
    </div>
  );
};

export default AddManagerApprovedReq;




