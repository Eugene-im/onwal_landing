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

const ProductsSection = () => (
  <section className="containerWrapper ProductsSection-container">
    <div className="ProductsSectionBackground"></div>
    <div className="contentWrapper ProductsSection-content">
      <div id="Products" className="anchor"></div>
      <h1 className="sectionTitle">Products</h1>
      <div className="ProductsSection-grid">
        <Link to="/nettr-streaming-sdk">
          <div className="ProductsSection-card">
            <h2>Streaming SDK</h2>
            <p>
              The Nettr Streaming Software Development Kit (SDK) offers an immersive solution for content creators who want real-time, live and                 on-demand streaming. Nettr SDK is developed to provide a simplistic yet complete streaming solution from delivery protocol,                       end-to-end streaming delivery and player control to DRM and API integration.
            </p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className="ProductsSection-fullinfo">
              <span>Full info</span>
            </div>
          </div>
        </Link>

        {/*<a href="https://vollome.com">*/}
        {/*  <div className="ProductsSection-card">*/}
        {/*    <h2>Vollome Platform</h2>*/}
        {/*    <p>*/}
        {/*      Vollome Platform is a professional end-to-end broadcast delivery solution for any content*/}
        {/*      owners.*/}
        {/*      Ingest (Live or On-demand), Advanced Management System (Manage channel, Manage subscribers, Manage tariff,*/}
        {/*      Manage cache), Delivery (Vollome CDN Partners), Nettr Streaming SDK powered Apps or Programs.*/}
        {/*    </p>*/}
        {/*    /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
        {/*    <a href="https://vollome.com" className="ProductsSection-fullinfo">*/}
        {/*      Full info*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*</a>*/}

        <Link to="/ndrm">
          <div className="ProductsSection-card">
            <h2>Digital Rights Management</h2>
            <p>
              Security is serious for content creators. Nettr&#180;s DRM is built using unique algorithms and techniques based on                               industry-standards for protecting audio, video and all of your data by applying rights to media. Supported for Windows, MacOS,                    Linux, Android, iOS and Embedded platforms, the Nettr DRM is a next-generation protection system.
            </p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className="ProductsSection-fullinfo">
              <span>Full info</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

export default ProductsSection;
