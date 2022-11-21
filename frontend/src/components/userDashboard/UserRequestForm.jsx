import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from 'moment'


const UserRequestForm = () => {
  const { user } = useSelector((state) => state.auth);
  const currentDate = moment().format('DD-MM-YYYY')
  const date = new Date();
  const current_time = date.getHours() + ":" + " " + date.getMinutes();
  const today = current_time + "  " + currentDate;
  const pending = ("Pending");
 


  const [staffId, setStaffId] = useState("");
  const [staffName, setStaffName] = useState("");
  const [requestingFor, setRequestingFor] = useState("");
  const [department, setDepartment] = useState("");
  const [amountRequest, setAmountRequest] = useState("");
  const [amountRequestInWords, setAmountRequestInWords] = useState("");
  const [purpose, setPurpose] = useState("");
  const [signature, setSignature] = useState("");
  const [requestAt, setRequestAt] = useState(`${today}`);
  const [ceoApproval, setCeoApproval] = useState(`${pending}`);
  const [adminApproval, setAdminApproval] = useState(`${pending}`);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();


  

  const saveRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/request", {
        staffId: staffId,
        staffName: staffName,
        requestingFor: requestingFor,
        department: department,
        amountRequest: amountRequest,
        amountRequestInWords: amountRequestInWords,
        purpose: purpose,
        signature: signature,
        requestAt: requestAt,
        ceoApproval: ceoApproval,
        adminApproval: adminApproval,
      });
      navigate("/request");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const cent ={
    textAlign:'center',
  }
  
  const cents ={
    // textAlign:'center',
    paddingLeft:'150px'
  }


  const top ={
    textAlign:'center',
    paddingTop:'20px',
    color:'#4C0033',
  }

  return (
    <section className="hero is-fullheight is-fullwidth">
   
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered" >
              <div className="column is-8">
            <form onSubmit={saveRequest} style={{
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
              height:'105%'
            }}>
            <h4 style={top}>CASH REQUEST FORM</h4>
            <p style={{textAlign:'center'}}>Ensure all forms fields are completed before SUBMIT</p>
              <p className="has-text-centered">{msg}</p>
             <p style={{
              paddingLeft:'15px',
              color:'#4C0033',
              fontWeight:'bold',
              fontSize:'20px',
              }}>Request Information:</p>
              <div style={{display:'flex', flexDirection:'row'}}>
              <div className="field">
                <label className="label" style={cent}>StaffId</label>
                <div className="control">
                  <input
                   type="text"
                 
                    className="input"
                    value={staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                    placeholder="Staff ID"
                    style={{
                      marginLeft:'15px',
                      backgroundColor:'#CFD2CF',
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" style={cents}>Request Name</label>
                <div className="control">

                  <input
                    type="text"
                    className="input"
                    value={staffName}
                    onChange={(e) => setStaffName(e.target.value)}
                    placeholder="User Name"
                    style={{
                      marginLeft:'100px',
                      backgroundColor:'#CFD2CF',
                      width:'80%'
                    }}
                  />
                </div>

              </div>
              </div>
              
              <div style={{display:'flex', flexDirection:'row'}}>
              <div className="field">
                <label className="label" style={cent}>Requesting For</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={requestingFor}
                    onChange={(e) => setRequestingFor(e.target.value)}
                    placeholder="Requesting For.."
                    style={{
                      marginLeft:'15px',
                      backgroundColor:'#CFD2CF',
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" style={cents}>Department</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="department"
                    style={{
                      marginLeft:'100px',
                      backgroundColor:'#CFD2CF',
                      width:'80%'
                    }}
                  />
                </div>
              </div>
              </div>

              <div style={{display:'flex', flexDirection:'row'}}>
              <div className="field">
              <label className="label" style={cent}>Amount No</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={amountRequest}
                    onChange={(e) => setAmountRequest(e.target.value)}
                    placeholder="request in number"
                    style={{
                      marginLeft:'15px',
                      backgroundColor:'#CFD2CF',
                    }}
                  />

                </div>
              </div>
              <div className="field">
              <label className="label" style={cents}>Amount in words</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={amountRequestInWords}
                    onChange={(e) => setAmountRequestInWords(e.target.value)}
                    placeholder="amount in words"
                    style={{
                      marginLeft:'100px',
                      backgroundColor:'#CFD2CF',
                      width:'80%'
                    }}
                  />
                </div>
                </div>
                </div>



                <div style={{display:'flex', flexDirection:'row'}}>
                <div className="field">
                <label className="label" style={cent}>Purpose</label>
                <div className="control">
                <input
                  type="text"
                  className="input"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="reason for your request"
                  style={{
                    marginLeft:'15px',
                    backgroundColor:'#CFD2CF',
                  }}
                />
              </div>
              </div>
             

              <div className="field">
              <label className="label" style={cents}>Signature</label>
              <div className="control">
              <input
                type="text"
                className="input"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="reason for your request"
                style={{
                  marginLeft:'100px',
                  backgroundColor:'#CFD2CF',
                  width:'80%'
                }}
              />
            </div>
            </div>

              
              </div>

              <div className="field">
                {/* <label className="label">Requested At</label> */}
                <div className="control">
                  <input
                    // type="datetime-local"
                    type="hidden"
                    className="input"
                    value={today}
                    onChange={(e) => setRequestAt(e.target.value)}
                    placeholder=""
                  />
                </div>
              </div>
              
              <div className="field">

              <div className="control">
                <input
                  type="hidden"
                  className="input"
                  value={pending}
                  onChange={(e) => setCeoApproval(e.target.value)}
                  placeholder=""
                />

              </div>
            </div>

            <div className="field">

            <div className="control">
              <input
                type="hidden"
                className="input"
                value={pending}
                onChange={(e) => setAdminApproval(e.target.value)}
                placeholder=""
              />

            </div>
          </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-#4C0033"
                  style={{
                    marginLeft:'15px',
                    backgroundColor:'#4C0033',
                    color:'white'
                  }}
                  >
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
  );
};

export default UserRequestForm;
