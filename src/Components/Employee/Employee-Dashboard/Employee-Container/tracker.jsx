import React, { Component } from 'react';
import '../../scss/_tracker.scss';

export default class Tracker extends Component {
  render() {
    return (
        <>
             <div className='tracker-container'>
            <div className='tracker-section'>
                <div className='tracker-info-container'>
                <div className='tracker-headers'>
                        <p className='input-label-24-bold'>Application Details</p>
                    </div>
                    
                <div className='tracker-sections'>
                      <div className='tracker-forms-container'>

                      <div className='tracker-form'>
                          <input type="text" className='inputboxs tracker-box' placeholder='TASK'/>
                          <button className='primarybtn'>Add</button>
                      </div>
                      
                      <div className='tracker-form'>
                          <p className='tracker-list'>wasssupp</p>
                          <div className='btn-yesno'>
                          <button className='primarybtn'>YES</button>
                          <button className='primarybtn'>NO</button>
                          </div>
                      </div>

                      <div className='tracker-form'>
                          <p className='tracker-list'>Testingg testingg</p>
                          <div className='btn-yesno'>
                          <button className='primarybtn'>YES</button>
                          <button className='primarybtn'>NO</button>
                          </div>
                      </div>
                      
                      <div className='tracker-form'>
                          <p className='tracker-list'>Hellloooooo</p>
                          <div className='btn-yesno'>
                          <button className='primarybtn'>YES</button>
                          <button className='primarybtn'>NO</button>
                          </div>
                      </div>
                      
                      </div>

                    </div>
                </div>
            </div>
          </div>            
        </>
        )
  }
}
