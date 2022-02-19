import logo from './logo.svg';
import './App.css';
import Employerlogin from './Components/Employer/employerlogin';
import Employeelogin from './Components/Employee/employeelogin';
import Dashboard from './Components/Employer/Dashboard/dashboard';

function App() {
  return (
    <>
      <div>
        {/* <Employerlogin /> */}
        <Dashboard />
        {/* <Employeelogin /> */}
      </div>
    </>
  );
}

export default App;
