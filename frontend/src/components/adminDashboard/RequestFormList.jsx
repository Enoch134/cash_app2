import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from "react";
import { Link, NavLink} from "react-router-dom";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ReactPaginate from "react-paginate";

// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
const RequestFormList = () => {
  const [requested, setRequested] = useState([]);
  const [query, setQuery] = useState("");
  // const [pageCount, setpageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const requestedPerPage = 5;
  

  const pagesVisited = pageNumber * requestedPerPage;

  useEffect(() => {
   
    getRequested();
  }, []);

  const getRequested = async () => {
    const response = await axios.get("http://localhost:5000/requested");
    
    // const data = await response.json();
    // const total = response.headers.get("x-total-count");
    // setpageCount(Math.ceil(total / limit));
    setRequested(response.data);
  };

  // const fetchRequest = async (currentPage) => {
  //   const res = await fetch(
  //     `http://localhost:5000/request?_page=${currentPage}&_limit=${limit}`
      
  //   );
  //   const data = await res.json();
  //   return data;
  // };
  
  // const handlePageClick = async (data) => {
  //   console.log(data.selected);

  //   let currentPage = data.selected + 1;

  //   const commentsFormServer = await fetchRequest(currentPage);

  //   setRequest(commentsFormServer);
  //   // scroll to the top
  //   //window.scrollTo(0, 0)
  // };
  
  const btn={
    textDecoration:'none',
    padding:'10px',
    borderRadius:'10px',
    marginLeft:'120px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    backgroundColor: '#4C0033',
    color:'white',
   
   }
   const tbl={
    width:'90%',
    fontSize:'13px',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'20px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
   }


   const pageCount = Math.ceil(requested.length / requestedPerPage);

   const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
    
      <h1 className="title">Request</h1>
      <h2 className="subtitle">List of Request</h2>
     

      <div>


        <NavLink to={"/managerApproved1"} style={btn}>
          Approved Request
        </NavLink>

        <NavLink to={"/managerPendingRequest"} style={btn}>
          Manager Pending
        </NavLink>


        <NavLink to={"/ceoList1"} style={btn}>
          CEO ApprovedList
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
        <th scope='col'>Manager Approved</th>
       
      </tr>
    </MDBTableHead>
    <MDBTableBody>
          {requested.filter(request=>
            request.staffName.toLowerCase().includes(query)
           
           
            )
            
            .slice(pagesVisited, pagesVisited + requestedPerPage)
            .map((requested, index) => (
            <tr key={requested.uid}>
              <td>{index + 1}</td>
              <td>{requested.staffId}</td>
              <td>{requested.staffName}</td>
              <td>{requested.requestingFor}</td>
              <td>{requested.department}</td>
              <td>{requested.amountRequest}</td>
              <td>{requested.amountRequestInWords}</td>
              <td>{requested.purpose}</td>
              <td>{requested.signature}</td>
              <td>{requested.adminApproval}</td>
              <td>
              <Link
              to={`/requestForm/edit/${requested.uid}`}
              className="button is-small is-info"
              style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '20px', }}
            >

              
              Take Action
            </Link>
              </td>
            

             
            </tr>
          ))}
          </MDBTableBody>
          </MDBTable>

          {/* <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
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
      /> */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns justify-content-center pagination"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn "}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        breakLinkClassName={"page-link"}
        // containerClassName={"pagination "}
      />
    </div>
  );
};

export default RequestFormList;




