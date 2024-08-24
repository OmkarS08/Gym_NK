import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Members from "./components/Members/Members";
import Notification from "./components/Notification/Notification";
import AddMember from "./components/AddMember/AddMember";
import ActivityLog from "./components/ActivityLog/ActivityLog";
import Setting from "./components/Setting/Setting";
import StaffMemberPage from "./components/StaffMember/StaffMemberPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateComponent from "./components/PrivateComponent/PrivateComponent";
import SteamBath from "./components/Steam Bath/SteamBath";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Dashboard' element={
            <PrivateComponent>
              <Dashboard />
            </PrivateComponent>
          }></Route>
          <Route path='/Members' element={
            <PrivateComponent>
              <Members/>
            </PrivateComponent>} >
            </Route>
          <Route path='/AddMember' element={<PrivateComponent>
              <AddMember />
            </PrivateComponent>}></Route>
          <Route path='/Notification' element={<PrivateComponent>
              <Notification/>
            </PrivateComponent>}></Route>
            <Route path='/steamBath' element={<PrivateComponent>
              <SteamBath/>
            </PrivateComponent>}></Route>
          <Route path='/ActivityLogs' element={<PrivateComponent>
              <ActivityLog/>
            </PrivateComponent>}></Route>
          <Route path='/Setting' element={<PrivateComponent>
              <Setting/>
            </PrivateComponent>}></Route>
            <Route path='/StaffMember' element={<PrivateComponent>
              <StaffMemberPage/>
            </PrivateComponent>}></Route>
        </Routes>

      </BrowserRouter>
      {/* <Login/>
        <div className="text-3xl font-bold underline">Login  & Forgot password method </div>
        <div>Store and view Data </div>
        <div>Dashboard with Data Analaytic</div>
        <div>Add a member info</div> */}
    </div>
  );
}

export default App;
