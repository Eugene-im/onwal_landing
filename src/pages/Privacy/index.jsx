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
// import React from 'react';
// import TechWrapper from 'shared/components/TechWrapper/index.jsx';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
class Privacy extends Component {
  componentDidMount() {
    const header = document.querySelector('.Header-container');
    if (!header) return;
    header.classList.add('hide');
    document.body.querySelector('.Header-container').classList.add('mobile_request_trial');
  }

  componentWillUnmount() {
    const headers = document.querySelectorAll('.Header-container');
    headers.forEach(header => {
      header.classList.remove('sticky');
      header.classList.remove('hide');
    });
    document.body.querySelector('.Header-container').classList.remove('mobile_request_trial');
  }

  back(e) {
    e = e || window.event;
    e.preventDefault();
    window.history.back();
  }

  render() {
    return (
      <section>
        <div className="RequestTrialP">
          <div className="RequestTrialP__body">
            <div className="RequestTrialP__body-right">
              <div className="TechWrapperBackLink top RequestTrialP-back">
                <Link to="#" onClick={this.back}>
                  Back
                </Link>
              </div>
              <div className="RequestTrialP__form privacy__spec">
                <h1 className="PrivacyTitle">Privacy</h1>
                <h2 className="TechArticleTitle">1. Use of Cookies</h2>
                <p className="TechArticleText">
                  We use cookies on our site for Google Analytics. Google Analytics is a web
                  analytics tool that helps website owners understand how visitors engage with their
                  website. Google Analytics customers can view a variety of reports about how
                  visitors interact with their website so that they can improve it. Like many
                  services, Google Analytics uses first-party cookies to track visitor interactions
                  as in our case, where they are used to collect information about how visitors use
                  our site. We then use the information to compile reports and to help us improve
                  our site. Google Analytics collects information anonymously. It reports website
                  trends without identifying individual visitors.
                  <br />
                  <br />
                  You may refuse or delete cookies by activating the setting on your browser which
                  allows you to refuse or delete the setting of cookies. However, if you select this
                  setting you may be unable to access certain parts of our site.
                  <br />
                  <br />
                  You may opt out of Google Analytics without affecting how you visit our site – for
                  more information on opting out of being tracked by Google Analytics across all
                  websites you use, visit this Google page.
                </p>
                <h2 className="TechArticleTitle">2. Information We Collect</h2>
                <p className="TechArticleText">
                  This Privacy Policy explains what happens to any personal data that you provide to
                  us, or that we collect from you whilst you visit our site. Information we collect
                  in running and maintaining our website we may collect and process the following
                  data about you:
                  <br />
                  <br />
                  2.1. We might collect and use information about your computer (such as your IP
                  address, operating system and browser type) for system administration and
                  reporting. This information that we collect is statistical data about your
                  browsing history (includes traffic data, location data and other communication
                  data) but does not identify any individual. For the same reasons, we may collect
                  information about your general internet usage by using a cookie file which is
                  stored on the hard drive of your computer. Cookies contain information that is
                  transferred to your computer’s hard drive. They help us to improve our site and to
                  deliver a better and more personalized service.
                  <br />
                  2.2. Information provided voluntarily by you. For example, when you register.
                  <br />
                  2.3. Information that you provide when you communicate with us by any means.
                </p>
                <h2 className="TechArticleTitle">3. How Nettr Uses Your Information</h2>
                <p className="TechArticleText">
                  Nettr may use your information:
                  <br />
                  <br />
                  3.1. to provide you with personalized content;
                  <br />
                  3.2. to process and respond to inquiries;
                  <br />
                  3.3. for the purposes for which you provided the information;
                  <br />
                  3.4. to improve the content and navigability of the Website;
                  <br />
                  3.5. to alert you to new features, special events, and service offerings including
                  our newsletter; and (vi) to enforce the Terms of Use.
                </p>
                <h2 className="TechArticleTitle">4. Information Sharing with Third Parties</h2>
                <p className="TechArticleText">
                  Nettr may disclose your personally identifiable information to another entity:
                  <br />
                  <br />
                  4.1. for purposes of outsourcing one or more of the functions or services
                  described in the previous section;
                  <br />
                  4.2. to confirm or update information provided by you;
                  <br />
                  4.3. to inform you of events, information about our services, and other important
                  information, or
                  <br />
                  4.4. for other purposes disclosed at or before the time the information is
                  collected. If you tell us you wish to attend an event appearing on the Website,
                  your name and organization may appear on a list which we provide to other
                  delegates at the event. Nettr may also share your information when legally
                  required to do so.
                </p>
                <h2 className="TechArticleTitle">5. How We Collect Information</h2>
                <p className="TechArticleText">
                  In addition to the methods described above, we and our service providers collect
                  information using cookies, web beacons, pixel tags or similar digital marker
                  technologies. These methods permit us to collect various types of information,
                  including which pages you visit, which of our newsletter articles you clicked on,
                  and other information. We and our service providers use this information to
                  monitor and improve our Website and to show you advertisements about Nettr when
                  you visit other sites. For more details on how we use cookies, see our Cookie
                  Policy. For general guidance on cookies, please visit:{' '}
                  <a href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</a>
                </p>
                <h2 className="TechArticleTitle">6. How We Protect Information.</h2>
                <p className="TechArticleText">
                  Nettr attempts to protect against the loss, misuse and alteration of your personal
                  information. Nettr has implemented reasonable administrative, technical and
                  physical measures to protect your personal information.
                </p>
                <h2 className="TechArticleTitle">
                  7. How You Can View Or Update Your Personal Information
                </h2>
                <p className="TechArticleText">
                  You have control over your personally identifiable and other personal information.
                  You may request to update your information by contacting us or at:{' '}
                  <a href="mailto:support@nettr.com">support@nettr.com</a>. We will use reasonable
                  efforts to process any change you make within a reasonable time frame, subject to
                  Nettr’s internal reporting and retention policies and all applicable legal
                  obligations.
                </p>
                <h2 className="TechArticleTitle">8. Opt-Out</h2>
                <p className="TechArticleText">
                  If you prefer not to receive any further communications, please email us at:{' '}
                  <a href="mailto:support@nettr.com">support@nettr.com</a> and put in the subject
                  line “Data removal”.
                  <br />
                  <br />
                  If you no longer use wish to use our Website and also wish to have your data
                  erased, please email us at:{' '}
                  <a href="mailto:support@nettr.com">support@nettr.com</a> and put in the subject
                  line “Nettr User removal and data erasure request”.
                </p>
                <h2 className="TechArticleTitle">9. Changes to this Policy and Effective Date</h2>
                <p className="TechArticleText">
                  From time to time, we may change this Policy. Changes to this Policy are effective
                  as of the Effective Date stated below, and indicates the last time this Policy was
                  revised or materially changed. Your continued use of the Website indicates your
                  consent to the changes to this Policy.
                </p>
                <h2 className="TechArticleTitle">10. Links</h2>
                <p className="TechArticleText">
                  The Website may contain links to third-party websites. Nettr is not responsible
                  for the privacy practices or the content of such websites.
                </p>
                <h2 className="TechArticleTitle">11. Storing your personal data</h2>
                <p className="TechArticleText">
                  We do our upmost to ensure that all reasonable steps are taken to make sure that
                  your data is treated stored securely.
                  <br />
                  <br />
                  Unfortunately, the sending of information via the internet is not totally secure
                  and on occasion such information can be intercepted. We cannot guarantee the
                  security of data that you choose to send us electronically, sending such
                  information is entirely at your own risk.
                </p>
                <h2 className="TechArticleTitle">12. Contacting us</h2>
                <p className="TechArticleText">
                  Please do not hesitate to contact us regarding any matter relating to this Privacy
                  Policy at <a href="mailto:support@nettr.com">support@nettr.com</a>.
                  <br />
                  <br />
                  Last updated on January 7th, 2020.
                </p>
              </div>
              <div className="TechWrapperBackLink bot RequestTrialP-back">
                <Link to="#" onClick={this.back}>
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Privacy;
