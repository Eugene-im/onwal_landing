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
        <main>
          <div className="first__screen">
            <div className="background__circle_1"></div>
            <div className="background__circle_2"></div>
            <header>
              <div className="content">
                <a href="#" className="logo">
                  onwallet
                </a>
                <ul className="menu">
                  <li><a href="#">Download</a></li>
                  <li><a href="#">Log In</a></li>
                  <li><a href="#">Register</a></li>
                </ul>
              </div>
            </header>
            <div className="first__screen_cont">
              <div className="screen__cont__action">
                <h1 className="screen__cont_title">Crypto & Digital Wallet, Redefined.</h1>
                <div className="drop">drop w'b here</div>
                <div className="download__links">
                  <div className="download__links_title">
                    Get OnWallet for mobile
                  </div>
                  <div className="download__links_bloc">
                    <div className="download__links_qr"></div>
                    <div className="download__links_market">
                      <div className="download__links_apple"></div>
                      <div className="download__links_google"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen__cont__image"></div>
            </div>
          </div>
          <div className="second__screen">
            <div className="background__wave_1"></div>
            <div className="content">
              <h2 className="screen__title">
                One Awesome Way
              </h2>
              <div className="screen_description">
                OnWallet is a new way of simple, smart and secure investing and trading. One Awesome way to banking.
              </div>
              <div className="screen_action">
                <div className="action__item">
                  <div className="action__item_img"></div>
                  <div className="action__item_title">Dashboard</div>
                  <div className="action__item_description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint</div>
                </div>
              </div>
            </div>
          </div>
          <div className="third__screen">
            <div className="content">
              <h2 className="screen__title">
                The 0% Rule
              </h2>
              <div className="screen_description">
                OnWallet is a multi-currency block chain wallet supporting cryptocurrencies and FIAT currencies. Check out our fees.
              </div>
              <div className="block__fee first">
                <div className="fee__item">
                  <div className="fee__item_val">0%</div>
                  <div className="fee__item_desc">monthly fee</div>
                </div>
              </div>
            </div>
            <div className="screen_action">
              <div className="background__for_video"></div>
              <div className="content">
                <div className="button_play_video"></div>
              </div>
            </div>
            <div className="screen_action">
              <div className="content">
                <div className="block__fee second">
                  <div className="fee__item">
                    <div className="fee__item_val">0%</div>
                    <div className="fee__item_desc">monthly fee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foth__screen">
            <div className="content">
              <h2 className="screen__title">
                Deho Cryptocurrency
              </h2>
              <div className="screen_description">
                Deho is the first digital coin that is protected by gold by default. This makes your crypto investments securest.
              </div>
              <div className="screen_action">
                <div className="background__wave_2"></div>
                <div className="screen_action__img"></div>
              </div>
              <div className="screen_description">
                We’ve built Deho to run on a hybrid-decentralized architecture. This means your Deho digital currency is also protected using a Private key, making it the securest cryptocurrencies yet.
              </div>
              <div className="screen_action">
                <div className="action__item">
                  <div className="action__item_img"></div>
                  <div className="action__item_title">Deho is as real as Gold</div>
                  <div className="action__item_description">Every Deho coin you buy gets linked to Gold. 50% of one Deho coin’s value gets linked to real Gold. The remaining 50% of the Crypto value is in your OnWallet Account.</div>
                </div>
                <div className="action__item">
                  <div className="action__item_img"></div>
                  <div className="action__item_title">Deho is Recoverable</div>
                  <div className="action__item_description">We use tunnel protection – an industry standard SSL and proprietary transport layer to protect information passing through the internet to prevent theft. One-tap and recover your coin, simple as that!</div>
                </div>
                <div className="action__item">
                  <div className="action__item_img"></div>
                  <div className="action__item_title">Privacies? No Worries!</div>
                  <div className="action__item_description">We operate anonymous and private using boundary based private ledger. With the hybrid-decentralized architecture, your ledger will not go public and it will remain private, locked using your own private key. Also, it runs on a smart block chain ledger that tracks the movement of the coin and registers it with OnWallet.</div>
                </div>
              </div>
            </div>
            <button className="button">Trade Deho with OnWallet</button>
            <div className="background__circle_3"></div>
          </div>
          <div className="fifth__screen">
            <div className="content">
              <h2 className="screen__title">
                Rich Functionality
              </h2>
              <div className="screen_action">
                <div className="action__item">
                  <div className="action__item_img"></div>
                  <div className="action__item_desc">
                    <h3 className="action__item_title">On-spot. OnWallet. Locally, Internationally.</h3>

                    <div className="action__item_description screen_description">The OnWallet payment gateway is instantaneous. With one tap, OnWallet lets you transfer/exchange FIAT or cryptocurrency anywhere, real-time with the best exchange rate and no extra fees. That’s fast, easy and cheap thanks to OnWallet’s accelerated mining.</div>
                    <ul className="action__item_description__list">
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="background__circle_4"></div>
                <div className="action__item">
                  <div className="action__item_img"></div>
                  <div className="action__item_desc">
                    <h3 className="action__item_title">On-spot. OnWallet. Locally, Internationally.</h3>

                    <div className="action__item_description screen_description">The OnWallet payment gateway is instantaneous. With one tap, OnWallet lets you transfer/exchange FIAT or cryptocurrency anywhere, real-time with the best exchange rate and no extra fees. That’s fast, easy and cheap thanks to OnWallet’s accelerated mining.</div>
                    <ul className="action__item_description__list">
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="background__circle_5"></div>
                <div className="action__item">
                  <div className="action__item_img"></div>
                  <div className="action__item_desc">
                    <h3 className="action__item_title">On-spot. OnWallet. Locally, Internationally.</h3>

                    <div className="action__item_description screen_description">The OnWallet payment gateway is instantaneous. With one tap, OnWallet lets you transfer/exchange FIAT or cryptocurrency anywhere, real-time with the best exchange rate and no extra fees. That’s fast, easy and cheap thanks to OnWallet’s accelerated mining.</div>
                    <ul className="action__item_description__list">
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                      <li>
                        <h4>Transfer</h4>
                        <div>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="background__circle_6"></div>
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

const UpButton = () => <Link to="/#main" className="up-button hide"></Link>;

export default Home;
