import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const FormEditRequest = () => {
  
  const [ceoApproval, setCeoApproval] = useState("");

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();


  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getRequestById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/request/${id}`
        );
       
        setCeoApproval(response.data.ceoApproval);
       


      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRequestById();
  }, [id]);

  const updateRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/request/${id}`, {

        ceoApproval: ceoApproval,
        // reject: reject,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  
  const frm={
    width:'30%',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'50px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
 }
const txt={
textAlign:'center',
color:'#4C0033',
}
const sel={
    marginLeft:'28%',
    color:'#4C0033'
   
}
const btnn={
 marginLeft:'33%',
 backgroundColor:'#4C0033',
 color:'white',

}

  return (
  


    <div style={frm}>
      <h1 className="title" style={txt}>Respond To Request</h1>
      {/* <h2 className="subtitle">Send New Request</h2> */}
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateRequest}>
              <p className="has-text-centered">{msg}</p>


             



              <div className="field">
                <label className="label"  style={txt}>Manager Action</label>
                <div className="control">
                  <select
                    value={ceoApproval}
                    onChange={(e) => setCeoApproval(e.target.value)}
                    style={sel}
                  >
                    <option value="">Select</option>
                    <option  value="Approved">Approve</option>
                    <option value="Sorry! but your request have been turn down by your Manager"> Decline/Reject</option>
                  </select>
                </div>
              </div>


              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success" style={btnn}>
                    Respond
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditRequest;
