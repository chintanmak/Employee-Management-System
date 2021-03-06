import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './Components/Scss/main.scss';

import Employerlogin from './Components/Employer/employerlogin';
import Employerdashboard from './Components/Employer/Dashboard/Container/employer-dashboard';
import Dashboard from './Components/Employer/Dashboard/dashboard';
import Employee_list from './Components/Employer/Dashboard/Container/employeelist';
import Add_employee from './Components/Employer/Dashboard/Container/addemployee';
import Employee_details from './Components/Employer/Dashboard/Container/employee-details';
import Employee_application from './Components/Employer/Dashboard/Container/employeeapplication';
import Total_projects from './Components/Employer/Dashboard/Container/totalprojects';
import Pending_projects from './Components/Employer/Dashboard/Container/pendingprojects';
import Project_view_details from './Components/Employer/Dashboard/Container/project-view-details';
import Assign_projects from './Components/Employer/Dashboard/Container/assignprojects';
import Employee_application_details from './Components/Employer/Dashboard/Container/employee-application-details';
import Employee_dashboard from './Components/Employee/Employee-Dashboard/employee-dashboard';
import Employee_profile from './Components/Employee/Employee-Dashboard/Employee-Container/employee-profile';
import Project_list from './Components/Employee/Employee-Dashboard/Employee-Container/project-list';
import Project_Submission from './Components/Employee/Employee-Dashboard/Employee-Container/project-submission';
import Application_list from './Components/Employee/Employee-Dashboard/Employee-Container/application-list';
import Add_application from './Components/Employee/Employee-Dashboard/Employee-Container/add-application';
import Application_details from './Components/Employee/Employee-Dashboard/Employee-Container/application-details';
import Tracker from './Components/Employee/Employee-Dashboard/Employee-Container/tracker';
import Employeelogin from './Components/Employee/employeelogin';
import Project_details from './Components/Employee/Employee-Dashboard/Employee-Container/project-details';
import EmployerLayout from './Components/Employer/EmployerLayout';
import EmployeeLayout from './Components/Employee/EmployeeLayout';
import React from "react";



function App() {
  return (
    <>
      <div>
            <BrowserRouter>

            <Routes>
            <Route path='/Employerlogin' element={<Employerlogin />} exact />
            <Route path='/' element={<EmployerLayout />} exact >
            
              <Route path='/Employee-list' element={<Employee_list />} exact />
              <Route path="/Employer-dashboard" element={<Employerdashboard /> } exact />
              <Route path='/Add-Employee' element={<Add_employee />} />
              <Route path='/Employee_details' element={<Employee_details />} exact />
              <Route path='/Employee-application' element={<Employee_application />} exact />
              <Route path='/Total-Projects' element={<Total_projects />} exact />
              <Route path='/Pending-Projects' element={<Pending_projects />} exact />
              <Route path='Project-view-details' element={<Project_view_details />} exact />
              <Route path='/Assign-Projects' element={<Assign_projects />} exact />
              <Route path='/Employee-application-details' element={<Employee_application_details />} exact />
            </Route>
           
            
            <Route path='/Employeelogin' element={<Employeelogin />} exact />
            <Route path='/' element={<EmployeeLayout />} exact >
              <Route path='/Employee-profile' element={<Employee_profile />} exact />
              <Route path='/Project-list' element={<Project_list />} exact />
              <Route path='/project-details' element={<Project_details />} exact />
              <Route path='/Project-submission' element={<Project_Submission />} exact />
              <Route path='/application-list' element={<Application_list />} exact />
              <Route path='/add-application' element={<Add_application />} exact />
              <Route path='/Application-details' element={<Application_details />} exact />
              <Route path='/Tracker' element={<Tracker />} exact />
            
            </Route>

            <Route path='/Dashboard' element={<Dashboard />} exact />
            <Route path='/Employee-Dashboard' element={<Employee_dashboard />} exact />

  
            </Routes>

            </BrowserRouter>

  
      </div>
    </>
  );
}

export default App;
