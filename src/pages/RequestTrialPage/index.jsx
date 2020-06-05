import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { listInputsOrganization, listInputsIndividual } from './data.js';
import './index.scss';
import DeveloperAndPrivacyStatement from '../../components/DeveloperAndPrivacystatement';
import { Request } from '../../shared/tools/request';
import PopupInfo from '../../components/PopupInfo';

let initialState = {
  name: '',
  'e-mail': '',
  alias: '',
  country: '',
  city: '',
  address: '',
  zip_post_code: '',
  duns_number: '',
  industry_id: 'Select industry',
  other_industry: '',
  mobile_number: '',
  hq_phone: '',
  organization: '',
  website: '',
  file: '',
  is_company: false,
  multifactor_enabled: false,
  show: false,
  industries: [
    { key: 1, name: 'QnJvYWRjYXN0' },
    { key: 2, name: 'RGlnaXRhbCBTaWduYWdl' },
    {
      key: 3,
      name: 'RS1sZWFybmluZw',
    },
    { key: 4, name: 'TWVkaWNhbA' },
    { key: 5, name: 'TW9iaWxl' },
    {
      key: 6,
      name: 'TXVsdGltZWRpYQ',
    },
    { key: 7, name: 'U2VjdXJpdHk' },
    { key: 8, name: 'T1RU' },
    { key: 9, name: 'VmlkZW8' },
    {
      key: 10,
      name: 'Q29uZmVyZW5jaW5n',
    },
    { key: 11, name: 'UHJlbWl1bSBTdHJlYW1pbmc' },
    { key: 12, name: 'R2FtaW5n' },
    {
      key: 13,
      name: 'T3RoZXI',
    },
  ],
  inputsData: listInputsIndividual,
  inputSource: 'individual',
  isShowPanel: false,
  countries: [],
  selectedCountry: { name: 'Select country', states: [], phone: 'XXX' },
  selectedStateProvince: { name: 'Select country', cities: [] },
  selectedCity: { name: 'Select country' },
  classDisableButtonOTP: '',
  isError: false,
  isShowPopup: false,
  statusText: '',
};

class RequestTrialPage extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.state.isPrivacyStatement = false;
    this.state.isNonDisclosureAgreement = false;
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      messages: {
        accepted: 'Accept is required.',
        email: 'The e-mail field is required.',
      },
    });

    this.host = 'https://ec2-34-221-15-35.us-west-2.compute.amazonaws.com';
  }

  componentDidMount() {
    const header = document.querySelector('.Header-container');
    if (!header) return;
    header.classList.add('hide');
    this.loadCountriesAndCities();
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

  async loadIndustries() {
    const request = new Request();
    let industries = await request.get(`${this.host}/UI/Industries`);
    industries = industries.map(industry => {
      return { value: atob(industry.name), label: industry.key };
    });
    this.setState({ industries: industries });
  }

  async loadCountriesAndCities() {
    const request = new Request();
    const urlCountryAndCities = `https://raw.githubusercontent.com/khkwan0/countryCityStateJson/master/lib/compiledCities.json`;
    let countries = await request.get(urlCountryAndCities);
    countries = Object.entries(countries).sort(([, a], [, b]) => a.name.localeCompare(b.name));
    countries = countries.map(([key, value]) => {
      const states = Object.entries(value.states).map(([key, cities]) => {
        return { name: key, cities: cities };
      });
      value.states = states;
      return { ...value };
    });

    this.setState({ countries: countries });
  }

  getActiveForPrivacyStatement() {
    return this.state.isPrivacyStatement ? 'active' : '';
  }

  getActiveForNonDisclosureAgreement() {
    return this.state.isNonDisclosureAgreement ? 'active' : '';
  }

  getActiveIfIndividual() {
    return this.state.inputSource === 'individual' ? 'active' : '';
  }

  getActiveIfOrganization() {
    return this.state.inputSource === 'organization' ? 'active' : '';
  }

  submit(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      this.sendData();
    } else {
      this.validator.showMessages();
    }
  }

  async sendData() {
    const request = new Request();
    const formObjectData = this.parseJsonModal();
    console.log('formObjectData: ', formObjectData);
    const code = this.state.otp;
    const response = await request.post(`${this.host}/user/regtrial-mf/${code}`, formObjectData);
    if (response.status !== 200) {
      this.setState({ classDisableButtonOTP: '' });
      this.setState({ isShowPopup: true });
      this.setState({ isError: true });
      this.setState({ statusText: response.statusText });
      setTimeout(() => this.setState({ isShowPopup: false }), 3000);
    } else {
      this.goHome();
    }
  }

  reset() {
    this.setState(initialState);
    this.loadIndustries();
  }

  goHome() {
    let { history } = this.props;

    history.push({
      pathname: '/home',
    });
  }

  parseJsonModal() {
    return {
      first_name: btoa(this.state.name),
      second_name: btoa('second_name'),
      alias: btoa(this.state['e-mail']),
      is_company: this.state.is_company,
      email: btoa(this.state['e-mail']),
      organization: btoa(this.state.organization),
      industry_id: 1,
      other_industry: btoa('other_industry'),
      zip_post_code: btoa('zip_post_code'),
      country: btoa(this.state.selectedCountry.name),
      city: btoa(this.state.selectedCity.name),
      address: btoa(this.state.address),
      duns_number: btoa('duns_number'),
      mobile_phone: btoa('+' + this.state.selectedCountry.phone + this.state.mobile_number),
      hq_phone: btoa('hq_phone'),
      website: btoa('website'),
      multifactor_enabled: false,
    };
  }

  openInfoPanel(e) {
    // e.stopPropagation();
    console.log(window.historyPages);
    this.setState({ isShowPanel: true });
  }

  closeInfoPanel() {
    this.setState({ isShowPanel: false });
  }

  setInputsSource(source = 'individual') {
    const is_company = source !== 'individual';
    const inputsData = is_company ? listInputsOrganization : listInputsIndividual;
    this.setState({ 
      inputsData,
      is_company,
      inputSource: source,
    });
  }

  setStateFrom(key, value) {
    let obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  inputPhone(formElement) {
    return (
      <div className="RequestTrialP__form-wrap mobile">
        <label className="required">{formElement.title}</label>
        <div className={`input-container ${this.state.classDisableButtonOTP}`}>
          <input
            type="text"
            className="input left"
            placeholder="+XXX"
            value={`+${this.state.selectedCountry.phone}`}
            disabled
          />
          <input
            id={formElement.name}
            className="input right"
            type={formElement.type}
            name={formElement.name}
            placeholder={formElement.placeholder}
            value={this.state[formElement.name]}
            onBlur={() => this.validator.showMessageFor(formElement.name)}
            onChange={e => this.setStateFrom(formElement.name, e.target.value)}
          />
          <button className={`mobile-password-bt styledButton`} onClick={this.sendOTP.bind(this)}>
            {formElement.otp}
          </button>
        </div>
        {this.validator.message(
          formElement.name,
          this.state[formElement.name],
          formElement.validator
        )}
        <span>{formElement.description}</span>
      </div>
    );
  }

  async sendOTP(e) {
    if (!this.validator.fieldValid('country')) {
      this.validator.showMessageFor('country');
      return;
    } else {
      this.validator.hideMessageFor('country');
    }
    if (!this.validator.fieldValid('mobile_number')) {
      this.validator.showMessageFor('mobile_number');
      return;
    }
    this.setState({ classDisableButtonOTP: 'disable' });
    const request = new Request();
    let fullPhoneNumber = '+' + this.state.selectedCountry.phone + this.state.mobile_number;
    try {
      await request.post(`${this.host}/user/reg-code`, {
        phone_number: fullPhoneNumber,
        mail: this.state.email,
        is_verify_sms: true,
        is_verify_mail: false,
      });
      this.setState({ isShowPopup: true });
      setTimeout(() => this.setState({ isShowPopup: false }), 3000);
    } catch (error) {}
  }

  inputText(formElement) {
    return (
      <div className={`RequestTrialP__form-wrap ${formElement.name}`}>
        <label className="required">{formElement.title}</label>
        <input
          id={formElement.name}
          type={formElement.type}
          name={formElement.name}
          placeholder={formElement.placeholder}
          value={this.state[formElement.name]}
          onBlur={() => this.validator.showMessageFor(formElement.name)}
          onChange={e => this.setStateFrom(formElement.name, e.target.value)}
        />
        {this.validator.message(
          formElement.name,
          this.state[formElement.name],
          formElement.validator
        )}
      </div>
    );
  }

  inputCities(formElement) {
    return (
      <div className="RequestTrialP__form-wrap city">
        <label className="required">{formElement.title}</label>
        <div className={'select_container'}>
          <div className={'select_container'}>
            <select
              value={this.state.selectedCity.name}
              id={formElement.name}
              name={formElement.name}
              placeholder={formElement.placeholder}
              className={` ${
                this.state.selectedCity.name === initialState.selectedCity.name
                  ? 'selected-placeholder'
                  : ''
              }`}
              onChange={e => this.setState({ selectedCity: e.target.value })}
            >
              <option key={'Select city'} value="">
                {formElement.placeholder}
              </option>
              {this.state.selectedStateProvince.cities.map(city => {
                return (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }

  inputStateProvince(formElement) {
    const setState = e => {
      if (e.target.value === '') {
        this.setState({ selectedStateProvince: initialState.selectedStateProvince });
        this.setState({ selectedCity: initialState.selectedCity });
      } else {
        let value = this.state.selectedCountry.states.filter(val => val.name === e.target.value)[0];
        this.setState({
          selectedStateProvince: value,
        });
      }
    };
    return (
      <div className="RequestTrialP__form-wrap prov">
        <label className="required">{formElement.title}</label>
        <div className={'select_container'}>
          <select
            value={this.state.selectedStateProvince.name}
            id={formElement.name}
            name={formElement.name}
            placeholder={formElement.placeholder}
            className={` ${
              this.state.selectedStateProvince.name === 'Select country'
                ? 'selected-placeholder'
                : ''
            }`}
            onChange={setState}
          >
            <option key={'Select state'} value="">
              {formElement.placeholder}
            </option>
            {this.state.selectedCountry.states.map(state => {
              return (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }

  inputCountries(formElement) {
    const setState = e => {
      if (e.target.value === '') {
        this.setState({ selectedCountry: initialState.selectedCountry });
        this.setState({ selectedStateProvince: initialState.selectedStateProvince });
        this.setState({ selectedCity: initialState.selectedCity });
        this.setState({ country: '' });
      } else {
        const country = this.state.countries.filter(val => val.name === e.target.value)[0];
        this.setState({ selectedCountry: country });
        this.setState({ country: country.name });
      }
    };
    return (
      <div className="RequestTrialP__form-wrap country">
        <label className="required">{formElement.title}</label>
        <div className={'select_container'}>
          <select
            value={this.state.selectedCountry.name}
            id={formElement.name}
            name={formElement.name}
            placeholder={formElement.placeholder}
            className={` ${
              this.state.selectedCountry.name === 'Select country' ? 'selected-placeholder' : ''
            }`}
            onChange={setState}
          >
            <option key={'Select country'} value="">
              {formElement.placeholder}
            </option>
            {this.state.countries.map((country, i) => {
              return (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        {this.validator.message(
          formElement.name,
          this.state[formElement.name],
          formElement.validator
        )}
      </div>
    );
  }

  inputIndustryid(formElement) {
    const setState = e => {
      this.setState({ industry_id: e.target.value });
    };

    return (
      <div className="RequestTrialP__form-wrap industry">
        <label className="required">{formElement.title}</label>
        <div className={'select_container'}>
          <select
            value={this.state.industry_id}
            id={formElement.name}
            name={formElement.name}
            placeholder={formElement.placeholder}
            className={` ${
              this.state.industry_id === 'Select industry' ? 'selected-placeholder' : ''
            }`}
            onChange={setState}
          >
            <option key={'Select industry'} value="Select industry">
              {formElement.placeholder}
            </option>
            {this.state.industries.map(inds => {
              return (
                <option key={inds.name} value={inds.key}>
                  {atob(inds.name)}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }

  inputDocument(formElement) {
    return (
      <div className="RequestTrialP__form-wrap document">
        <label className="required">{formElement.title}</label>
        <input
          id={formElement.name}
          name={formElement.name}
          placeholder={formElement.placeholder}
          type={formElement.type}
          accept="application/pdf"
          onBlur={() => this.validator.showMessageFor('document')}
          onChange={e => this.setState({ file: e.target.files[0] })}
        />
        {this.validator.message('document', this.state.file, 'required')}
      </div>
    );
  }

  inputEmpty() {
    return <div className="RequestTrialP__form-wrap"></div>;
  }

  inputDivider() {
    return <div className="RequestTrialP__form-wrap--divider"></div>;
  }

  leftPanel() {
    let { history } = this.props;
    const closePanel = e => {
      e.preventDefault();
      console.log(window.historyPages);
      this.closeInfoPanel();
      console.log(window.historyPages);
    };

    if (this.state.isShowPanel) {
      return (
        <div className={`RequestTrialP__body-left ${this.state.isShowPanel}`}>
          <div className="close-bt" onClick={() => this.reset()}></div>
          <div className="RequestTrialP__body-left-content">
            <DeveloperAndPrivacyStatement backCallback={closePanel} history={history} />
          </div>
        </div>
      );
    }
  }

  back(e) {
    e = e || window.event; // support  for IE8 and lower
    e.preventDefault(); // stop browser from doing native logic
    window.history.go(-1);
  }

  render() {
    // let { history } = this.props;

    return (
      <>
        <section>
          <div className="RequestTrialP">
            <div className="RequestTrialP__body">
              {this.leftPanel()}

              <div className={`RequestTrialP__body-right ${this.state.isShowPanel}`}>
                <div className="TechWrapperBackLink top RequestTrialP-back">
                  <Link to="#" onClick={this.back}>
                    Back
                  </Link>
                </div>
                <div className="RequestTrialP__form">
                  <div className="RequestTrialP__form-header">
                    <div className="RequestTrialP__logo" onClick={e => this.goHome()}></div>
                    <div className="RequestTrialP__form-title">Request Trial</div>
                    <div className="RequestTrialP__form-text">
                      Fill in the fields below and we will contact with you shortly.
                    </div>
                  </div>

                  <div className="RequestTrialP__form-tabs">
                    <div
                      className={`RequestTrialP__form-tab ${this.getActiveIfIndividual()} font`}
                      onClick={e => this.setInputsSource('individual')}
                    >
                      Individual
                    </div>
                    <div
                      className={`RequestTrialP__form-tab ${this.getActiveIfOrganization()} font`}
                      onClick={e => this.setInputsSource('organization')}
                    >
                      {' '}
                      Organization
                    </div>
                  </div>
                  <div className="RequestTrialP__form-content">
                    {this.state.inputsData.map(formElement => {
                      switch (formElement.type) {
                        case 'tel':
                          return this.inputPhone(formElement);
                        case 'country':
                          return this.inputCountries(formElement);
                        case 'state_province':
                          return this.inputStateProvince(formElement);
                        case 'city':
                          return this.inputCities(formElement);
                        case 'file':
                          return this.inputDocument(formElement);
                        case 'industry_id':
                          return this.inputIndustryid(formElement);
                        case 'empty':
                          return this.inputEmpty();
                        case 'divider':
                          return this.inputDivider();
                        default:
                          return this.inputText(formElement);
                      }
                    })}

                    <div className="RequestTrialP__form-wrap">
                      <div className="RequestTrialP__form-wrap-checkbox">
                        <div
                          className={`checkbox ${this.getActiveForNonDisclosureAgreement()}`}
                          onClick={e =>
                            this.setState({
                              isNonDisclosureAgreement: !this.state.isNonDisclosureAgreement,
                            })
                          }
                        >
                          <input
                            id="isNonDisclosureAgreement"
                            type="checkbox"
                            name="isNonDisclosureAgreement"
                            value={this.state.isNonDisclosureAgreement}
                            checked={this.state.isNonDisclosureAgreement}
                            onChange={e =>
                              this.setState({
                                isNonDisclosureAgreement: !this.state.isNonDisclosureAgreement,
                              })
                            }
                          />
                        </div>
                        <label>
                          By checking this box I confirm that I have read{' '}
                          <span onClick={e => this.openInfoPanel(e)}>
                          Terms and Conditions
                          </span>
                        </label>
                      </div>

                      {this.validator.message(
                        'isNonDisclosureAgreement',
                        this.state.isNonDisclosureAgreement,
                        'accepted'
                      )}
                    </div>

                    <button
                      id="RequestSubmit"
                      className="styledButton RequestTrialP-submit"
                      type="submit"
                      name="Submit"
                      onClick={e => this.submit(e)}
                    >
                      SEND REQUEST
                    </button>
                  </div>
                  <PopupInfo
                    type={!this.state.isError}
                    isShow={this.state.isShowPopup}
                    text={this.state.statusText}
                  />
                  <div className="RequestTrialP__form-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default RequestTrialPage;
