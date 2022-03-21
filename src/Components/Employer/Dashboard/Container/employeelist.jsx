import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/_employeelist.scss';
import axios from "axios";
import employeelisticon from '../../../Assets/svgs/employeelist.svg';
import addemployeeicon from '../../../Assets/svgs/addemployee.svg';

export default class Employee_list extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[],
      name: "",
      email: "",
      phone: "",
      role: "",
      date: "" 
    }
    
  }

  getData = async () => {
    try {
      const data = await axios.get("http://localhost:4000/app/get-all-data");
      console.log(data.data);
      this.setState({
        data: data.data,
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({
      name: "",
      email: "",
      phone: "",
      role: "",
      date: "" 

    });
  };

  componentDidMount() {  
    this.getData();
  }


  render() {
    return (
      <>
        <div className='employeelist-page'>
            <div className='employeelist-container'>
                <div className='employeelist-header-section'>
                <p className='input-label-24-bold color-lightgreen'><img src={employeelisticon} /> Employee List</p>
                <a href='/Add-employee'>
                <button className='nonactive-button'> 
                <img src={addemployeeicon} /> Add New Employee 
                </button>
                </a>
                </div>

                <div className='employee-list-section'>
                <div className='employee-header-list'>
                    <p className='input-label-24-bold color-white'>Employee Name</p>
                    <p className='input-label-24-bold color-white'>Employee ID</p>
                    <p className='input-label-24-bold color-white'>Reg. Date</p>
                    <p className='input-label-24-bold color-white'>See Details</p>
                </div>
{
  this.state.data.map(item=>(

                <div className='employee-main-list'>
                    <p className='input-label-24-bold color-lightgreen'>{item.name}</p>
                    <p className='input-label-24-bold color-lightgreen'>{item.id}</p>
                    <p className='input-label-24-bold color-lightgreen'>{item.date.substr(0,10)}</p>
                    <p className='input-label-24-bold color-lightgreen'>
                      {/* <a href={`/Employee_details/${item.id}`}></a> */}
                      <Link to={{pathname: '/Employee_details', search: item.id}}>View</Link>
                      </p>
                </div>
  ))
}

                
                </div>
            </div>
        </div>
      </>
    )
  }
}
