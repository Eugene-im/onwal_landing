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

const Footer = () => (
  <>
    <div className="Footer-up">
      <div className="contentWrapper Footer-up-content">
        <div className={'Footer-column'}>
          <div className="Footer-logo"></div>
        </div>

        <div className={'Footer-column'}>
          <ul className={'col__office'}>
            <li className={'row__place row__country'}>United States</li>
            <li className={'row__place'}>101 Main Street<span className="coma">,</span></li>
            <li className={'row__place'}>Suite 1, Tappan<span className="coma">,</span></li>
            <li className={'row__place'}>New York 10983</li>
          </ul>
          {/* <p className="paragraph">
            <strong>United States</strong>
            <span>101 Main Street<br/>Suite 1, Tappan<br/>New York 10983</span>
           </p> */}
        </div>

        <div className={'Footer-column'}>
          <ul className={'col__office'}>
            <li className={'row__place row__country'}>United Kingdom</li>
            <li className={'row__place'}>4th Floor Portman House<span className="coma">,</span></li>
            <li className={'row__place'}>2 Portman Street, W1H 6DU<span className="coma">,</span></li>
            <li className={'row__place'}>London</li>
          </ul>
          {/* <p className="paragraph">
            <strong>United Kingdom</strong>
            <span>4th Floor Portman House,<br/>2 Portman Street, W1H 6DU,<br/>London</span>
          </p> */}
        </div>

        <div className={'Footer-column'}>
          <ul className={'col__office'}>
            <li className={'row__place row__country'}>India</li>
            <li className={'row__place'}>iKeva Level 2<span className="coma">,</span></li>
            <li className={'row__place'}>TVH Agnitio Tech Park<span className="coma">,</span></li>
            <li className={'row__place'}>Perungudi, Chennai, 600 096</li>
          </ul>
          {/* <p className="paragraph">
            <strong>India</strong>
            <span>iKeva Level 2,<br />TVH Agnitio Tech Park,<br />Perungudi, Chennai, 600 096</span>
          </p> */}
        </div>

        <div className={'Footer-column first-on-mobile'}>
          {/* <p className="paragraph"> */}
            <a className={"phone_icon"} href="tel:+44 207 034 5580"><span>+44 207 034 5580</span></a>
            <a className={"email_icon"} href="mailto:info@nettr.com"><span>info@nettr.com</span></a>
          {/* </p> */}
        </div>
      </div>

    </div>
    <footer className="Footer-container">
      <div className="contentWrapper Footer-content">
        <span>Ⓒ 2020 Nettr Inc. All rights reserved.</span>
        {/* <a href="#">Terms of Service</a> */}
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  </>
);

export default Footer;
