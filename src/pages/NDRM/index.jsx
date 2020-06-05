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
import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

import '../../components/Ndrm/scss/index.scss';
import Section1 from '../../components/Ndrm/Section1';
import Section2 from '../../components/Ndrm/Section2';
import Section3 from '../../components/Ndrm/Section3';
import Section4 from '../../components/Ndrm/Section4';
import Section5 from '../../components/Ndrm/Section5';


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Ndrm = (props) => {

  useEffect(() => {
    const header = document.querySelector('.Header-container');
    const upButton = document.querySelector('.up-button');

    if (header) {
      //always assign class 'sticky' to header on NettrSDK page
      header.classList.add('sticky');
    } else {
      return;
    }

    const sdkScrollHandler = () => {
      if (window.pageYOffset > 20) {
        upButton.classList.remove('hide');
      } else {
        upButton.classList.add('hide');
      }
    };

    window.addEventListener('scroll', sdkScrollHandler);

    const sdkUpButtonHandler = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    upButton.addEventListener('click', sdkUpButtonHandler);
    document.body.querySelector('.Header-container')
      .classList.add('mobile_subpage');
    return () => {
      header.classList.remove('sticky');
      document.body.querySelector('.Header-container')
        .classList.remove('mobile_subpage');
    };

  }, []);

    return (
      <>
        <ScrollToTopOnMount />
        <div className="wrapper-content">
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>


          <div className="ndrm-requestTrial-submit container_section">
            <div className="row justify-content-center">
              <Link to={`/request-trial`} id="RequestSubmit" className={`styledButton RequestTrialP-submitn styledButtonBottom`}>
                Request Trial
              </Link>
            </div>
          </div>

          <Footer/>
          <UpButton/>
        </div>
      </>
    );
  };




  const UpButton = () => (
    <button className="up-button hide"></button>
  );

  export default Ndrm;
