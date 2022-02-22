import logo from './logo.svg';

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employer_dashboard from './Components/Employer/Dashboard/Container/employer-dashboard';

import Employerlogin from './Components/Employer/employerlogin';
import Employerdashboard from './Components/Employer/Dashboard/Container/employer-dashboard';
import Dashboard from './Components/Employer/Dashboard/dashboard';
import Employee_list from './Components/Employer/Dashboard/Container/employeelist';
import Add_employee from './Components/Employer/Dashboard/Container/addemployee';
import Employee_details from './Components/Employer/Dashboard/Container/employee-details';
import Employee_application from './Components/Employer/Dashboard/Container/employeeapplication';
import Total_projects from './Components/Employer/Dashboard/Container/totalprojects';
import Pending_projects from './Components/Employer/Dashboard/Container/pendingprojects';
import Assign_projects from './Components/Employer/Dashboard/Container/assignprojects';



function App() {
  return (
    <>
      <div>
            <BrowserRouter>
            <Routes>
            <Route path="/Employerlogin" element={<Employerlogin />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/Employer-dashboard" element={<Employerdashboard /> } exact />
            <Route path='/Employee-list' element={<Employee_list />} exact />
            <Route path='/Add-Employee' element={<Add_employee />} />
            <Route path='/Employee_details' element={<Employee_details />} exact />
            <Route path='/Employee-application' element={<Employee_application />} exact />
            <Route path='/Total-Projects' element={<Total_projects />} exact />
            <Route path='/Pending-Projects' element={<Pending_projects />} exact />
            <Route path='/Assign-Projects' element={<Assign_projects />} exact />
            </Routes>

            </BrowserRouter>

  
            {/* <Employerlogin /> */}
            {/* <Employer_dashboard /> */}
            {/* <Employee_list /> */}
            {/* <Add_employee /> */}
            {/* <Employee_details /> */}
            {/* <Total_projects /> */}
            {/* <Pending_projects /> */}
            {/* <Employee_application /> */}
      </div>
    </>
  );
}

export default App;
