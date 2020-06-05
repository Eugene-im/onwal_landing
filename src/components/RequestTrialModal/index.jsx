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
import config from 'config.js';
import SimpleReactValidator from 'simple-react-validator';

let initialState = {
  first_name: '',
  second_name: '',
  email: '',
  alias: '',
  country: '',
  city: '',
  address: '',
  zip_post_code: '',
  duns_number: '',
  industry_id: '',
  other_industry: '',
  mobile_phone: '',
  hq_phone: '',
  organization: '',
  website: '',
  file: '',
  is_company: false,
  multifactor_enabled: false,
  show: false,
  industries: [],
};

class ContactUsSection extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;

    this.validator = new SimpleReactValidator({autoForceUpdate: this});
    this.host = 'https://ec2-34-221-15-35.us-west-2.compute.amazonaws.com';
  }

  parseJsonModal() {
    return {
      first_name: btoa(this.state.first_name),
      second_name: btoa(this.state.second_name),
      alias: btoa(this.state.alias),
      is_company: this.state.is_company,
      email: btoa(this.state.email),
      organization: btoa(this.state.organization),
      industry_id: this.state.industry_id,
      other_industry: btoa(this.state.other_industry),
      zip_post_code: btoa(this.state.zip_post_code),
      country: btoa(this.state.country),
      city: btoa(this.state.city),
      address: btoa(this.state.address),
      duns_number: btoa(this.state.duns_number),
      mobile_phone: btoa(this.state.mobile_phone),
      hq_phone: btoa(this.state.hq_phone),
      website: btoa(this.state.website),
      multifactor_enabled: this.state.multifactor_enabled,
    };
  }

  clickHandler() {
    this.setState({ show: true });
  }

  // componentDidMount() {
  //   const buttons = document.querySelectorAll('.RequestTrialButton');
  //   buttons.forEach(button => {
  //     button.addEventListener('click', this.clickHandler.bind(this));
  //   });
  //   this.loadIndustries();
  // }
  //
  // componentWillUnmount() {
  //   const buttons = document.querySelectorAll('.RequestTrialButton');
  //   buttons.forEach(button => {
  //     button.removeEventListener('click', this.clickHandler.bind(this));
  //   });
  // }

  async sendData() {
    console.log('parseJsonModal', JSON.stringify(this.parseJsonModal()));
    
    const response = await fetch(`${this.host}/user/regtrial`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(this.parseJsonModal()),
    });
    const myJson = await response.json();
    console.log('myJson', myJson);
    
    const data = new FormData();
    data.append('file', this.state.file);

    await fetch(`${this.host}/user/regtrial/doc/${myJson.vendor_id}`, { // Your POST endpoint
      method: 'POST',
      mode: 'no-cors',
      body: data,
    });
    this.reset();
  }

  reset(){
    this.setState(initialState);
    this.loadIndustries();
  }

  async loadIndustries() {
    const response = await fetch(`${this.host}/UI/Industries`);
    const industries = await response.json();
    console.log('test', industries);
    this.setState({ industries: industries });
  }


  submit(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      this.sendData();
    } else {
      this.validator.showMessages();

    }


    if (!window.grecaptcha) return;
    window.grecaptcha
      .execute(config.recaptcha.site_key, { action: 'request_trial' })
      .then(function(token) {
        console.log(token, this.state);
        /* Do API call */

        /* Send to GoogleAnalytics contact form success */
        /* if (config.useGoogleAnalytics && window.gtag) {
          window.gtag('event', 'requestTrialSuccess', {
            'event_category': 'request_trial',
            'event_label': 'success'
          });
        } */

        /* Send to GoogleAnalytics contact form failed */
        /*if (config.useGoogleAnalytics && window.gtag) {
          window.gtag('event', 'requestTrialFailed', {
          'event_category': 'request_trial',
          'event_label': 'failed'
          });
        }*/
      });


  }

  render() {
    return (
      <div id="RequestTrialModal" className={`modal ${this.state.show ? 'show' : 'hide'}`}>
        <form
          id="RequestForm"
          className="modalContent form RequestForm"
          onSubmit={this.submit.bind(this)}
        >
          <div
            id="RequestTrialClose"
            className="close"
            onClick={() => this.reset()}
          ></div>
          <h1 className="sectionTitle RequestFormTitle">Request Trial</h1>
          <div className="RequestForm-grid">
            <div className="RequestForm-input-wrap">
              <label className="required">FirstName</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="Your first name"
                value={this.state.first_name}
                onBlur={() => this.validator.showMessageFor('first_name')}
                onChange={e => this.setState({ first_name: e.target.value })}
              />
              {this.validator.message('first_name', this.state.first_name, 'required')}
            </div>
            <div className="RequestForm-input-wrap">
              <label className="required">Name</label>
              <input
                id="second_name"
                type="text"
                name="second_name"
                value={this.state.second_name}
                placeholder="Your second name"
                onBlur={() => this.validator.showMessageFor('second_name')}
                onChange={e => this.setState({ second_name: e.target.value })}
              />
              {this.validator.message('second_name', this.state.second_name, 'required')}
            </div>
            <div className="RequestForm-input-wrap">
              <label className="required">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Your Email"
                onBlur={() => this.validator.showMessageFor('email')}
                onChange={e => this.setState({ email: e.target.value })}
              />
              {this.validator.message('email', this.state.email, 'required|email')}
            </div>
            <div className="RequestForm-input-wrap">
              <label className="required">Alias</label>
              <input
                id="alias"
                type="text"
                name="alias"
                placeholder="Your Alias"
                value={this.state.alias}
                onBlur={() => this.validator.showMessageFor('alias')}
                onChange={e => this.setState({ alias: e.target.value })}
              />
              {this.validator.message('alias', this.state.alias, 'required')}
            </div>
            <div className="RequestForm-input-wrap">
              <label className="required">Country</label>
              <input
                id="country"
                type="text"
                name="country"
                placeholder="Your Country"
                value={this.state.country}
                onBlur={() => this.validator.showMessageFor('country')}
                onChange={e => this.setState({ country: e.target.value })}
              />
              {this.validator.message('country', this.state.country, 'required')}
            </div>
            <div className="RequestForm-input-wrap">
              <label className="required">City</label>
              <input
                id="city"
                type="text"
                name="city"
                placeholder="Your City"
                value={this.state.city}
                onBlur={() => this.validator.showMessageFor('city')}
                onChange={e => this.setState({ city: e.target.value })}
              />
              {this.validator.message('city', this.state.city, 'required')}
            </div>
            <div className="RequestForm-input-wrap">
              <label className="required">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Your Address"
                value={this.state.address}
                onBlur={() => this.validator.showMessageFor('address')}

                onChange={e => this.setState({ address: e.target.value })}
              />
              {this.validator.message('address', this.state.address, 'required')}
            </div>
            <div className="RequestForm-input-wrap">
              <label>Zip Post Code</label>
              <input
                id="zip_post_code"
                type="text"
                name="zip_post_code"
                placeholder="Your zip post code"
                value={this.state.zip_post_code}
                onChange={e => this.setState({ zip_post_code: e.target.value })}
              />
            </div>
            <div className="RequestForm-input-wrap">
              <label className="required">Duns Number</label>
              <input
                id="duns_number"
                type="text"
                name="duns_number"
                placeholder="Your duns number"
                value={this.state.duns_number}
                onBlur={() => this.validator.showMessageFor('duns_number')}
                onChange={e => this.setState({ duns_number: e.target.value })}
              />
              {this.validator.message('duns_number', this.state.duns_number, 'required')}
            </div>
            <div className="RequestForm-input-wrap">
              <label className="required">Industry Id</label>
              <select value={this.state.industry_id}
                      name="industry_id"
                      placeholder="Your industry id"
                      onChange={e => this.setState({ industry_id: e.target.value })}>
                {this.state.industries.map((inds) => {
                  return <option value={inds.key}>{atob(inds.name)}</option>;
                })}
              </select>

            </div>
            <div className="RequestForm-input-wrap">
              <label>Other Industry</label>
              <input
                id="other_industry"
                type="string"
                name="other_industry"
                placeholder="Other industry"
                value={this.state.other_industry}
                onChange={e => this.setState({ other_industry: e.target.value })}
              />
            </div>
            <div className="RequestForm-input-wrap">
              <label className="required">Mobile Phone</label>
              <input
                id="mobile_phone"
                type="phone"
                name="mobile_phone"
                placeholder="+XX XX XXXX XXXX"
                value={this.state.mobile_phone}
                onBlur={() => this.validator.showMessageFor('mobile_phone')}
                onChange={e => this.setState({ mobile_phone: e.target.value })}
              />
              {this.validator.message('mobile_phone', this.state.mobile_phone, 'required|phone')}
            </div>
            <div className="RequestForm-input-wrap">
              <label>HQ Phone</label>
              <input
                id="hq_phone"
                type="phone"
                name="hq_phone"
                placeholder="+XX XX XXXX XXXX"
                value={this.state.hq_phone}
                onChange={e => this.setState({ hq_phone: e.target.value })}
              />
            </div>
            <div className="RequestForm-input-wrap">
              <label>Organization</label>
              <input
                id="organization"
                type="text"
                name="organization"
                placeholder="Your organization"
                value={this.state.organization}
                onChange={e => this.setState({ organization: e.target.value })}
              />
            </div>
            <div className="RequestForm-input-wrap">
              <label>Website</label>
              <input
                id="website"
                type="text"
                name="website"
                placeholder="Your website"
                value={this.state.website}
                onChange={e => this.setState({ website: e.target.value })}
              />
            </div>
            <div className="RequestForm-input-wrap">
              <label className='required'>Document</label>
              <input
                id="document"
                type="file"
                name="document"
                placeholder="Document"
                accept="application/pdf"
                onBlur={() => this.validator.showMessageFor('document')}
                onChange={e => this.setState({ file: e.target.files[0] })}
              />
              {this.validator.message('document', this.state.file, 'required')}

            </div>
          </div>

          <div className="RequestFormCheckboxes">
            <div className="RequestFormCheckbox">
              <div className="checkbox">
                <input
                  id="is_company"
                  type="checkbox"
                  name="is_company"
                  value={this.state.is_company}
                  checked={this.state.is_company}
                  onChange={e => this.setState({ is_company: !this.state.is_company })}
                />
                <div className="arrow"></div>
              </div>
              <label>Are you company?</label>
            </div>
            <div className="RequestFormCheckbox">
              <div className="checkbox">
                <input
                  id="multifactor_enabled"
                  type="checkbox"
                  name="multifactor_enabled"
                  value={this.state.multifactor_enabled}
                  checked={this.state.multifactor_enabled}
                  onChange={e => this.setState({ multifactor_enabled: !this.state.multifactor_enabled })}
                />
                <div className="arrow"></div>
              </div>
              <label>Do you want multifactor?</label>
            </div>
          </div>
          <button
            id="RequestSubmit"
            className="styledButton ContactSection-submit"
            type="submit"
            name="Submit"
          >
            SEND REQUEST
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUsSection;
