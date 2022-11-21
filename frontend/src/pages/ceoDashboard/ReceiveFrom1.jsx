import React, { useEffect } from "react";
import Layout from "../Layout";
import ReceivedRequestFromUser from "../../components/ceoDashboard/ReceivedRequestFromUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const ReceiveFrom1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <ReceivedRequestFromUser />
    </Layout>
  );
};

export default ReceiveFrom1;
