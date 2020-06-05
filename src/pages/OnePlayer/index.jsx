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
import TechTable from 'shared/components/TableAccess/index.jsx';
import { isGoFromPreviousSlide } from '../../shared/tools/HistoryHeleper';

const renTextData = [
  {
    title: 'Universal streaming player',
    text:
      'With Netter’s Universal Streaming Player (NUSP) content creators have seamless, secure and agnostic media switching, media stitching and hardware decoding.',
  },
  {
    title: 'Seamless switching with HDR Ready, 3D ready and True High definition',
    text: 'NUSP offers content creators with gapless switching between file formats and codecs and a breathtaking experience with support for several formats including HDR10,10+, Dolby Vision and HLG in 4K resolution. NUSP supports 360-degree video formats and 3D format and using the NUSP HDR processing engine, users on non-HDR displays are guaranteed a breathless experience. Lossless codecs with high bitrate (up to 1k+ Mbps), high resolution (Up to 8K), HD audio-pass, high frame rate, high bit depth and sample rate is what NUSP offers.',
  },
  {
    title: 'Secure Media Path and Secure Media Stitching',
    text: 'Intelligently, the TEE isolates the storage to decoding media path for NUSP access. Integrated with the NMPS, NUSP makes media format stitching gapless through the primary content without having to restart audio and video renders.',
  },
  {
    title: 'OS Agnostic and pure Native solution',
    text:
      'NUSP offers an ultimate experience across platforms and is the only native framework having built-in audio/video decoders, demuxers, audio/video renders, audio/video DSP and HDR processor that is completely secure.',
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
  { title: 'Virtual Reality support', value: 'arrow' },
  { title: 'Basic playback', value: 'arrow' },
  { title: 'Hardware decoding', value: 'arrow' },
];

const section4 = [
  { title: 'Secure Media Path', value: 'arrow' },
  { title: 'DRM Engine', value: 'Nettr DRM Technology' },
  { title: 'Hardware Protected', value: 'arrow' },
  { title: 'Session based watermarking', value: 'arrow' },
  { title: 'Secure Media Decoding', value: 'arrow' },
  { title: 'Widevine DRM support', value: 'On-request' },
  { title: 'FairPlay DRM support', value: 'On-request' },
  { title: 'PlayReady DRM support', value: 'On-request' },
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
  { title: 'Ad Technologies', value: 'NADX, VAST' },
  { title: 'Secure Ad Stitching', value: 'arrow' },
];

const section6 = [{ title: 'Supported HDR formats', value: 'HDR10/10+, HLG, Dolby Vision' }];

const OnePlayer = (props) => {
  let { history } = props;
  if (isGoFromPreviousSlide()) {
    history = null;
  }
  return (
    <TechWrapper
      nextLink={<Link to="/one-hardware" />}
      previousLink={<Link to="/one-protocol" />}
      currentNumber={'02'}
      history={history}
      image={<div className={'icon_one_player'}></div>}
      title={<h1 className="TechTitle">One Player</h1>}
    >
      <p className="TechSubTitle">
       
      </p>

      {renTextData}
      <h2 className="SpecificationTitle">One Player Specification</h2>
      <TechTable title={'Operating Systems'} data={section1} />
      <TechTable title={'Streaming Formats (Online/Offline)'} data={section2} />
      <TechTable title={'Playback Features'} data={section3} />
      <TechTable title={'Security'} data={section4} />
      <TechTable title={'Video / Audio / Subtitle'} data={section5} />
      <TechTable title={'HDR Pass-through'} data={section6} />
    </TechWrapper>
  );
}

export default OnePlayer;
