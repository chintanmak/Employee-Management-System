import logo from './logo.svg';
import './App.css';

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
            </Routes>

            </BrowserRouter>

  
            {/* <Employerlogin /> */}
            {/* <Employer_dashboard /> */}
            {/* <Employee_list /> */}
            {/* <Add_employee /> */}
            {/* <Employee_details /> */}
            {/* <Employee_application /> */}
      </div>
    </>
  );
}

export default App;
