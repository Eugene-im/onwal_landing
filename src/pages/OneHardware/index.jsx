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
import React from 'react';
import { Link } from 'react-router-dom';
import TechWrapper from 'shared/components/TechWrapper/index.jsx';
import { isGoFromPreviousSlide } from '../../shared/tools/HistoryHeleper';

const renTextData = [
  {
    title: 'A universal content protection technology',
    text:
      'We understood the importance of a universal content protection technology for content creators and content owners and solved the complexity and incompatibility of legacy DRM technologies using the Nettr DRM (NDRM). NDRM is hardware-based DRM that work across Intel SGX processors and TEE processors that are ARM based.',
  },
  {
    title: 'Agnostic with Industry Standard Encryption',
    text:
      'Using the NDRM framework, content owners can protect any codec, file format and OS using proprietary logic operating on a premium media content encryption using the AES 128/256-bit industry-standard.',
  },
  {
    title: 'Secure and Software/Hardware TEE based',
    text: 'Protected from side-channel attacks and other threats, the NDRM has a data transport and master key secured by strong encryption algorithms with at Software/Hardware TEE depending on the provider license for content owners.',
  },
].map((obj, index) => {
  return (
    <>
      <h2 key={`title-${index}`} className="TechArticleTitle">
        {obj.title}
      </h2>
      <p key={`text-${index}`} className="TechArticleText">
        {obj.text}
      </p>
    </>
  );
});

const OneHardware = (props) =>{
  let { history } = props;
  if (isGoFromPreviousSlide()) {
    history = null;
  }
  return (
    <TechWrapper
      nextLink={<Link to="/media-agnostic" />}
      previousLink={<Link to="/one-player" />}
      currentNumber={'03'}
      history={history}
      image={<div className={'icon_one_hardware_drm'}></div>}
      title={<h1 className="TechTitle">One Hardware DRM</h1>}
    >
      <p className="TechSubTitle">

      </p>
      {renTextData}
    </TechWrapper>
  );
}

export default OneHardware;
