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
import React, { useState } from 'react';
import './index.scss';
import { HashLink as Link } from 'react-router-hash-link';

const techMenu = [
  { title: 'One Protocol', to: '/one-protocol' },
  { title: 'One Player', to: '/one-player' },
  { title: 'One Hardware DRM', to: '/one-hardware' },
  { title: 'True Media Agnostic', to: '/media-agnostic' },
  { title: 'Nano Multi-Cast', to: '/multi-cast' },
  { title: 'NMPS Packager', to: '/packager' },
];

const productMenu = [
  { title: 'Streaming SDK', to: '/nettr-streaming-sdk' },
  { title: 'Digital Rights Management', to: '/ndrm' },
];

const burgerList = [
  { title: 'About Us', to: '/#AboutUs' },
  { title: 'Technology', subMenu: techMenu, state: 'techMenu' },
  { title: 'Products', subMenu: productMenu, state: 'productMenu' },
  { title: 'Solutions', to: '/#Solutions' },
  { title: 'Contact Us', to: '/#ContactUs' },
];

const BurgerMenu = () => {
  const [show, setShow] = useState(false);
  const [techMenu, setTechMenu] = useState(false);
  const [productMenu, setProductMenu] = useState(false);

  const setSubMenuState = key => {
    key === 'techMenu' ? setTechMenu(!techMenu) : setProductMenu(!productMenu);
  };

  const getState = key => {
    return key === 'techMenu' ? techMenu : productMenu;
  };

  const setBodyFix = () => {
    setShow(true);
    document.body.classList.add('noscroll');
  };
  const setBodyAddScroll = () => {
    setShow(false);
    window.scrollTo(0, 0);
    document.body.classList.remove('noscroll');
  };

  return (
    <>
      <button
        id="burgerButton"
        className="burgerButton"
        onClick={() => {
          setBodyFix();
        }}
      ></button>
      <div id="burgerContainer" className={`burgerContainer ${show ? 'show' : ''}`}>
        <div className="burgerBackground"></div>
        <div className="burgerMenuContainer">
          <div className="burgerHeader">
            <Link to="/#main" className="burgerLogo" onClick={setBodyAddScroll}></Link>
            <button id="burgerCLose" className="burgerClose" onClick={setBodyAddScroll}></button>
          </div>
          <div className="burgerMenu">
            <ul>
              {burgerList.map((item, index) => {
                if (item.subMenu) {
                  return (
                    <li
                      id="burgerSubButton"
                      className="submenu"
                      onClick={() => setSubMenuState(item.state)}
                      key={index}
                    >
                      <span className={`${getState(item.state) ? 'open' : ''}`}> {item.title} </span>
                      <ul
                        id="burgerSubMenu"
                        className={`burgerSubMenu ${getState(item.state) ? 'open' : ''}`}
                      >
                        {item.subMenu.map((subItem, subindex) => (
                          <li key={`${index}-${subindex}`}>
                            <Link to={subItem.to} onClick={setBodyAddScroll}>
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link to={item.to} onClick={setBodyAddScroll}>
                        {item.title}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="burgerRequest">
            <Link
              onClick={setBodyAddScroll}
              to="/request-trial"
              className="RequestTrialButton styledButton"
            >
              {' '}
              Request Trial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
