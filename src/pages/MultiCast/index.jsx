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
    title: 'Streaming smooth, Saving Bandwidth',
    text:
      'As an inbuilt feature for saving user bandwidth, the Nano Multi-cast reduces server loads and avoids re-buffering of content.',
  },
  {
    title: 'Local delivery and Bandwidth savings',
    text:
      'Buffer on devices on the same network playing the same media is cached by the Nano-Multicast add through the framework which provides streams form local network instead of reaching the public cloud, so that bandwidth is saved and server loads are reduced.',
  },
  {
    title: 'Public casting and smooth playback',
    text: 'Nano-Multicast re-casts the buffer in the cache to another device outside the local network so that server loads are reduced tweaking the start-up time for streaming and offering a smooth casting experience.',
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



const MultiCast = (props) => {
  let { history } = props;

  if (isGoFromPreviousSlide()) {
    history = null;
  }

  return (
    <TechWrapper
      nextLink={<Link to="/packager"/>}
      previousLink={<Link to="/media-agnostic"/>}
      currentNumber={'05'}
      history={history}
      image={<div className={'icon_nano_multicast'}></div>}
      title={<h1 className="TechTitle">Nano Multi-Cast</h1>}
    >
      <p className="TechSubTitle">
        {/* Nano Multi-cast is a built-in feature of NMPS protocol which saves the users bandwidth
        significantly. */}
      </p>
      {renTextData}
    </TechWrapper>
  );
};

export default MultiCast;
