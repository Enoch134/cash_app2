import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Time from 'react-time';
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";



const ViewById = () => {
  const[ceoApproveRequest, setCeoApproveRequest]=useState("")
 
  const [staffId, setStaffId] = useState("");
    const [staffName, setStaffName] = useState("");
    const [requestingFor, setRequestingFor] = useState("");
    const [department, setDepartment] = useState("");
    const [amountRequest, setAmountRequest] = useState("");
    const [amountRequestInWords, setAmountRequestInWords] = useState("");
    const [purpose, setPurpose] = useState("");
    const [signature, setSignature] = useState("");
    const [ceoApproval, setCeoApproval] = useState("");
  const [msg, setMsg] = useState("");
  // const navigate = useNavigate();
  const { id } = useParams();
  // const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const getRequestById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/request/${id}`);
        setStaffId(response.data.staffId);
        setStaffName(response.data.staffName);
        setRequestingFor(response.data.requestingFor);
        setDepartment(response.data.department);
        setAmountRequest(response.data.amountRequest);
        setAmountRequestInWords(response.data.amountRequestInWords);
        setPurpose(response.data.purpose);
        setSignature(response.data.signature);
        setCeoApproval(response.data.ceoApproval);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRequestById();
  }, [id]);
 
  let now = new Date()
  let wasDate = new Date("Thu Jul 18 2013 15:48:59 GMT+0400")
  const space ={
    marginLeft:'50px',
    width:'80%',
    backgroundColor:'#CFD2CF',
}

const spac ={
    marginLeft:'25px',
    width:'90%',
    backgroundColor:'#CFD2CF',
}
const stnn={
    paddingLeft:'200px',
    fontSize:'20px',
}
const ten ={
  paddingTop:'30px',
  textAlign:'center',
  fontWeight:'normal',
}

const log={
  width:'10%',
  height:'6vh',
  marginLeft:'300px',
  
}

const stn={
  fontWeight:'normal',
  paddingLeft:'20px',
  
}

let componentRef=useRef()
  return (
   <div>
          <ReactToPrint
           trigger={() => <Button
           style={{
            color:'black',
            marginLeft:'900px',
            backgroundColor:'orange'
           }}
           >
            Print
           </Button>}
           content={() => componentRef}
            />
          
      <div ref={(el) => (componentRef = el)}  style={{padding:'20px'}}>
       <div style={{display:'flex',marginTop:'40px' }}>
       <img src="/assets/mclogo.jpg" alt="logo of the project" style={log}/>
       <h3>Africa-MC SL Ltd</h3>
       </div>
       {/* time */}
       <div style={{display:'flex', flexDecoration:'row'}}>
       <h5 style={{ paddingLeft:'20px', paddingTop:'40px'}}>
        Today is <Time value={now} format="YYYY/MM/DD HH:mm" /></h5>
        
         <div style={{ paddingLeft:'600px', paddingTop:'40px'}}>
         <h5><span style={{paddingLeft:'-300px'}}>{staffName}</span></h5>
         <h5>{requestingFor}</h5>
        </div>
       </div>
      

     <hr/>
    <p style={stnn}>StaffId:<span style={stn}>{staffId}</span></p>
    <p style={stnn}>StaffName:<span style={stn}>{staffName}</span></p>
    <p style={stnn}>Requesting:<span style={stn}>{requestingFor}</span></p>
    <p style={stnn}>Department: <span style={stn}>{department}</span></p>
    <p style={stnn}>Amount : <span style={stn}>{amountRequest}</span></p>
    <p style={stnn}>Amount: <span style={stn}>{amountRequestInWords}</span></p>
    <p style={stnn}>Purpose: <span style={stn}>{purpose}</span></p>
    <p style={stnn}>Signature: <span style={stn}>{signature}</span></p>
    <p style={stnn}>Ceo Approval: <span style={stn}>{ceoApproval}</span></p>
   
   </div>
   </div>
  );
};

export default ViewById;
