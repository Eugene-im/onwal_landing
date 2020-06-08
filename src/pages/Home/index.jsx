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
          <div className="first__screen screen__page">
            <div className="background__figure_1"></div>
            <div className="background__figure_2"></div>
            <header>
              <div className="content">
                <a href="/" className="logo">
                  onwallet
                </a>
                <ul className="menu">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Download</a></li>
                  <li><a href="http://alpha.onwallet.com/#/login">Log In</a></li>
                  <li><a href="http://alpha.onwallet.com/#/register">Register</a></li>
                </ul>
              </div>
            </header>
            <div className="content first__screen_layer">

              <div className="first__screen_cont">
                <div className="screen__cont__action">
                  <h1 className="screen__cont_title">Crypto & Digital Wallet, Redefined.</h1>
                  <div className="drop">drop w'b here</div>
                  <div className="download__links">
                    <div className="download__links_title">
                      Get OnWallet for mobile
                  </div>
                    <div className="download__links_bloc">
                      <div className="download__links_qr">

                      </div>
                      <div className="download__links_market">
                        <div className="download__links_apple"></div>
                        <div className="download__links_google"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="screen__cont__image">

                </div>
              </div>
            </div>
          </div>
          <div className="second__screen screen__page">
            <div className="background__wave_1"></div>
            <div className="background__figure_1"></div>
            <div className="background__figure_2"></div>
            <div className="background__figure_3"></div>
            <div className="background__figure_4"></div>
            <div className="background__figure_5"></div>
            <div className="background__figure_6"></div>
            <div className="background__figure_7"></div>
            <div className="background__figure_8"></div>
            <div className="content">
              <h2 className="screen__title">
                One Awesome Way
              </h2>
              <div className="screen_description">
                OnWallet is a new way of simple, smart and secure investing and trading. One Awesome way to banking.
              </div>
              <div className="screen_action">
                <div className="action__item">
                  <h3 className="action__item_title">On-spot. OnWallet. Locally, Internationally.</h3>
                  <div className="action__item_description">The OnWallet payment gateway is instantaneous. With one tap, OnWallet lets you transfer/exchange FIAT or cryptocurrency anywhere, real-time with the best exchange rate and no extra fees. That’s fast, easy and cheap thanks to OnWallet’s accelerated mining.</div>
                </div>
                <div className="action__item">
                  <h3 className="action__item_title">On-spot. OnWallet. Locally, Internationally.</h3>
                  <div className="action__item_description">The OnWallet payment gateway is instantaneous. With one tap, OnWallet lets you transfer/exchange FIAT or cryptocurrency anywhere, real-time with the best exchange rate and no extra fees. That’s fast, easy and cheap thanks to OnWallet’s accelerated mining.</div>
                </div>
                <div className="action__item">
                  <h3 className="action__item_title">On-spot. OnWallet. Locally, Internationally.</h3>
                  <div className="action__item_description">The OnWallet payment gateway is instantaneous. With one tap, OnWallet lets you transfer/exchange FIAT or cryptocurrency anywhere, real-time with the best exchange rate and no extra fees. That’s fast, easy and cheap thanks to OnWallet’s accelerated mining.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="third__screen screen__page">
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
                <div className="fee__item">
                  <div className="fee__item_val">0%</div>
                  <div className="fee__item_desc">monthly fee</div>
                </div>
                <div className="fee__item">
                  <div className="fee__item_val">0%</div>
                  <div className="fee__item_desc">monthly fee</div>
                </div>
                <div className="fee__item">
                  <div className="fee__item_val">0%</div>
                  <div className="fee__item_desc">monthly fee</div>
                </div>
              </div>
            </div>
            <div className="screen_action video__action_block">
              <div className="background__for_video"></div>
              <button className="button_play_video"></button>
              <div className="button_play_video_text">Watch to discover more</div>
            </div>
            <div className="screen_action">
              <div className="content">
                <div className="screen_description">
                  Low fees on other transactions
                </div>
                <div className="block__fee second">
                  <div className="fee__item">
                    <div className="fee__item_val">0%</div>
                    <div className="fee__item_desc">monthly fee</div>
                  </div>
                  <div className="fee__item">
                    <div className="fee__item_val">0%</div>
                    <div className="fee__item_desc">monthly fee</div>
                  </div>
                  <div className="fee__item">
                    <div className="fee__item_val">0%</div>
                    <div className="fee__item_desc">monthly fee</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn">Get OnWallet Now</button>
          </div>
          <div className="foth__screen screen__page">
            <div className="background__figure_1"></div>
            <div className="background__figure_2"></div>
            <div className="background__figure_3"></div>
            <div className="background__figure_4"></div>
            <div className="background__figure_5"></div>
            <div className="background__figure_6"></div>
            <div className="background__figure_7"></div>
            <div className="content">
              <h2 className="screen__title">
                Deho Cryptocurrency
              </h2>
              <div className="screen_description">
                Deho is the first digital coin that is protected by gold by default. This makes your crypto investments securest.
              </div>
            </div>

            <div className="screen_action first">
              <div className="background__wave_2"></div>
              <div className="screen_action__img"></div>
            </div>
            <div className="content">
              <div className="screen_description">
                We’ve built Deho to run on a hybrid-decentralized architecture. This means your Deho digital currency is also protected using a Private key, making it the securest cryptocurrencies yet.
              </div>
              <div className="screen_action xxx">
                <div className="action__item">
                  <h3 className="action__item_title">Deho is as real as Gold</h3>
                  <div className="action__item_description">Every Deho coin you buy gets linked to Gold. 50% of one Deho coin’s value gets linked to real Gold. The remaining 50% of the Crypto value is in your OnWallet Account.</div>
                </div>
                <div className="action__item">
                  <h3 className="action__item_title">Deho is Recoverable</h3>
                  <div className="action__item_description">We use tunnel protection – an industry standard SSL and proprietary transport layer to protect information passing through the internet to prevent theft. One-tap and recover your coin, simple as that!</div>
                </div>
                <div className="action__item">
                  <h3 className="action__item_title">Privacies? No Worries!</h3>
                  <div className="action__item_description">We operate anonymous and private using boundary based private ledger. With the hybrid-decentralized architecture, your ledger will not go public and it will remain private, locked using your own private key. Also, it runs on a smart block chain ledger that tracks the movement of the coin and registers it with OnWallet.</div>
                </div>
              </div>
              <button className="btn">Trade Deho with OnWallet</button>
            </div>
          </div>
          <div className="fifth__screen screen__page">
            <div className="content">
              <h2 className="screen__title">
                Rich Functionality
              </h2>
              <div className="screen_action">
                <div className="action__item first">
                  <div className="action__item_img">
                    <div className="action__item_img_phone">
                      <div className="item__1"></div>
                      <div className="item__2"></div>
                      <div className="item__3"></div>
                    </div>
                  </div>
                  <div className="action__item_desc">
                    <h3 className="action__item_title">On-spot. OnWallet. Locally, Internationally.</h3>

                    <div className="action__item_description">The OnWallet payment gateway is instantaneous. With one tap, OnWallet lets you transfer/exchange FIAT or cryptocurrency anywhere, real-time with the best exchange rate and no extra fees. That’s fast, easy and cheap thanks to OnWallet’s accelerated mining.</div>
                    <ul className="action__item_description__list">
                      <li>
                        <div className="item__img"><i className="icon transfer"></i></div>
                        <div className="item__description">

                          <h4>Transfer</h4>
                          <div>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                        </div>
                      </li>
                      <li>
                        <div className="item__img"><i className="icon recive"></i></div>
                        <div className="item__description">

                          <h4>Transfer</h4>
                          <div>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                        </div>
                      </li>
                      <li>
                        <div className="item__img"><i className="icon exchange"></i></div>
                        <div className="item__description">

                          <h4>Transfer</h4>
                          <div>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                        </div>
                      </li>
                      <li>
                        <div className="item__img"><i className="icon nfc"></i></div>
                        <div className="item__description">

                          <h4>Transfer</h4>
                          <div>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="background__circle_4"></div>
                {/* <div className="action__item">
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
                </div> */}
                <div className="background__circle_5"></div>
                {/* <div className="action__item">
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
                </div> */}
                <div className="background__circle_6"></div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="background__wave_3"></div>
          <div className="content">
            <div className="fline">
              <a href="/" className="logo">
                onwallet
                </a>
              <ul className="menu">
                <li><a href="#"><i className="icon os ios"></i></a></li>
                <li><a href="#"><i className="icon os macos"></i></a></li>
                <li><a href="#"><i className="icon os android"></i></a></li>
                <li><a href="#"><i className="icon os windows"></i></a></li>
              </ul>
            </div>
            <div className="footer__text_section">
              Banking services provided by OnWallet or Members FDIC. OnWallet Visa® Debit Card is issued by The Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted. The OnWallet Visa® Credit Builder Card is issued by Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa credit cards are accepted. Please see back of your Card for its issuing bank. Please note: By clicking on some of the links above, you can leave OnWallet website and be directed to an external website. The privacy policies of the external website may differ from our privacy policies. Please review the privacy policies and security indicators displayed on the external website before providing and personal information.
          </div>
            <div className="footer__text__privacy">
              <div className="footer__text__copyright">
                Ⓒ 2020 OnWallet. All rights reserved.
            </div>
              <a href="#" className="footer__text__privacy_policy">
                Privacy Policy
            </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="overflow">
        <div className="no_design">
          design in progress
        </div>
      </div>
    </>
  );
};

const UpButton = () => <Link to="/#main" className="up-button hide"></Link>;

export default Home;
