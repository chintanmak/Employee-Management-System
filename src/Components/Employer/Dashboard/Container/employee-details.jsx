import React, { Component } from 'react';
import '../../scss/_employee-details.scss';
import axios from "axios";

export default class Employee_details extends Component {

    constructor(props) {
        super(props);
        this.state={
          data:[],
          name: "",
          email: "",
          phone: "",
          role: "",
          date: "" ,
        }
        
      }
    
      getData = async (id) => {
        try {
          const data = await axios.get(`http://localhost:4000/app/get-data/${id}`);
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
          console.log()
        this.getData(window.location.search.split("?")[1]);
      }

  render() {
    return (
        <>
            <div className='employee-details-container'>
            <div className='employee-details-section'>
 
                <div className='employee-details-header'>
                    <p className='header-36 color-secondary'>{this.state.data.name}</p>
                    <hr />
                </div>

                <div className='employee-details-info-section'>
                    
                    <div className='employee-details-info'>
                        <div className='employee-details-inside-header'>
                            <p className='input-label-24-bold'>Employee Details</p>
                        </div>
                        <div className='employee-details-inside-info'>
                        <ul>
                    
                            <li className='input-label-24-bold color-secondary'>Name:</li>
                            <p className='color-secondary input-label-24-bold'>{this.state.data.name}</p>
                            <hr />
                        
                            <li className='input-label-24-bold color-secondary'>Email:</li>
                            <p className='color-secondary input-label-24-bold'>{this.state.data.email}</p>
                            <hr />
                            
                            <li className='input-label-24-bold color-secondary'>Role:</li>
                            <p className='color-secondary input-label-24-bold'>{this.state.data.role}</p>
                            <hr />

                            <li className='input-label-24-bold color-secondary'>Phone:</li>
                            <p className='color-secondary input-label-24-bold'>{this.state.data.phone}</p>
                            <hr />

                            <li className='input-label-24-bold color-secondary'>Joining Date:</li>
                            <p className='color-secondary input-label-24-bold'>{this.state.data.date}</p>
                        </ul>
                        </div>
                    </div>

                    <div className='employee-details-projects'>
                        <div className='employee-details-box1'>
                            <p className='input-label-24-bold color-secondary'>
                            Assigned Projects
                            </p>
                            <button className='active-button'>
                            10
                            </button>
                        </div>

                        <div className='employee-details-box1'>
                            <p className='input-label-24-bold color-secondary'>
                            Completed Projects
                            </p>
                            <button className='active-button'>
                            09
                            </button>
                        </div>

                        <div className='employee-details-box1'>
                            <p className='input-label-24-bold color-secondary'>
                            Pending Projects
                            </p>
                            <button className='active-button'>
                            01
                            </button>
                        </div>
                    </div>

                </div>
 
            </div>

            </div>
        </>
        )
  }
}
