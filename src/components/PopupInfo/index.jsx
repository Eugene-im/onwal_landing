import React from 'react';
import './index.scss';

const PopupInfo = ({ type, isShow, text }) => (
  <div className={`popup-info_body popup-info-${isShow}`}>
    <div className={`popup-info-icon-${type}`}></div>
    <h1 className={`popup-info-title`}>
      {
        type && 'Message was sent'
      }
      {
        !type && 'Error'
      }
    </h1>
    <p className={`popup-info-text`}>
      {
        type && (text || 'We will contact you shortly.')
      }
      {
        !type && (text || 'Description of error and proposal of solution.')
      }

    </p>
  </div>
);

export default PopupInfo;