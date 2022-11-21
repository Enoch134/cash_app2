import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import FormRequest2 from "./components/FormRequest2";
// import Request from "./pages/ceoDashboard/Request";
// import UsersList from "./pages/ceoDashboard/UsersList";
import Simple from "./pages/ceoDashboard/Simple";
// import ViewLog from "./pages/userDashboard/ViewLog";


// import DoughnutChart from "./components/ceoDashboard/DoughnutChart";
// import LineChart from "./components/ceoDashboard/LineChart";
// import Apex from "./components/ceoDashboard/Apex";
// import Earnings from "./components/ceoDashboard/Earning";
// import LastPhase from "./components/ceoDashboard/LastPhase";
// import UserView from "./pages/adminDashboard/UserView";
// // import ViewReq from "./pages/adminDashboard/ViewReq";

// manager routes
// import Adds from "./pages/adminDashboard/Adds";
// import UsersList1 from "./pages/adminDashboard/UsersList1";
// import ViewCeoApprovedList from "./pages/adminDashboard/ViewCeoApprovedList";
// import UserRequest1 from "./pages/adminDashboard/UserRequest1";
// import PrintView1 from "./pages/adminDashboard/PrintView1";


// users routes
import UserRequests from "./pages/userDashboard/UserRequests";
import ViewManagerList from "./pages/userDashboard/ViewManagerList";
import CeoViewList from "./pages/userDashboard/CeoViewList";
import ViewLog from "./pages/userDashboard/ViewLog";
import PostRequest from "./components/userDashboard/PostRequest";

// // accountant routes
// import CeoApprovedList from "./pages/accountantDashboard/CeoApprovedList";
// import ManagerApprovedList from "./pages/accountantDashboard/ManagerApprovedList";



// ceo routes
// import Dashboard1 from "./pages/ceoDashboard/Dashboard1";
// import ViewApprove from "./pages/ceoDashboard/ViewApprove";
// import Example from "./components/adminDashboard/Example";
// import DataPrint from "./components/adminDashboard/DataPrint";

// import CeoApproval from "./pages/adminDashboard/CeoApproval";
// import ManagerApproval from "./pages/adminDashboard/ManagerApproval";
// import ReceivedCeo from "./pages/accountantDashboard/ReceivedCeo";
// import ReceivedManager from "./pages/accountantDashboard/ReceivedManager";
import ReceiveFrom from "./pages/ceoDashboard/ReceiveFrom";
import RequestForm from "./pages/adminDashboard/RequestForm";
import AdminList from "./pages/accountantDashboard/AdminList";
import CeoList from "./pages/accountantDashboard/CeoList";
import CeoList1 from "./pages/adminDashboard/CeoList1";
import Apex from "./components/accountantDashboard/Apex";
import AccountantDashboard1 from "./pages/accountantDashboard/AccountantDashboard1";
import Users from "./pages/adminDashboard/Users";
import AdminDash from "./pages/adminDashboard/AdminDash";
import ManagerApproved1 from "./pages/adminDashboard/ManagerApproved1";
import DirectorEditForm from "./pages/adminDashboard/DirectorEditForm";
import Dashboard1 from "./components/accountantDashboard/Dashboard1";
import ViewBy from "./pages/accountantDashboard/ViewBy";
import AddReq from "./pages/ceoDashboard/AddReq";
import EditRequest from "./pages/ceoDashboard/EditRequest";
import EditUsers from "./pages/adminDashboard/EditUsers";
import CeoPending1 from "./pages/ceoDashboard/CeoPending1";
import CeoApproval1 from "./pages/ceoDashboard/CeoApproval1";
import PendingRequest from "./pages/adminDashboard/PendingRequest";
import CeoPending from "./pages/userDashboard/CeoPending";
import ManagerPending1 from "./pages/userDashboard/ManagerPending1";
// import RecieveForm1 from "./pages/ceoDashboard/ReceiveFrom1";

import Big from "./pages/accountantDashboard/Big";
import Details from './pages/adminDashboard/Details';
import ViewDetail from './pages/accountantDashboard/ViewDetail';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/viewLog" element={<ViewLog />} />
          <Route path="/viewLog" element={<ViewLog />} />
          
         
         
          
         
       
         


          <Route path="/userRequests" element={<UserRequests />} />
          <Route path="/viewLog" element={<ViewLog />} />
          <Route path="/postRequest" element={<PostRequest />} />
          <Route path="/viewManagerList" element={<ViewManagerList />} />
          <Route path="/ceoViewList" element={<CeoViewList />} />
          <Route path="/receiveFrom" element={<ReceiveFrom />} />
          <Route path="/requestForm" element={<RequestForm />} />
          <Route path="/adminList" element={<AdminList />} />
          <Route path="/ceoList" element={<CeoList />} />
          <Route path="/ceoList1" element={<CeoList1 />} />
          <Route path="/apex" element={<Apex />} />
          <Route path="/accountantDashboard1" element={<AccountantDashboard1 />} />
          <Route path="/users" element={<Users />} />
          <Route path="/adminDash" element={<AdminDash />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
          <Route path="/addReq" element={<AddReq />} />
          <Route path="/ceoPending1/edit/:id" element={<EditRequest />} />
          <Route path="/formRequest2" element={<FormRequest2 />} />
          <Route path="/managerApproved1" element={<ManagerApproved1 />} />
          <Route path="/requestForm/edit/:id" element={<DirectorEditForm />} />
          <Route path="/request/get/:id" element={<ViewBy />} />
          <Route path="/pendingRequest" element={<PendingRequest />} />
          <Route path="/users/edit/:id" element={<EditUsers />} />
          <Route path="/receiveFrom/edit/:id" element={<EditRequest />} />
          <Route path="/ceoPending1" element={<CeoPending1 />} />
          <Route path="/ceoApproval1" element={<CeoApproval1 />} />
          <Route path="/ceoPending" element={<CeoPending />} />
          <Route path="/ceoViewList" element={<CeoViewList />} />
          <Route path="/managerPending1" element={<ManagerPending1 />} />
          <Route path="/big" element={<Big />} />
          <Route path="/users/get/:id" element={<Details />} />
          <Route path="/request/get/:id" element={<ViewDetail />} />
         
          
          


         

         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default hot(App);
