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

const AboutUsSection = () => (
  <section className="containerWrapper AboutSection-container">
    <div className="content_section">
      <div id="AboutUs" className="anchor"></div>
      <h1 className="sectionTitle">About us</h1>
      <div className="section_about">
        {/* <div className="about_image__wrap"> */}
          <div className="about_image first"></div>
        {/* </div> */}
        <div className="about_text">
          <div className="about_title sectionSubTitle">
            Our Motto
          </div>
          <div className="about_description_big">
            To deliver immersive secured, simplified and sophisticated content in all forms, across all platforms.
          </div>
          <div className="about_description_small">
            At Nettr we are motivated to transform and simplify barriers in streaming for content creators in all forms and across all platforms. Our talented minds have simplified, yet revolutionized media delivery by developing cutting-edge, upgraded and unified streaming technologies that solves the complexity of content delivery across multiple devices in multiple forms. Nettr sets a new standard for content delivery and provides lossless video and audio experiences for content creators on desktops, phones or Smart TVs with its immersive one cross-platform Software Development Kit (SDK).
          </div>
        </div>
      </div>
      <div className="section_about">
        <div className="about_image second"></div>
        <div className="about_text">
          <div className="about_title sectionSubTitle">
            Vision for the Future
          </div>
          <div className="about_description_big">
            Vividly committed to improve people’s lives and determined to lead the global streaming technology market.
          </div>
          <div className="about_description_small">
            With customer satisfaction at the helm, Nettr foresees a whole new level of interactivity for content creators, wherever they want; from entertainment services, gaming and education to healthcare, military and security and Internet-of-Things. The Nettr SDK removes the many-layered complexities for content creators that they deal with while using legacy streaming technologies. With the Nettr SDK vendors can now stream in any format/Codec of their choice while they get a fully native and immersive experience using our ONE solution.
          </div>
        </div>
      </div>
    </div>
    {/* <div className="AboutUsBackground">
      <div className="blur-dot AboutSection-dot"></div>
      <div className="blurLogoDot AboutSection-blurLogo"></div>
    </div>
    <div className="contentWrapper AboutSection-content">
      <div id="AboutUs" className="anchor"></div>
      <h2 className="sectionTitle">Our Motto</h2>
      <p className="sectionSubTitle">
        To deliver immersive secured, simplified and sophisticated content in all forms, across all
        platforms.
      </p>
      <div className="AboutSection-colums">
        <div className="AboutSection-image">
          <span></span>
        </div>
        <p className="AboutSection-text">
          At Nettr we are motivated to transform and simplify barriers in streaming for content
          creators in all forms and across all platforms. Our talented minds have simplified, yet
          revolutionized media delivery by developing cutting-edge, upgraded and unified streaming
          technologies that solves the complexity of content delivery across multiple devices in
          multiple forms. Nettr sets a new standard for content delivery and provides lossless video
          and audio experiences for content creators on desktops, phones or Smart TVs with its
          immersive one cross-platform Software Development Kit (SDK).
        </p>
      </div>
      <h2 className="sectionTitle">Vision for the Future</h2>
      <p className="sectionSubTitle">
        Vividly committed to improve people’s lives and determined to lead the global streaming
        technology market.
      </p>
      <div className="AboutSection-colums">
        <div className="AboutSection-image">
          <span></span>
        </div>
        <p className="AboutSection-text">
          With customer satisfaction at the helm, Nettr foresees a whole new level of interactivity
          for content creators, wherever they want; from entertainment services, gaming and
          education to healthcare, military and security and Internet-of-Things. The Nettr SDK
          removes the many-layered complexities for content creators that they deal with while using
          legacy streaming technologies. With the Nettr SDK vendors can now stream in any
          format/Codec of their choice while they get a fully native and immersive experience using
          ONE our solution.
        </p>
      </div>
    </div> */}
  </section>
);

export default AboutUsSection;
