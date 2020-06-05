import React, { useEffect } from 'react';
import TechTable from 'shared/components/TableAccess/index.jsx';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './index.scss';

const section1 = [
  { title: 'Windows 7/8/10 (x86/x64)', value: 'arrow' },
  { title: 'OSX', value: 'arrow' },
  { title: 'Linux 4.0+', value: 'arrow' },
  { title: 'iOS', value: 'arrow' },
  { title: 'Android / Android TV', value: 'arrow' },
];

const section2 = [
  { title: 'NMPS for all platforms', value: 'arrow' },
  { title: 'HLS', value: 'Fallback' },
  { title: 'MPEG-Dash', value: 'On-request' },
];

const section3 = [
  { title: 'Intelligent ABR Functionality', value: 'arrow' },
  { title: 'DRM Protected Playback', value: 'arrow' },
  { title: 'Audio DSP', value: 'arrow' },
  { title: 'Video DSP', value: 'arrow' },
  { title: 'Stream switching', value: 'arrow' },
  { title: '360 support', value: 'arrow' },
  { title: 'Basic streaming playback', value: 'arrow' },
  { title: 'Hardware decoding', value: 'arrow' },
  { title: 'Local playback', value: 'arrow' },
  { title: '3D playback', value: 'arrow' },
  { title: 'Extensible API portability', value: 'arrow' },
  { title: 'Built-in player control', value: 'arrow' },
  { title: 'Built-in codecs', value: 'arrow' },
  { title: 'On-demand/Live/Real-time streaming support', value: 'arrow' },
  { title: 'Control playback speed', value: 'arrow' },
  { title: 'Seek forward and backward', value: 'arrow' },
  { title: 'Seek bar thumbnail preview', value: 'arrow' },
  { title: 'Select devices for playback', value: 'arrow' },
  { title: 'Direct playback from URI', value: 'arrow' },
  { title: 'Development', value: 'C++, C#, Delphi, Android Java, Objective-C, Swift.' },
];

const section5 = [
  { title: 'Video codecs', value: 'Any' },
  { title: 'Audio codecs', value: 'Any' },
  { title: 'Containers', value: 'Any' },
  { title: 'Private codecs integration', value: 'arrow' },
  { title: 'Video resolutions', value: 'SD/HD/UHD+' },
  { title: 'Audio sample rate', value: '44 – 352 KHz' },
  { title: 'HD audio bitstream', value: 'arrow' },
  { title: 'HDR Processing by NUSP', value: 'For non-HDR displays only' },
  { title: 'Multi Language support', value: 'arrow' },
  { title: 'Video angle', value: 'arrow' },
  { title: '360 video interactive support', value: 'arrow' },
  { title: 'Customize subtitle', value: 'arrow' },
  { title: 'Subtitle formats', value: 'DVB, PGS, RealText, WebVTT, SRT, SSA/ASS' },
  { title: 'Ad Technologies', value: 'arrow' },
  { title: 'Secure Ad Stitching', value: 'NADX, VAST' },
];

const section6 = [{ title: 'Supported HDR formats', value: 'HDR10/10+, HLG, Dolby Vision' }];

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const NettrStreamingSDK = () => {
  useEffect(() => {
    const header = document.querySelector('.Header-container');
    const upButton = document.querySelector('.up-button');

    if (header) {
      //always assign class 'sticky' to header on NettrSDK page
      header.classList.add('sticky');
    }
    else {
      return;
    }

    const sdkScrollHandler = () => {
      if (window.pageYOffset > 20) {
        upButton.classList.remove('hide');
      }
      else {
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

      <div className='NSSDK'>
        <div className="NSSDK-header">
          <div className="NSSDK-header__body">
            <div className="NSSDK-header__left">
              <div className="TechWrapperBackLink top">
                <Link to="/home">Back</Link>
              </div>
              <h1 className="NSSDK-header__left-title">Nettr SDK</h1>
              <p className="NSSDK-header__left-text">
                The Nettr Streaming Software Development Kit (SDK) offers an immersive solution for content creators who want real-time, live and on-demand streaming.
              </p>
              <p className="NSSDK-header__left-text">

                Nettr SDK is developed to provide a simplistic yet complete streaming solution from delivery protocol, end-to-end streaming delivery and player control to DRM and API integration

              </p>
            </div>
            <div className="NSSDK-header__left-right"></div>
          </div>
          <div className="arrow_down"></div>
        </div>

        <div className="NSSDK-ST">
          <div className="NSSDK-ST__body">
            <h1 className="NSSDK-ST__title">Nettr for the future</h1>
            <div className="NSSDK-ST__row-decoration">
              <div className="NSSDK-ST__row-decoration-rainbow"></div>
              <div className="NSSDK-ST__row-decoration-rainbow"></div>
            </div>
            <div className="NSSDK-ST__row">
              <div className="NSSDK-ST_row-card">
                ONE cross-platform - Solve complexities and challenges with legacy technologies
              </div>
              <div className="NSSDK-ST_row-card">
                No royalty issues - choose your own streaming format
              </div>
              <div className="NSSDK-ST_row-card">
                You Focus on application development - Nettr SDK takes care of your on-demand, real-time streaming and message delivery
              </div>
            </div>
            <div className="NSSDK-ST__row-decoration">
              <div className="NSSDK-ST__row-decoration-rainbow"></div>
            </div>
            <div className="NSSDK-ST__row">
              <div className="NSSDK-ST_row-card">
                Secure your content using industry standards- Nettr hardware-DRM is cross-platform and codecs agnostic
              </div>
              <div className="NSSDK-ST_row-card">
                Simplified API - create streaming application in less than a day
              </div>
            </div>
          </div>
        </div>
        {/* <div className="arrow_down-birch"></div> */}

        <div className="NSSDK-REASONS">
          <div className="NSSDK-REASONS__body">
            <h1 className="NSSDK-REASONS__title">Nettr SDK, A better choice</h1>
            <div className="NSSDK-REASONS__row">
              <div className="NSSDK-REASONS__card">
                <div className="NSSDK-REASONS__card-img"></div>
                <div className="NSSDK-REASONS__card-contetn">
                  <div className="NSSDK-REASONS__card-title">Nettr SDK is developed to offer One Ultimate Experience</div>
                  <div className="NSSDK-REASONS__card-text">
                    With this, keep all your streaming requirements covered
                  </div>
                </div>
              </div>
              <div className="NSSDK-REASONS__card">
                <div className="NSSDK-REASONS__card-img"></div>
                <div className="NSSDK-REASONS__card-contetn">
                  <h2 className="NSSDK-REASONS__card-title">Nettr offers fully Native Delivery</h2>
                  <div className="NSSDK-REASONS__card-text">
                    Which means, no API’s involved, no third-party frameworks
                  </div>
                </div>
              </div>
              <div className="NSSDK-REASONS__card">
                <div className="NSSDK-REASONS__card-img"></div>
                <div className="NSSDK-REASONS__card-contetn">
                  <div className="NSSDK-REASONS__card-title">Delivering Reality</div>
                  <div className="NSSDK-REASONS__card-text">
                    As cross-platform technology, Nettr is designed to run without losses
                  </div>
                </div>
              </div>
              <div className="NSSDK-REASONS__card">
                <div className="NSSDK-REASONS__card-img"></div>
                <div className="NSSDK-REASONS__card-contetn">
                  <h2 className="NSSDK-REASONS__card-title">Cost Effective and flexible</h2>
                  <div className="NSSDK-REASONS__card-text">
                    Choose your own plans with no time-based charges and choose your own language from C#, C++, Objective-C, Delphi, Android or Java
                  </div>
                </div>
              </div>
              <div className="NSSDK-REASONS__card">
                <div className="NSSDK-REASONS__card-img"></div>
                <div className="NSSDK-REASONS__card-contetn">
                  <h2 className="NSSDK-REASONS__card-title">Real-time, live and on-demand</h2>
                  <div className="NSSDK-REASONS__card-text">
                    We’ve revolutionized delivery to suit everyone’s need, which is why the Nettr SDK uses adaptive low-level technology designed to save bandwidth
                  </div>
                </div>
              </div>
              <div className="NSSDK-REASONS__card">
                <div className="NSSDK-REASONS__card-img"></div>
                <div className="NSSDK-REASONS__card-contetn">
                  <h2 className="NSSDK-REASONS__card-title">Become the market leader</h2>
                  <div className="NSSDK-REASONS__card-text">
                    Nettr SDK’s intuitive structure accelerates product development and propels business growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="NSSDK-E">
          {/* <div className="arrow_down"></div> */}
          <div className="NSSDK-E__body">
            <h1 className="NSSDK-E__title">Environmental and Developer Friendly</h1>
            <div className="NSSDK-E__content-dec"></div>
            <div className="NSSDK-E__content">
              <div className="NSSDK-E__row">
                <div className="NSSDK-E__row-img"></div>
                <div className="NSSDK-E__row-info">
                  <div className="NSSDK-E__row-title">Lower delivery cost</div>
                  <div className="NSSDK-E__row-text">
                    Reducing storage and bandwidth for creators and users
                  </div>
                </div>
              </div>
              <div className="NSSDK-E__row">
                <div className="NSSDK-E__row-img"></div>
                <div className="NSSDK-E__row-info">
                  <h2 className="NSSDK-E__row-title">Lower Compute cost</h2>
                  <div className="NSSDK-E__row-text">
                    With NMPS packager there’s no need for supercomputers to create NMPS complaint output
                  </div>
                </div>
              </div>
              <div className="NSSDK-E__row">
                <div className="NSSDK-E__row-img"></div>
                <div className="NSSDK-E__row-info">
                  <h2 className="NSSDK-E__row-title">No DRM cost</h2>
                  <div className="NSSDK-E__row-text">
                    Built-in Hardware DRM eliminates need for multiple DRM complexity
                  </div>
                </div>
              </div>
              <div className="NSSDK-E__row">
                <div className="NSSDK-E__row-img"></div>
                <div className="NSSDK-E__row-info">
                  <h2 className="NSSDK-E__row-title">High, Master Quality</h2>
                  <div className="NSSDK-E__row-text">
                    Equal Experience across all devices
                  </div>
                </div>
              </div>
              <div className="NSSDK-E__row">
                <div className="NSSDK-E__row-img"></div>
                <div className="NSSDK-E__row-info">
                  <h2 className="NSSDK-E__row-title">Ad distribution goes Server-less</h2>
                  <div className="NSSDK-E__row-text">
                    Eliminate the need for Server-side operations with Nettr advanced Ad engine that loads ads based on viewer’s environment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="arrow_down-blue"></div> */}
        <div className="NSSDK-Benefits">
          <div className="NSSDK-Benefits__body">
            <h1 className="NSSDK-Benefits__title">Top Benefits of Nettr SDK</h1>
            <div className="NSSDK-Benefits__content">
              <div className="NSSDK-Benefits__card">
                <div className="NSSDK-Benefits__card-index">1</div>
                <div className="NSSDK-Benefits__card-info">
                  <h2 className="NSSDK-Benefits__card-title">
                    All the features you need in one product
                  </h2>
                  <div className="NSSDK-Benefits__card-text">
                    By integrating Nettr Streaming SDK, you can add a wide range of on-demand, live
                    & real-time streaming features into your product to ensure it is in demand and
                    competitive
                  </div>
                </div>
              </div>
              <div className="NSSDK-Benefits__card">
                <div className="NSSDK-Benefits__card-index">2</div>
                <div className="NSSDK-Benefits__card-info">
                  <h2 className="NSSDK-Benefits__card-title">Quick go to market</h2>
                  <div className="NSSDK-Benefits__card-text">
                    With simple API and built-in player control, lots of features, and intuitive
                    structure of Nettr SDK, the development goes fast. It gives you quick go to
                    market and growth to your business
                  </div>
                </div>
              </div>
              <div className="NSSDK-Benefits__card">
                <div className="NSSDK-Benefits__card-index">3</div>
                <div className="NSSDK-Benefits__card-info">
                  <h2 className="NSSDK-Benefits__card-title">Use your favorite language</h2>
                  <div className="NSSDK-Benefits__card-text">
                    You can use the SDK with C#, C++, Objective-C, Swift, Android Java, and Delphi.
                    Many samples for most common scenarios for your guidance included
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="arrow_down-birch"></div> */}

        <div className="NSSDK-Specification">
          <div className="NSSDK-Specification__body">
            <h1 className="NSSDK-Specification__title">Nettr SDK Specification</h1>
            <div className="NSSDK-Specification__content">
              <div className="NSSDK-Specification__content-left">
                <TechTable title={'Operating Systems'} data={section1} />
                <TechTable title={'Streaming Formats (Online/Offline)'} data={section2} />
                <TechTable title={'Video / Audio / Subtitle'} data={section5} />
              </div>
              <div className="NSSDK-Specification__content-right">
                <TechTable title={'Playback Features'} data={section3} />
                <TechTable title={'HDR Pass-through'} data={section6} />
              </div>
            </div>
          </div>
        </div>
        <div className='NSSDK-RequestTrial-submit'>
          <Link to={`/request-trial`} id="RequestSubmit" className={`styledButton RequestTrialP-submitn styledButtonBottom`}>
            Request Trial
          </Link>
        </div>

        <Footer />
      </div>
      <UpButton />
    </>
  );
};

const UpButton = () => (
  <button className="up-button hide"></button>
)

export default NettrStreamingSDK;
