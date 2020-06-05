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
import React, { useEffect, useState } from 'react';
import './index.scss';
import BurgerMenu from './BurgerMenu/index.jsx';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [subPageClass, setSubPageClass] = useState('');
  useEffect(() => {
    const navTechnologyContainer = document.querySelector('.Nav-technology-container');
    const navProductsContainer = document.querySelector('.Nav-products-container');
    const subnavTechnologyContainer = document.querySelector('.Subnav-technology-container');
    const subnavProductsContainer = document.querySelector('.Subnav-products-container');
    const technologySubLinks = document.querySelectorAll('.Subnav-technology-item-link');
    const productsSubLinks = document.querySelectorAll('.Subnav-products-item-link');

    if (!navTechnologyContainer || !subnavTechnologyContainer || !technologySubLinks) return;

    const showTechnologySubmenuHandler = () => {
      subnavTechnologyContainer.classList.add('Subnav-container-visible');
    };

    const hideTechnologySubmenuHandler = () => {
      subnavTechnologyContainer.classList.remove('Subnav-container-visible');
    };

    const showProductsSubmenuHandler = () => {
      subnavProductsContainer.classList.add('Subnav-container-visible');
    };

    const hideProductsSubmenuHandler = () => {
      subnavProductsContainer.classList.remove('Subnav-container-visible');
    };

    navTechnologyContainer.addEventListener('mouseover', showTechnologySubmenuHandler);
    navTechnologyContainer.addEventListener('mouseout', hideTechnologySubmenuHandler);
    navProductsContainer.addEventListener('mouseover', showProductsSubmenuHandler);
    navProductsContainer.addEventListener('mouseout', hideProductsSubmenuHandler);

    for (let i = 0; i < technologySubLinks.length; ++i) {
      technologySubLinks[i].addEventListener('click', hideTechnologySubmenuHandler);
    }

    for (let i = 0; i < productsSubLinks.length; ++i) {
      productsSubLinks[i].addEventListener('click', hideProductsSubmenuHandler);
    }

    const eventForHeader = e => {
      console.log('eventForHeader', e.detail);
      setSubPageClass(e.detail.subPageClass);
    };

    document.addEventListener('event-for-header', eventForHeader);

    return () => {
      document.removeEventListener('event-for-header', eventForHeader);
    };
  }, []);

  const back = e => {
    e = e || window.event;
    e.preventDefault();
    window.history.go(-1);
  };

  return (
    <header className={`Header-container`}>
      <div className={`TechWrapperBackLink RequestTrialP-back mob ${subPageClass}`} onClick={back}>
        <div></div>
      </div>
      <Link to="/#main" className="Header-logo"></Link>
      <nav className="Header-navigation">
        <ul className="Navigation-container">
          <li className="Navigation-item">
            <span className="Navigation-item-line"></span>
            <Link to="/#AboutUs" className="Navigation-item-text">
              About Us
            </Link>
          </li>
          <li className="Navigation-item subnav Nav-technology-container">
            <span className="Navigation-item-line"></span>
            <Link to="/#Technology" className="Navigation-item-text">
              Technology
            </Link>
            <span className="Subnav-arrow"></span>
            <ul className="Subnav-technology-container">
              <Link className="Subnav-technology-item-link" to="/one-protocol">
                <li className="Subnav-item">
                  <span className="subnav-icon first"></span>
                  <div className="Subnav-text">
                    <h1>One Protocol</h1>
                    <p>Universal Streaming Protocol</p>
                  </div>
                </li>
              </Link>
              <Link className="Subnav-technology-item-link" to="/one-player">
                <li className="Subnav-item">
                  <span className="subnav-icon second"></span>
                  <div className="Subnav-text">
                    <h1>One Player</h1>
                    <p>Universal Streaming Player Framework</p>
                  </div>
                </li>
              </Link>
              <Link className="Subnav-technology-item-link" to="/one-hardware">
                <li className="Subnav-item">
                  <span className="subnav-icon third"></span>
                  <div className="Subnav-text">
                    <h1>One Hardware DRM</h1>
                    <p>Universal Streaming Content Protection</p>
                  </div>
                </li>
              </Link>
              <Link className="Subnav-technology-item-link" to="/media-agnostic">
                <li className="Subnav-item">
                  <span className="subnav-icon fourth"></span>
                  <div className="Subnav-text">
                    <h1>True Media Agnostic</h1>
                    <p>Define Your Own Media Format</p>
                  </div>
                </li>
              </Link>
              <Link className="Subnav-technology-item-link" to="/multi-cast">
                <li className="Subnav-item">
                  <span className="subnav-icon fifth"></span>
                  <div className="Subnav-text">
                    <h1>Nano Multi-Cast</h1>
                    <p>Smooth Playback and Bandwidth Savings</p>
                  </div>
                </li>
              </Link>
              <Link className="Subnav-technology-item-link" to="/packager">
                <li className="Subnav-item">
                  <span className="subnav-icon sixth"></span>
                  <div className="Subnav-text">
                    <h1>NMPS Packager</h1>
                    <p>Package any codecs for NMPS Streaming</p>
                  </div>
                </li>
              </Link>
            </ul>
          </li>
          <li className="Navigation-item subnav Nav-products-container">
            <span className="Navigation-item-line"></span>
            <Link to="/#Products" className="Navigation-item-text">
              Products
            </Link>
            <span className="Subnav-arrow"></span>
            <ul className="Subnav-products-container">
              <Link className="Subnav-products-item-link" to="/nettr-streaming-sdk">
                <li className="Subnav-item">
                  <span className="subnav-icon first"></span>
                  <div className="Subnav-text">
                    <h1>Streaming SDK</h1>
                    <p>Live & On-demand Streaming</p>
                  </div>
                </li>
              </Link>
              <Link className="Subnav-products-item-link" to="/ndrm">
                <li className="Subnav-item">
                  <span className="subnav-icon second"></span>
                  <div className="Subnav-text">
                    <h1>Digital Rights Management</h1>
                    <p>Cross-platform DRM Technology</p>
                  </div>
                </li>
              </Link>
            </ul>
          </li>
          <li className="Navigation-item">
            <span className="Navigation-item-line"></span>
            <Link to="/#Solutions" className="Navigation-item-text">
              Solutions
            </Link>
          </li>
          <li className="Navigation-item">
            <span className="Navigation-item-line"></span>
            <Link to="/#ContactUs" className="Navigation-item-text">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/request-trial" className="Header-request-button">
        Request Trial
      </Link>
      <BurgerMenu />
    </header>
  );
};

export default Header;
