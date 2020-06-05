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
import { Link } from 'react-router-dom';


class Section1 extends React.Component {

  render() {

    return (
      <>
        <div className="ndrm-section-1 container_section">
          <div className="container_section short">
            <div className="row">
              <div className="breadcrumbs">
                <Link to="/home">Back</Link>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h2>Nettr DRM</h2>
                {/* <h2>Nettr Digital<br />Rights<br />Management</h2> */}
                <p>
                  Security is serious for content creators. Nettr’s DRM is built using unique algorithms and techniques based on industry-standards for protecting audio, video and all of your data by applying rights to media. Supported for Windows, MacOS, Linux, Android, iOS and Embedded platforms, the Nettr DRM is a next-generation protection system.
                </p>
                <p>
                  Whether you are a premium media owner or general media owner, Nettr’s next generation hardware-based digital rights management system secures your content
                </p>
              </div>
              <div className="col">
                <div className="logo-wrapper"></div>
              </div>
            </div>
            <div className="arrow_down"></div>
          </div>
        </div>
      </>
    )
  }

}


export default Section1;
