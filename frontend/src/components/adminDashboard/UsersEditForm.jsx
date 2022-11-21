import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const UsersEditForm = () => {
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
  const { user } = useSelector((state) => state.auth);
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

  const updateUsers = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        staffId: staffId,
        name: name,
        userNmae: userName,
        email: email,
        department: department,
        password: password,
        confPassword: confPassword,
        role: role,
        number: number,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

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
   <section className="hero is-fullheight is-fullwidth">
   
   <div className="hero-body">
     <div className="container">
       <div className="columns is-centered" >
         <div className="column is-6" >
       <form onSubmit={updateUsers} style={{
         boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
         height:'90%',
         width:'120%',
        marginTop:'-50px',
         marginBottom:'140px',
         marginLeft:'-40px',
       }}>
        <h4 style={{textAlign:'center', color:'#4C0033', paddingTop:'30px'}}>Edit User</h4>
       <p className="has-text-centered" style={{backgroundColor:'#4C0033', color:'white'}}>{msg}</p>
       
       <div style={{display:'flex', flexDirection:'row'}}>
       <div className="field">
         <label className="label" style={ten} >Staff ID</label>
         <div className="control">
           <input
             type="text"
             className="input"
             value={staffId}
             onChange={(e) => setStaffId(e.target.value)}
             placeholder="Staff Id"
             style={space}
           />
          </div >
       </div >
         <div className="field">
         <label className="label" style={ten}>Name</label>
         <div className="control">
           <input
             type="text"
             className="input"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Name"
             style={spac}
           />
         </div>
       </div>
      </div>
      
      
       <div style={{display:'flex', flexDirection:'row'}}>
       <div className="field">
       <label className="label" style={stn}>Username</label>
       <div className="control">
         <input
           type="text"
           className="input"
           value={userName}
           onChange={(e) => setUserName(e.target.value)}
           placeholder="username"
           style={space}
         />
       </div>
     </div>
    
    
 
     
       <div className="field">
         <label className="label" style={stn}>Email</label>
         <div className="control">
           <input
             type="text"
             className="input"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Email"
             style={spac}
           />
         </div>
       </div>
       </div>
       <div style={{display:'flex', flexDirection:'row', marginLeft:'100px'}}>
       <div className="field">
       <label className="label" style={stn}>Department</label>
       <div className="control">
       <div className="select is-fullwidth" >
       <select
           value={department}
           onChange={(e) => setDepartment(e.target.value)}
           style={spac}
         >
           <option value="">Select</option>
           <option value="HR">HR</option>
           <option value="Finance">Finance</option>
           <option value="ITN">ITN</option>
           <option value="Marketing">Marketing</option>
           <option value="juniorStaff">Junior Staff</option>
         </select>
         </div>
       </div>
     </div>
   
     <div className="field">
     <label className="label" style={stn}>Role</label>
     <div className="control">
       <div className="select is-fullwidth">
         <select
           value={role}
           onChange={(e) => setRole(e.target.value)}
           style={spac}
         >
           <option value="">Select</option>
           <option value="admin">Admin</option>
           <option value="accountant">Accountant</option>
           <option value="manager">Manager</option>
           <option value="user">Users</option>
         </select>
       </div>
     </div>
   </div>
   </div>
 
     <div style={{display:'flex', flexDirection:'row'}}>
       <div className="field">
         <label className="label" style={stn}>Password</label>
         <div className="control">
           <input
             type="password"
             className="input"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="******"
             style={space}
           />
         </div>
       </div>
       <div className="field">
         <label className="label" style={stn}>Confirm Password</label>
         <div className="control">
           <input
             type="password"
             className="input"
             value={confPassword}
             onChange={(e) => setConfPassword(e.target.value)}
             placeholder="******"
             style={spac}
           />
         </div>
       </div>
       </div>
 
       
       <div className="field">
         <label className="label" style={stn}>Number</label>
         <div className="control">
           <input
             type="text"
             className="input"
             value={number}
             onChange={(e) => setNumber(e.target.value)}
             placeholder="Email"
             style={{
               width:'45%',
               marginLeft:'150px',
               backgroundColor:'#CFD2CF',
              }}
           />
         </div>
       </div>
      
       <div className="field">
         <div className="control">
           <button type="submit" className="button is-dark" style={{
             // textShadow: "1px 1px 2px black, 0 0 5px orange, 0 0 5px black",
             color:'white',
             alignItems:'center',
             marginLeft:'200px',
             marginTop:'30px',
             backgroundColor:'#4C0033',
             width:'30%'
           }}>
             Save
           </button>
         </div>
       </div>
     </form>
   </div>
   </div>
   </div>
   </div>
   </section>
   </div>
  );
};

export default UsersEditForm;
