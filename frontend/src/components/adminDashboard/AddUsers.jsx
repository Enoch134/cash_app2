import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import {  useSelector } from "react-redux";
import axios from "axios";
import 'react-responsive-modal/styles.css';
import { Button, Modal } from 'react-bootstrap';




const AddUsers = () => {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [show, setShow] = useState(false);
    // console.log(users.filter(user.name.includes('sa')));
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { user } = useSelector((state) => state.auth);
    // add user
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

    const saveUser = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/users", {
            staffId: staffId,
            name: name,
            userName: userName,
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
  
    useEffect(() => {
      getUsers();
    }, []);
  
    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      };
    
      const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
      };
    const separate ={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    }; 
    
    const space ={
        marginLeft:'15px',
        width:'90%',
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
    
  useEffect(() => {
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:5000/users/?q=${query}`);
    setUsers(res.data);
  };
  if (query.length === 0 || query.length > 2) fetchData();
}, [query]);

    return(
        <div>
        <div>
         <p style={{paddingLeft:'10px'}}>Manage Users</p>
         <div className="app">
        <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        style={{
          marginLeft:'10px',
          borderRadius:'5px',

      }}
      />
     
      </div>
        <div style={separate}>
       
        <div>
        <div>
        </div>
        <table className="table is-striped is-fullwidth" style={{marginTop:'25px'}}>
        <thead>
          <tr style={{fontSize:'12px'}}>
            <th>No</th>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.filter(user=>
            user.name.toLowerCase().includes(query)||
            user.email.toLowerCase().includes(query)||
            user.role.toLowerCase().includes(query)
            )
            .map((user, index) => (
            <tr key={user.uid} style={{fontSize:'12px'}}>
              <td>{index + 1}</td>
              <td>{user.staffid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {/* <Link
                  to={`/users/edit/${user.uid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link> */}
                <Link
                  to={`/users/get/${user.uid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <Button  onClick={handleShow} style={{backgroundColor:'#EF5B0C'}}>
                  Delete
                 </Button>
             
               
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h4 style={{color:'orange', textAlign:'center'}}>Forget Password</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> If you want to make changes to a password or you don't remember your password, you're recommended to contact the ADMIN</p>
        </Modal.Body>
        <Modal.Footer>
        <button
                  onClick={() => deleteUser(user.uid)}
                  className="button is-small is-danger"
                >
                  Delete
          </button>
          
        </Modal.Footer>
      </Modal>
        </div>

        <div>
        <section className="hero is-fullheight is-fullwidth">
   
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered" >
              <div className="column is-20" >
            <form onSubmit={saveUser} style={{
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
              height:'90%',
              width:'120%',
             marginTop:'-50px',
              marginBottom:'140px',
              marginLeft:'-40px',
            }}>
            <p className="has-text-centered">{msg}</p>
            <div style={{display:'flex', flexDirection:'row', marginTop:'15px'}}>
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
            <div style={{display:'flex', flexDirection:'row', marginLeft:'50px'}}>
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
                    width:'50%',
                    marginLeft:'120px',
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
        </div>
        </div>
        </div>
    )

}
export default AddUsers;