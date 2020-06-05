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

const SolutionSection = () => (
  <section className="containerWrapper SolutionsSection-container">
    <div className="contentWrapper SolutionsSection-content">
      <div id="Solutions" className="anchor"></div>
      <h1 className="sectionTitle">Solutions</h1>
      <p className="sectionSubTitle solutionSubTitle">
        Nettr is one product with diverse solutions.
        <span className="solutionSubTitleText">
          Ranging from small business enterprises to global enterprises looking for efficient market performance and robust technology, Nettr technologies offer ONE solution for redefining how businesses work. The expansive application of Nettr Technologies is not limited to the following sectors. However, Nettr is focused on improving innovation and helping service industries to modernize and stay competent in the market from the entertainment services to Internet-of-Things.
        </span>
      </p>
      <div className="SolutionsSection-gridWrapper">
        <div className="SolutionsSection-grid">
          <div className="SolutionsSection-item">
            <div className="SolutionsSection-image first"></div>
            <h2>The entertainment industry</h2>
            <p>
              For content creators in the entertainment industry, Nettr SDK help them benefit from lossless object-based audio and master quality streaming across every device by reducing transcoding, bandwidth cost and storage.
            </p>
          </div>
          <div className="SolutionsSection-item">
            <div className="SolutionsSection-image second"></div>
            <h2>Education</h2>
            <p>
              Nettr streaming SDK helps educators and learners develop applications in minutes to collaborate and interact on the digital landscape in a SMART and real-time basis.
            </p>
          </div>
          <div className="SolutionsSection-item">
            <div className="SolutionsSection-image third"></div>
            <h2>Healthcare</h2>
            <p>
              Nettr streaming SDK will revolutionize surgical procedures. For content creators in the healthcare industry, it is not limited to conducting interactive health webinars, staff training and emergency protocol training.
            </p>
          </div>
          <div className="SolutionsSection-item">
            <div className="SolutionsSection-image fourth"></div>
            <h2>Gaming</h2>
            <p>
              With Nettr Streaming technology, indoor is the new outdoor. The adaptive low level protocols and real-time, live and on-demand SDK, live events will be delivered in video and audio quality that is breathtaking.
            </p>
          </div>
          <div className="SolutionsSection-item">
            <div className="SolutionsSection-image fifth"></div>
            <h2>Military and Security</h2>
            <p>
              The NMPS pre-integrated with the Nettr DRM is built-in with military grade security and is designed to work seamlessly across CCTV, police, transport, space and confidential areas.
            </p>
          </div>
          <div className="SolutionsSection-item">
            <div className="SolutionsSection-image sixth"></div>
            <h2>Internet-of-Things</h2>
            <p>
              Nettr is not just created for the professionals but also for the consumers. As we’ve focused our future on customer satisfaction and improving customers’ lives, the Nettr technology built-in with e-payment protocol and MQTT is designed for smart streaming.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="background-triangle">
      <div className="background-triangle-gradient"></div>
    </div>
  </section>
);

export default SolutionSection;
