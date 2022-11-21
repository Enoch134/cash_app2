import React, { useEffect } from "react";
import Layout from "../Layout";
import UserViewLog from "../../components/userDashboard/UserViewLog";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";


const ViewLog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role === "users") {
      navigate("/viewLog");
    }
    // if (user && user.role === "users") {
    //   navigate("/dashboard");
    // }
    // if (user && user.role === "users") {
    //   navigate("/dashboard");
    // }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <UserViewLog />
     
    </Layout>
  );
};

export default ViewLog;