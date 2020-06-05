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
import './index.scss';
import { Link } from 'react-router-dom';


const TechBack = ({ backCallback, history }) => {
  if (backCallback) {
    // eslint-disable-next-line
    return (<a to={`${backCallback ? '#' : '/home'}`}
      onClick={history ? history.goBack : backCallback}>Back</a>);
  } else {
    return (<Link to={`${backCallback ? '#' : '/home'}`}
      onClick={history ? history.goBack : backCallback}>Back</Link>);
  }
};

const TechWrapper = ({ children, nextLink, previousLink, image, title, currentNumber, lockPrevious, lockNext, lockToolbar, fullscreen, back = true, backCallback, history }) => {
  useEffect(() => {
    const header = document.querySelector('.Header-container');
    if (!header) return;
    header.classList.add('sticky');
    document.body.querySelector('.Header-container')
      .classList.add('mobile_subpage');
    return () => {
      header.classList.remove('sticky');
      document.body.querySelector('.Header-container')
        .classList.remove('mobile_subpage');
    };
  }, []);
  return (
    <div className="TechWrapperContainer">
      {image && (
        <div className="TechWrapperImage">
          <div className={`TechWrapperNextLink mob ${lockNext && 'disabled'}`}>
            {nextLink}
          </div>
          <div className={`TechWrapperPreviousLink mob ${lockPrevious && 'disabled'}`}>
            {previousLink}
          </div>
          {title}
          {image}
        </div>
      )}
      <div className="TechWrapperContent">
        {back && (
          <div className="TechWrapperBackLink top">
            <TechBack history={history} backCallback={backCallback}></TechBack>
          </div>
        )
        }

        {!lockToolbar && (
          <div className="TechWrapperTools">
            <div className="TechWrapperNumberContainer">
              <span className="TechWrapperTopNumber">{currentNumber}</span>
              <span className="TechWrapperBottomNumber">/06</span>
            </div>
            <div className="TechWrapperLine"></div>
            <div className={`TechWrapperNextLink ${lockNext && 'disabled'}`}>
              {nextLink}
            </div>
            <div className={`TechWrapperPreviousLink ${lockPrevious && 'disabled'}`}>
              {previousLink}
            </div>
            <div className="TechWrapperLine dot"></div>
          </div>
        )}
        <div className={` ${back ? 'TechWrapperMain' : ''} ${fullscreen ? 'fullscreen' : ''}`}>
          {title ? title : ''}
          {children}
          {back && (
            <div className="TechWrapperBackLink bottom">
              <TechBack history={history} backCallback={backCallback} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default TechWrapper;
