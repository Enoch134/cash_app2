import React, { useEffect } from "react";
import Layout from "../Layout";
import ViewManagerApprove from "../../components/ceoDashboard/ViewManagerApprove";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const ViewApprove = () => {
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
      <ViewManagerApprove />
    </Layout>
  );
};

export default ViewApprove;
