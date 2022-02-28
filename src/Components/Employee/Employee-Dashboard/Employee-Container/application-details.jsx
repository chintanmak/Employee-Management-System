import React, { Component } from 'react';
import '../../scss/_application-details.scss';

import applicationicon from '../../../Assets/svgs/application.svg';

export default class Application_details extends Component {
  render() {
    return (
      <>
          <div className='application-details'>
                <div className='application-details-container'>
                    <div className='application-details-header'>
                        <p className='input-label-24-bold color-secondary'><img src={applicationicon} /> Application </p>
                       <hr />
                    </div>
                    <div className='application-details'>
                    <div className='application-details-headers'>
                        <p className='input-label-24-bold color-secondary'>Subject here</p>
                    </div>
                    <div className='application-details-content'>
                        <p className='input-label-24 color-secondary'>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.." , comes from a line in section 1.10.32.</p>
                    </div>
                    <div className='application-details-decision'>
                        <button className='active-button'>Accepted</button>
                        {/* <button className='nonactive-button'>Rejected</button> */}
                    </div>
                </div>
                </div>
            </div>
      </>
    )
  }
}
