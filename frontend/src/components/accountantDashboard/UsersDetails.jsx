import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



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
    const [adminApproval, setAdminApproval] = useState("");
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
        setAdminApproval(response.data.adminApproval);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRequestById();
  }, [id]);
  
 
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
const stn={

 textAlign:'center',
}
const ten ={
  paddingTop:'30px',
  textAlign:'center',
}
  return (
   <div>
    <h4>StaffId:{staffId}</h4>
    <h4>StaffName:{staffName}</h4>
    <h4>Requesting For:{requestingFor}</h4>
    <h4>Department:{department}</h4>
    <h4>Amount Request in figure:{amountRequest}</h4>
    <h4>Amount in words:{amountRequestInWords}</h4>
    <h4>Purpose:{purpose}</h4>
    <h4>Signature:{signature}</h4>
    <h4>Ceo Approval:{adminApproval}</h4>
   
      
   </div>
  );
};

export default ViewById;
