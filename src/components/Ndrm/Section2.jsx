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

class Section2 extends React.Component {
  render() {
    return (
      <>
        <div className="ndrm-section-2 container_section ">
          <div className="container_section short">
            <h2>Nettr DRM for better security</h2>

            <div className="row">
              <div className="col">
                <div className="wrapper-img-schema"></div>
              </div>
              <div className="col justify-content-center align-items-center d-flex">
                <div className="wrapper-text">
                  <div className="wrapper-text__content">
                    <ul>
                      <li>
                        One-cross platform SDK – No complexities as experienced with legacy systems.
                      </li>
                      <li>
                        Codecs and file formats agnostic – Choose your own file format and media codec for content delivery.
                      </li>
                      <li>
                        No OS specific complexities – designed to work with a single line of code.
                      </li>
                      <li>
                        Hardware-based DRM – Content is protected by token access and International DRM Specifications.
                      </li>
                      <li>
                        Protected transport and payload – Protected with code obfuscation and validation and other anti-tampering mechanisms.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Section2;
