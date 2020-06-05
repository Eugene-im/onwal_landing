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
import React  from 'react';
import { Link } from 'react-router-dom';
import TechWrapper from 'shared/components/TechWrapper/index.jsx';
import { isGoFromPreviousSlide } from '../../shared/tools/HistoryHeleper';


const renTextData = [
  {
    title: 'Deliver media in your own format; in your own codec',
    text:
      'For content creators, we’ve developed a streaming protocol framework that supports any file formats and codecs for streaming.',
  },
  {
    title: 'True Codecs and File format agnostic',
    text:
      'From AAC to theatrical audio codec, from H.264 to professional video codecs and MP3 to any professional containers, either on-demand or live; the Nettr SDK provides streaming support for any codec, for any file format for content creators.',
  },
  {
    title: 'Customized profile and documents/Images',
    text:
      'To make streaming preferential to customer requirements, Nettr SDK allows creating and defining a customized profile for service providers in their own media container and codec. The Nettr SDK is an extensive framework that supports handling images and documents apart from audio and video.',
  },
  {
    title: 'Customized Profile',
    text:
      'Nettr SDK is the only streaming framework that allows the service providers, developers to create and define a customized profile for the streaming. The service providers can now stream in any media container and codecs they prefer.',
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

const MediaAgnostic = (props) => {
  let { history } = props;

  if (isGoFromPreviousSlide()) {
    history = null;
  }
  return (
    <TechWrapper
      nextLink={<Link to="/multi-cast"/>}
      previousLink={<Link to="/one-hardware"/>}
      currentNumber={'04'}
      history={history}
      image={<div className={'icon_media_agnostic'}></div>}
      title={<h1 className="TechTitle">True Media Agnostic</h1>}
    >
      <p className="TechSubTitle">
        {/* Nettr’s streaming protocol and its framework which truly supports any file formats and codecs
        for streaming. */}
      </p>
      {renTextData}
    </TechWrapper>
  );
};

export default MediaAgnostic;
