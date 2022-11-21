import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const UsersDtails = () => {

 
  const [staffId, setStaffId] = useState("");
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const [number, setNumber] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
  const { id } = useParams();
  // const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setStaffId(response.data.staffId);
        setName(response.data.name);
        setUserName(response.data.userName);
        setEmail(response.data.email);
        setDepartment(response.data.department);
        setRole(response.data.role);
        setNumber(response.data.number);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);
  // const getCeoApproveRequest = async () => {
  //   // e.preventDefault();
  //   try {
  //     await axios.patch(`http://localhost:5000/ceoApproveRequest/${id}`, {

  //       staffId: staffId,
  //       staffId: staffId,
  //       requestingFor: requestingFor,
  //       department: department,
  //       amountRequest: amountRequest,
  //       amountRequestInWords: amountRequestInWords,
  //       purpose: purpose,
  //       signature: signature,
  //       ceoApproval: ceoApproval,
  //       // reject: reject,
  //     });
  //     // navigate("/requestForm");
  //   } catch (error) {
  //     if (error.response) {
  //       setMsg(error.response.data.msg);
  //     }
  //   }
  // };
 
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
    <h4>staffId:{staffId}</h4>
    <h4> fullName:{name}</h4>
    <h4>Username:{userName}</h4>
    <h4>department:{department}</h4>
    <h4>email:{email}</h4>
    <h4>department{department}</h4>
    <h4>role:{role}</h4>
    <h4>phone number:{number}</h4>
    
   
   </div>
  );
};

export default UsersDtails;
