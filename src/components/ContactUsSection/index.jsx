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
import React, { Component } from 'react';
import './index.scss';
import SimpleReactValidator from 'simple-react-validator';
import PopupInfo from '../PopupInfo';

// import config from 'config.js';

class ContactUsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      isError: false,
      isShowPopup: false,
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  componentDidMount() {
    this.cache();
  }

  async cache() {
    this.setState({ isShowPopup: true });
    this.setState({ isError: true });
    await new Promise(resolve => setTimeout(resolve, 50));
    this.setState({ isError: false });
    await new Promise(resolve => setTimeout(resolve, 50));
    this.setState({ isShowPopup: false });
  }

  submit(event) {
    event.preventDefault();

    if (!this.validator.allValid()) {
      return this.validator.showMessages();
    }

    fetch(
      'https://script.google.com/macros/s/AKfycbz1Ybrzd2SOl4EISI54FwKpNDUjdc-SwN3uqNVA5VBkmsmXpWY/exec',
      {
        method: 'POST',
        headers: [['Content-Type', 'application/json;charset=utf-8']],
        mode: 'no-cors',
        body: {
          name: this.state.name,
          html: `${this.state.name}<br/>${this.state.email}<br/>${this.state.phone}<br/>${this.state.message}<br/>`,
          arr: [this.state.name, this.state.email, this.state.phone, this.state.message],
        },
      }
    )
      .catch(e => {
        this.setState({ isShowPopup: true });
        this.setState({ isError: true });
        setTimeout(() => this.setState({ isShowPopup: false }), 3000);
        console.error(e);
      })
      .then(r => {
        this.setState({ isShowPopup: true });
        this.setState({ name: '' });
        this.setState({ email: '' });
        this.setState({ phone: '' });
        this.setState({ message: '' });
        this.validator.hideMessages();
        console.log(r);
        setTimeout(() => this.setState({ isShowPopup: false }), 3000);
      });

    // if (!window.grecaptcha) return;
    // window.grecaptcha
    //   .execute(config.recaptcha.site_key, { action: 'contact_form' })
    //   .then(function(token) {
    //     console.log(token, this.state);
    //     /* Do API call */
    //
    //     /* Send to GoogleAnalytics contact form success */
    //     /*if (config.useGoogleAnalytics && window.gtag) {
    //         window.gtag('event', 'contactUsSuccess', {
    //           'event_category': 'contact_us',
    //           'event_label': 'success'
    //         });
    //       }*/
    //
    //     /* Send to GoogleAnalytics contact form failed */
    //     /*if (config.useGoogleAnalytics && window.gtag) {
    //         window.gtag('event', 'contactUsSuccess', {
    //           'event_category': 'contact_us',
    //           'event_label': 'failed'
    //         });
    //       }*/
    //   });
  }

  render() {
    return (
      <section className="containerWrapper ContactSection-container">
        <div className="ContactSectionBackground">
          <div className="blur-dot ContactSection-dot"></div>
          <div className="blurLogoDot ContactSection-blurLogo"></div>
        </div>
        <div className="contentWrapper ContactSection-content">
          <div id="ContactUs" className="anchor"></div>
          <h1 className="sectionTitle">Get Nettr today</h1>
          <p className="ContactSection-subtitle sectionSubTitle">
            Is your business future ready? Know how our pricing works by letting us know your business needs
          </p>
          <form
            id="ContactForm"
            className="form ContactSection-form"
            onSubmit={this.submit.bind(this)}
          >
            <div className="ContactSection-input-wrap name">
              <label>Name</label>
              <input
                id="Name"
                type="text"
                name="Name"
                placeholder="Your name & Company name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              {this.validator.message('Name', this.state.name, 'required')}
            </div>
            <div className="ContactSection-input-wrap email">
              <label>E-mail</label>
              <input
                id="Email"
                type="email"
                name="Email"
                placeholder="Contact e-mail"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              {this.validator.message('Email', this.state.email, 'required|email')}
            </div>
            <div className="ContactSection-input-wrap phone">
              <label>Contact Phone</label>
              <input
                id="Phone"
                type="phone"
                name="Phone"
                placeholder="+XX XX XXXX XXXX"
                value={this.state.phone}
                onChange={e => this.setState({ phone: e.target.value })}
              />
              {this.validator.message('Phone', this.state.phone, 'required|phone')}
            </div>
            <div className="ContactSection-input-wrap message">
              <label>Message</label>
              <textarea
                id="Message"
                type="text"
                name="Message"
                placeholder="What's on your mind?"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
              ></textarea>
              {this.validator.message('Message', this.state.message, 'required')}
            </div>
            <div className="ContactSection-submit">
              <button
                id="Submit"
                className="styledButton styledButtonBottom"
                type="submit"
                name="Submit"
              >
                Send message
              </button>
              <p className="ContactSection-recaptcha">
                This site is protected by reCAPTCHA and the Google{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </div>
          </form>
        </div>
        <PopupInfo type={!this.state.isError} isShow={this.state.isShowPopup} />
      </section>
    );
  }
}

export default ContactUsSection;
