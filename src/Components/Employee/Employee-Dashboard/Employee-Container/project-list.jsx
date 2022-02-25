import React, { Component } from 'react';
import '../../scss/_project-list.scss';

export default class Project_list extends Component {
  render() {
    return (
        <>
              <div className='project-list-container'>
            <div className='project-list-section'>
                <div className='project-list-header'>
                    <p className='header-36 color-secondary'> Projects</p>
                </div>
                    <hr />

                <div className='project-list-sections'>
                    <div className='project-list-headers'>
                    <p className='input-label-24-bold color-white'>Title</p>
                    <p className='input-label-24-bold color-white'>submitted On</p>
                    <p className='input-label-24-bold color-white'>See Details</p>    
                    </div>

                    <div className='project-list-main'>
                    <p className='input-label-24-bold color-lightgreen'>Chintan Makwana</p>
                    <p className='input-label-24-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-24-bold color-lightgreen'>View</p>
                    </div>

                    <div className='project-list-main'>
                    <p className='input-label-24-bold color-lightgreen'>Prateek kuber</p>
                    <p className='input-label-24-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-24-bold color-lightgreen'>View</p>
                    </div>

                    <div className='project-list-main'>
                    <p className='input-label-24-bold color-lightgreen'>Govind kshirsagar</p>
                    <p className='input-label-24-bold color-lightgreen'>DD/MM/YY</p>
                    <p className='input-label-24-bold color-lightgreen'>View</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }
}
