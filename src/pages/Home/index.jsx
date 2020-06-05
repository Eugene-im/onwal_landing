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
import MainSection from '../../components/MainSection';
import AboutUsSection from '../../components/AboutUsSection';
import TechnologySection from '../../components/TechnologySection';
import ProductsSection from '../../components/ProductsSection';
import SolutionSection from '../../components/SolutionSection';
import ContactUsSection from '../../components/ContactUsSection';
import Footer from '../../components/Footer';

import { HashLink as Link } from 'react-router-hash-link';
import './index.scss';
import config from 'config';

const Home = props => {
  const { data } = props.location;
  console.log('loader', data | '');
  useEffect(() => {
    const wrapper = document.body;
    const header = document.querySelector('.Header-container');
    const upButton = document.querySelector('.up-button');

    if (!wrapper || !header || !upButton) return;

    const scrollHandler = () => {
      if (window.pageYOffset > 20) {
        header.classList.add('sticky');
        upButton.classList.remove('hide');
      } else if (header.classList.contains('sticky')) {
        header.classList.remove('sticky');
        upButton.classList.add('hide');
      }
    };
    window.addEventListener('scroll', scrollHandler);

    const upButtonClickHandler = () => {
      if (header.classList.contains('sticky')) {
        header.classList.remove('sticky');
      }
    };
    upButton.addEventListener('click', upButtonClickHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  useEffect(() => {
    /* Send to GoogleAnalytics screen view event */
    if (config.useGoogleAnalytics && window.gtag) {
      window.gtag('event', 'screen_view', {
        app_name: config.googleAnalytics.app_name,
        screen_name: config.googleAnalytics.screen_name,
        event_callback: () => console.log('Page Home View'),
      });
    }
  }, []);
  return (
    <>
      <div className="wrapper">
        <MainSection />
        <AboutUsSection />
        <TechnologySection />
        <ProductsSection />
        <SolutionSection />
        <ContactUsSection />
        <Footer />
      </div>
      <UpButton />
    </>
  );
};

const UpButton = () => <Link to="/#main" className="up-button hide"></Link>;

export default Home;
