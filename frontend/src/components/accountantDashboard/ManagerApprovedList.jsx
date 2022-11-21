import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ReactPaginate from "react-paginate";

// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
const ManagerApprovedList = () => {
  const [managerApproveRequest, setManagerApproveRequest] = useState([]);
  const [query, setQuery] = useState("");
  

  
  const [pageCount, setpageCount] = useState(0);

  useEffect(() => {
    getManagerApproveRequest();
  }, []);

  const getManagerApproveRequest = async () => {
    const response = await axios.get("http://localhost:5000/managerApproveRequest");
    setManagerApproveRequest(response.data);
  };

  
  
  const tbl={
    width:'80%',
    fontSize:'13px',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'20px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
   } 


   const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    // const commentsFormServer = await fetchComments(currentPage);

    // setManagerApproveRequest(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };

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
            managerApproveRequest.staffName.toLowerCase().includes(query)
           
           
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
              <Link
              to={`/request/get/${managerApproveRequest.uid}`}
              className="button is-small is-info"
              style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '20px', }}
            >

              
              View
            </Link>
              
              
              </td>

              
             
            </tr>
          ))}
          </MDBTableBody>
          </MDBTable>

          <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        // onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default ManagerApprovedList;




