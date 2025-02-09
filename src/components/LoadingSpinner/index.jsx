/*******************************************************************************
 * NETTR GROUP CONFIDENTIAL                                                    *
 * ________________________________________________________________________    *
 *                                                                             *
 *  Copyright (C) 2020 Nettr Group                                             *
 *  All Rights Reserved.                                                       *
 *                                                                             *
 * NOTICE:  All information contained herein is, and remains the property      *
 * of Nettr Group and its suppliers, if any.  The intellectual and technical   *
 * concepts contained herein are proprietary to Nettr Group and its            *
 * suppliers, and are protected by trade secret or copyright law.              *
 * Dissemination of this information or reproduction of this material          *
 * is strictly forbidden unless prior written permission is obtained           *
 * from Nettr Group.                                                           *
 ******************************************************************************/
import React from 'react';
import './index.scss';

const LoadingSpinner = () => (
  <div id="spinner" className={'spinner'}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 252 68">
      <g fillRule="evenodd" clipRule="evenodd" fill="#FFF">
        <path
          className="loader-icon"
          d="M46.7,35.7l-4-5.4c-0.6-0.8-0.7-1.8-0.4-2.7c0.2-0.7,0.4-1.5,0.4-2.2c0-0.9,0.5-1.8,1.2-2.3
			l1.3-0.9c1.2-0.8,2.7-1,4.1-0.6c4,1.3,8.2-0.9,9.5-4.9c1.3-4-0.9-8.2-4.9-9.5c-4-1.3-8.2,0.9-9.5,4.9c-0.3,0.9-0.4,1.8-0.3,2.7
			c0.1,1.6-0.6,3.1-1.9,4l0,0c-0.9,0.6-2,0.6-2.9,0c-1.6-1-3.5-1.4-5.4-1.1c-0.8,0.2-1.6-0.1-2.3-0.6l-5.4-4.8
			c-1.1-1-1.7-2.5-1.5-3.9c0.5-4.1-2.4-7.9-6.5-8.4c-4.1-0.5-7.9,2.4-8.4,6.5c-0.5,4.1,2.4,7.9,6.5,8.4c1,0.1,2,0.1,2.9-0.2
			c1.4-0.4,3,0,4.1,1l3.4,3.1c1.2,1,1.7,2.7,1.2,4.2c-0.2,0.5-0.3,1.1-0.3,1.6c-0.1,1.5-1,2.8-2.3,3.5L15.7,33
			c-1.4,0.7-3,0.6-4.3-0.1c-3.6-2.1-8.2-1-10.3,2.6c-2.1,3.6-1,8.2,2.6,10.3s8.2,1,10.3-2.6c0.5-0.9,0.8-1.8,1-2.8
			c0.2-1.4,1.1-2.7,2.5-3.3l11.9-5.9c0.5-0.2,1.1-0.2,1.5,0.1l0.1,0c0.5,0.3,0.7,0.9,0.6,1.5l-1.8,10.9c-0.4,2.6-2,4.8-4.3,6.1
			c-3.6,2-4.9,6.6-2.9,10.2c2,3.6,6.6,4.9,10.2,2.9c3.6-2,4.9-6.6,2.9-10.2c0-0.1-0.1-0.1-0.1-0.2c-1.4-2.5-1.9-5.5-1.4-8.3L35.9,34
			c0.1-0.7,0.6-1.3,1.3-1.5h0c0.8-0.2,1.6,0.1,2.1,0.7l3.4,4.6c1,1.3,1.2,2.9,0.6,4.4c-1.6,3.8,0.2,8.2,4.1,9.8
			c3.8,1.6,8.2-0.2,9.8-4.1c1.6-3.8-0.2-8.2-4.1-9.8c-0.9-0.4-1.9-0.6-2.8-0.6C48.9,37.5,47.6,36.9,46.7,35.7z"
        />
      </g>

      <g transform="translate(37.294 0.379)">
        <path
          className="loader-n"
          d="M64.8,18.7c-1.1-1.5-2.7-2.6-4.4-3.3c-2.5-0.9-5.2-1.4-7.9-1.2h-0.4c-0.4,0-1.3,0-2.3,0.1
			c-1.1,0.1-2.4,0.2-3.9,0.5c-1.5,0.3-3,0.6-4.5,1c-1.4,0.4-2.8,0.9-4.1,1.6c0,0.5,0,1.1,0,1.8c0,0.8,0,1.6,0,2.4v32h9.5V24l0.2-0.1
			c1-0.5,2.1-0.8,3.2-1c1-0.1,1.6-0.2,2-0.2c0.9,0,1.8,0.2,2.6,0.5c0.7,0.4,1.3,0.9,1.7,1.5c0.4,0.7,0.8,1.4,0.9,2.2
			c0.2,0.9,0.3,1.7,0.3,2.6v23.9h9.6V29.7c0-2-0.2-4.1-0.5-6.1C66.5,21.8,65.8,20.2,64.8,18.7z"
        />
        <path
          className="loader-e"
          d="M100,19c-1.2-1.5-2.7-2.7-4.4-3.5c-2.2-1-4.6-1.4-7.1-1.3H88c-2.1,0-4.2,0.4-6.3,1
			c-3.5,1.2-6.2,3.9-7.3,7.4c-0.6,1.9-0.9,3.8-0.9,5.8v8.7c0,2.1,0.3,4.3,0.8,6.4c0.5,1.9,1.4,3.8,2.6,5.4c1.2,1.6,2.8,2.9,4.6,3.8
			c2.2,1,4.5,1.5,6.9,1.5c2.1,0,4.2-0.2,6.2-0.8c1.5-0.4,3-1.2,4.2-2.2c1.1-1,2-2.1,2.6-3.5c0.6-1.3,1-2.7,1.2-4.1h-8.8
			c-0.1,0.3-0.2,0.6-0.4,1c-0.2,0.5-0.5,1-0.9,1.4c-0.5,0.5-1,0.9-1.6,1.1c-0.8,0.3-1.7,0.5-2.5,0.5c-1.3,0.1-2.5-0.3-3.5-1.1l0,0
			c-0.8-0.7-1.4-1.7-1.7-2.7c-0.4-1.1-0.6-2.2-0.6-3.4c0-1.3-0.1-2.3-0.1-3.2v-0.4h20.4v-6.3c0-2.1-0.2-4.2-0.6-6.2
			C101.9,22.3,101.1,20.6,100,19z M94.5,30.9H82.5v-2.4c-0.1-2,0.3-4,1.3-5.7l0,0c1.1-1.4,2.8-2.1,4.6-2c1.2-0.1,2.4,0.2,3.4,0.9
			l0,0c0.8,0.6,1.4,1.4,1.8,2.2c0.4,0.9,0.6,1.9,0.7,2.9c0.1,0.9,0.1,1.9,0.1,2.8L94.5,30.9z"
        />
        <path
          className="loader-t"
          d="M119.9,24.1h4.7l4.3-8.7h-9V0.4h-9.6v39.1c0,1.9,0.3,3.7,0.9,5.4c0.6,1.7,1.6,3.3,2.9,4.6
			c1.4,1.4,3.2,2.5,5.1,3.2c2.3,0.9,4.8,1.3,7.3,1.2c0.5,0,0.9,0,1.2,0c0.2,0,0.3,0,0.5-0.1v-8.6c-0.5,0.1-0.9,0.1-1.4,0.1
			c-0.7,0-1.4-0.1-2-0.2c-0.8-0.1-1.6-0.4-2.3-0.8c-0.8-0.4-1.4-1-1.9-1.7c-0.6-0.9-0.9-2-0.8-3.1L119.9,24.1z"
        />
        <path
          className="loader-t"
          d="M145.4,24.1h4.7l4.3-8.7h-9V0.4h-9.6v39.1c0,1.9,0.3,3.7,0.9,5.4c0.6,1.7,1.6,3.3,2.9,4.6
			c1.4,1.4,3.2,2.5,5.1,3.2c2.3,0.9,4.8,1.3,7.3,1.2c0.5,0,0.9,0,1.2,0c0.2,0,0.3,0,0.5-0.1v-8.6c-0.5,0.1-0.9,0.1-1.4,0.1
			c-0.7,0-1.4-0.1-2-0.2c-0.8-0.1-1.6-0.4-2.3-0.8c-0.7-0.4-1.4-1-1.9-1.7c-0.6-0.9-0.9-2-0.8-3.1L145.4,24.1z"
        />
        <path
          className="loader-r"
          d="M178,15.3c-2.6,0-5.1,0.4-7.6,1.2c-1.9,0.7-3.7,1.7-5.3,3.1c-1.4,1.2-2.4,2.8-3.1,4.5
			c-0.7,1.7-1,3.6-1,5.5v24.1h9.6v-24c0-1,0.1-1.9,0.5-2.8c0.3-0.7,0.8-1.2,1.4-1.7c0.6-0.4,1.3-0.7,2-0.8c0.7-0.1,1.4-0.2,2.2-0.2
			h5.4l4.4-8.8L178,15.3z"
        />
      </g>

      <path
        className="loader-copyright"
        d="M245.1,5.1c-0.8-1.5-2-2.8-3.5-3.7c-3-1.8-6.8-1.8-9.8,0c-1.5,0.9-2.7,2.2-3.5,3.7c-0.9,1.5-1.3,3.3-1.3,5.1
	s0.4,3.6,1.4,5.2c0.8,1.5,2,2.8,3.5,3.7c2.9,1.8,6.7,1.8,9.7,0c1.4-0.9,2.7-2.2,3.5-3.7C246.8,12.2,246.8,8.3,245.1,5.1z"
      />
      <path
        className="loader-copyright"
        d="M233.8,15.9V5.2h3.7c1.4,0,2.5,1.1,2.5,2.5v0c0,1.4-1.1,2.5-2.5,2.5h-3.7h3.2c1.7,0,3,1.3,3,3c0,0,0,0.8,0,1.2
	c0,0.4,0.3,1.2,0.3,1.2v0.3"
      />
    </svg>
  </div>
);

export default LoadingSpinner;
