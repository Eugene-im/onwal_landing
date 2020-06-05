import React, { useEffect } from 'react';
// import TechTable from 'shared/components/TableAccess/index.jsx';
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

const NettrRes = () => {
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

      <div className='nres'>
        <div className="content">
          <div className="resourses__block">
            <div className="item__res">
              <div className="item__res_image"></div>
              <div className="item__res_about">
                <div className="item__res_type">Datasheet</div>
                <div className="item__res_title">Sed ut perspiciatis unde omnis iste natus error sit</div>
                <div className="item__res_about_arrow"></div>
              </div>
            </div>
            <div className="item__res">
              <div className="item__res_image"></div>
              <div className="item__res_about">
                <div className="item__res_type">Sed ut perspiciatis unde omnis iste natus error sit</div>
                <div className="item__res_title">Document Name goes here</div>
                <div className="item__res_about_arrow"></div>
              </div>
            </div>
            <div className="item__res">
              <div className="item__res_image">test</div>
              <div className="item__res_about">
                <div className="item__res_type">Datasheet</div>
                <div className="item__res_title">Sed ut perspiciatis unde omnis iste natus error sit</div>
                <div className="item__res_about_arrow"></div>
              </div>
            </div>
            <div className="item__res">
              <div className="item__res_image">test</div>
              <div className="item__res_about">
                <div className="item__res_type">Datasheet</div>
                <div className="item__res_title">Sed ut perspiciatis unde omnis iste natus error sit</div>
                <div className="item__res_about_arrow"></div>
              </div>
            </div>
            <div className="item__res">
              <div className="item__res_image"></div>
              <div className="item__res_about">
                <div className="item__res_type">Datasheet</div>
                <div className="item__res_title">Sed ut perspiciatis unde omnis iste natus error sit</div>
                <div className="item__res_about_arrow">text arrow example -----></div>
              </div>
            </div>
          </div>
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

export default NettrRes;
