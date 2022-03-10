import React, { Component } from 'react';
import '../../scss/_addemployee.scss';
import axios from "axios";

export default class Add_employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          phone: "",
          role: ""
        };
      }

      onSubmit = async () => {
        alert("Added successfully");
        const result = await axios.post(`http://localhost:4000/app/addEmployee`, {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          role: this.state.role
          
        });
        console.log(result);
        if (result.status == 200) {
          // this.getData();
        }
      };
    
  render() {
    return (
      <>
        <div className='add-employee-container'>
            <div className='add-employee-section'>
                <div className='addemployee-header'>
                    <p className='input-label-24-bold color-secondary'>Add New Employee</p>
                    <hr />
                </div>
                <div className='add-employee-details'>
                    <div className='add-employee-header'>
                        <p className='input-label-24-bold'>Registration Form</p>
                    </div>
                    <div className='add-employee-form'>
                        <p className='input-label-24-bold color-secondary'>Name :</p>
                        <input type="text" 
                        placeholder='Full name'
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}                        
                        className='inputboxs addemp-input' 
                        />
                    </div>
                    <div className='add-employee-form'>
                        <p className='input-label-24-bold color-secondary'>Email :</p>
                        <input type="text" 
                        placeholder='Email'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        className='inputboxs addemp-input'
                        />
                    </div>
                    <div className='add-employee-form'>
                        <p className='input-label-24-bold color-secondary'>Phone :</p>
                        <input type="text" 
                        placeholder='Phone'
                        value={this.state.phone}
                        onChange={(e) => this.setState({ phone: e.target.value})}
                        className='inputboxs addemp-input'
                        />
                    </div>
                    <div className='add-employee-form'>
                        <p className='input-label-24-bold color-secondary'>Role :</p>
                        <input type="text" 
                        placeholder='Role'
                        value={this.state.role}
                        onChange={(e) => this.setState({ role: e.target.value})}
                        className='inputboxs addemp-input'
                        />
                    </div>
                    
                    <div className='add-employee-submitbtn'>
                     <button className='primarybtn' onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
      </>
    )
  }
}
