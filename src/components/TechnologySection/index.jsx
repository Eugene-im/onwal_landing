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
import { Link } from 'react-router-dom';

const TechnologySection = () => (
  <section className="containerWrapper TechSection-container">
    <div className="Background top"></div>
    <div className="Background bottom"></div>
    <div className="contentWrapper TechSection-content">
      <div id="Technology" className="anchor"></div>
      <h1 className="sectionTitle">Technology</h1>
      <div className="TechSection-grid">
        <div id="Protocol" className="TechSection-item">
          <Link to="/one-protocol" className="mobile-link"></Link>
          <div className="TechSection-image first"></div>
          <div className="TechSection-text">
            <h2>One Protocol</h2>
            <p>Universal streaming protocol to deliver any data</p>
            <Link to="/one-protocol" className="TechSection-learnmore">
              Learn more
            </Link>
          </div>
        </div>
        <div id="Player" className="TechSection-item">
          <Link to="/one-player" className="mobile-link"></Link>
          <div className="TechSection-image second"></div>
          <div className="TechSection-text">
            <h2>One Player</h2>
            <p>Universal streaming player to play anything (Audio, Video, Images and Docs)</p>
            <Link to="/one-player" className="TechSection-learnmore">
              Learn more
            </Link>
          </div>
        </div>
        <div id="HardwareDRM" className="TechSection-item">
          <Link to="/one-hardware" className="mobile-link"></Link>
          <div className="TechSection-image third"></div>
          <div className="TechSection-text">
            <h2>One Hardware DRM</h2>
            <p>
              NDRM is a next generation, cross-platform, and universal content protection technology
            </p>
            <Link to="/one-hardware" className="TechSection-learnmore">
              Learn more
            </Link>
          </div>
        </div>
        <div id="Media" className="TechSection-item">
          <Link to="/media-agnostic" className="mobile-link"></Link>
          <div className="TechSection-image fourth"></div>
          <div className="TechSection-text">
            <h2>True Media Agnostic</h2>
            <p>Define your own media format and codecs to deliver</p>
            <Link to="/media-agnostic" className="TechSection-learnmore">
              Learn more
            </Link>
          </div>
        </div>
        <div id="Multi-cast" className="TechSection-item">
          <Link to="/multi-cast" className="mobile-link"></Link>
          <div className="TechSection-image fifth"></div>
          <div className="TechSection-text">
            <h2>Nano Multi-Cast</h2>
            <p>Significant bandwidth savings and smooth streaming</p>
            <Link to="/multi-cast" className="TechSection-learnmore">
              Learn more
            </Link>
          </div>
        </div>
        <div id="NMPS" className="TechSection-item">
          <Link to="/packager" className="mobile-link"></Link>
          <div className="TechSection-image sixth"></div>
          <div className="TechSection-text">
            <h2>NMPS Packager</h2>
            <p>Packages any file formats and codecs to NMPS compliant structure</p>
            <Link to="/packager" className="TechSection-learnmore">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechnologySection;
