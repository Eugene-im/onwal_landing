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


class Section3 extends React.Component {


  render() {

    return (
      <>
        <div className="ndrm-section-3 container_section">
          <div className="container_section short">
            <h2>
            Nettr DRM – the Go to choice
            </h2>

            <div className="row">

                <div className="wrapper-content">
                    <div className="wrapper-content__img">
                      <div className="wrapper-img __01 "></div>
                    </div>
                    <div className="wrapper-content__text">
                      <h3>Unified DRM framework</h3>
                      <p>Robust and Sophisticated protection integrated with Nettr SDK</p>
                    </div>
                </div>

                <div className="wrapper-content">
                    <div className="wrapper-content__img">
                      <div className="wrapper-img __02"></div>
                    </div>
                    <div className="wrapper-content__text">
                      <h3>Trusted Execution Environment</h3>
                      <p>Hardware/Software based TEE for protecting the media path, media decoding and decryption key</p>
                    </div>
                </div>

                <div className="wrapper-content">
                    <div className="wrapper-content__img">
                      <div className="wrapper-img __03"></div>
                    </div>
                    <div className="wrapper-content__text">
                      <h3>Customizable end-to-end control</h3>
                      <p>The DRM license can be controlled from server to playback on the device using Nettr DRM console</p>
                    </div>
                </div>

                <div className="wrapper-content">
                    <div className="wrapper-content__img">
                      <div className="wrapper-img __04"></div>
                    </div>
                    <div className="wrapper-content__text">
                      <h3>Cost Effective</h3>
                      <p>No added costs for hosting</p>
                    </div>
                </div>

                <div className="wrapper-content">
                    <div className="wrapper-content__img">
                      <div className="wrapper-img __05"></div>
                    </div>
                    <div className="wrapper-content__text">
                      <h3>Real-time and on-demand</h3>
                      <p>One DRM framework to protect the streaming audience</p>
                    </div>
                </div>

            </div>

          </div>
        </div>
      </>
    );
  }

}


export default Section3;
