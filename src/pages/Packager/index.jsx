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
    title: 'Any file format made NMPS compliant',
    text: 'To solve the challenge of integrating and generating NMPS complaint output for content creators, content developers and service providers, the NMPS packager is offered as a free SDK.',
  },
  {
    title: 'Codecs agnostic and file format agnostic',
    text: 'The NMPS Packager provides support for any codec and any file format; both input and output.',
  },
  {
    title: 'Full NMPS featured and Content Protection',
    text:
      'The NMPS offers support to all types of NMPS manifests for content creators from MX, Master and Legacy to TV, Radio, NADX and Live. NMPS packager offers protection for both general and premium media content that has pre-integrated NDRM and carries out NDRM packaging based on hardware-based TEE environment.',
  },
].map((obj, index) => {
  return (
    <>
      <h2 key={`title-${index}`} className="TechArticleTitle">
        {obj.title}
      </h2>
      <p key={`text-${index}`} className="TechArticleText">
        {obj.text}{' '}
      </p>
    </>
  );
});

const Packager = (props) => {
  let { history } = props;
  if (isGoFromPreviousSlide()) {
    history = null;
  }
  return (
    <TechWrapper
      nextLink={<Link to="/" />}
      lockNext={true}
      previousLink={<Link to="/multi-cast" />}
      currentNumber={'06'}
      history={history}
      image={<div className={'icon_nmps_packager'}></div>}
      title={<h1 className="TechTitle">NMPS Packager</h1>}
    >
      <p className="TechSubTitle">
        {/* NMPS Packager is a free SDK which allows the service providers and developers to integrate and
        generate NMPS compliant output into the existing cloud applications. */}
      </p>
      {renTextData}
    </TechWrapper>
  );
}

export default Packager;
