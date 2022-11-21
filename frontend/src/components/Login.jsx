import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import { IconName } from "react-icons/bi";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user && user.role ==="admin " && isSuccess) {
      navigate("/dashboard");
    };


    if (user && user.role === "user" && isSuccess) {
      navigate("/postRequest");
    };
    if (user && user.role === "accountant" && isSuccess) {
      navigate("/dashboard");
    };

    if (user && user.role === "ceo" && isSuccess) {
      navigate("/dashboard");
    };



    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

 
  

  

  //  const center = {
  //   alignItems: "center",
  //   boxShadow: "0 0 10 0 #ffffff",
  //   border: "20px white",
  //   // marginTop: 20
  //   marginBottom:80,
  // };
  



  return (
    <section >

    {isError && <p className="has-text-centered" style={{backgroundColor:'orange', width:'100%'}}>{message}</p>}
      <div style={{display:"flex"}} >
      <img class="wave" src="/assets/wave.png" alt="login images"  style={{width:'35%', height:'45%', marginTop:'30px'}}/>
       <div className="container" >
       <div class="img">
      <img src="/assets/bg1.png" alt="login images" style={{display:'flex', width:'50%', height:'40%', marginLeft:'-180px', marginTop:'50px'}}  />
       </div>
       <div className="columns is-centered"  >
       <div className="column is-4" >
       <form onSubmit={Auth} className="box"style={{marginTop:'-400px', marginRight:'-90px'}}  >
       <img src="/assets/avatar.png" alt="login images" style={{width:'42%', height:'50%',marginLeft:'80px' }}/>
      
             <h3 className="title is-2"
              style={{textShadow: "1px 1px 2px black, 0 0 10px black, 0 0 5px black",
              color:'black',
              textAlign: 'center',
            }}>USER LOGIN</h3>
            <div className="form-group">
             <label>Email</label>
             <input type="email"
              className="form-control" 
              value={email} onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter email" />
             </div>

<div className="form-group">
<label>Password</label>
<input 

type="password" 
value={password}
onChange={(e) => setPassword(e.target.value)}
className="form-control"
 placeholder="Enter password"
  />
</div>

<div className="form-group">
<div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" id="customCheck1" />
    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
</div>
</div>

<button type="submit"

 className="btn btn-dark btn-lg btn-block"
 style={{backgroundColor:'#9C2C77',
  borderRadius:'20px',
  width:'70%',
  marginLeft:'50px',
}}

 >{isLoading ? "Loading..." : "Login"}</button>
<p className="forgot-password text-right">
Forgot <a href="#">password?</a>
</p>

           </form>
           </div>
         </div>
       </div>
     </div>
  
   
    </section>
  );
};

export default Login;

