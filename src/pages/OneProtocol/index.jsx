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
    title: 'A universal streaming protocol for data delivery',
    text:
      ['Legacy streaming protocols have grown limited, complex and incompatible to deliver evolving needs of content creators and cater to the ultimate requirement of streaming across different platforms.', 'Nettr Multi-Protocol Streaming (NMPS) simplifies as well as revolutionizes media delivery by offering immersive agnostics support, multi-layered, smart and secure protocol and adaptive lower level protocol.'],
  },
  {
    title: 'Immersive agnostics support – Codecs, File Format, ABR and platform Agnostics',
    text:
      'With a real-time streaming protocol like NMPS both consumer and professional codecs for streaming delivery are supported, streaming is possible on any file format to any device, creators can switch in-between file formats and codecs and get seamless operation across Windows, Android, iOS, Linux and OSX platforms.',
  },
  {
    title: 'Multi-layered, Secure, SMART and Business Friendly',
    text: 'As a content creator, you have secured access to load various versions of media quality and create unlimited MX, Primary and Legacy profiles with all media content protected within a Trusted Execution Environment (TEE) that is hardware/software based; only using the Nettr Multi-Protocol Streaming. We have revolutionized SMART content delivery using the NMPS by building a smart dictionary model media structure to load content under their multi-layered profiles. NMPS is tailor-made to suit your business model and offers a distinguished premium streaming service.',
  },
  {
    title: 'Adaptive low-level protocol – Faster, Realtime and Lossless',
    text:
      'The NMPS is built to dynamically adapt to network conditions and manifest rules of the NMPS. Supporting both TCP an UDP, the NMPS avoids re-buffering of stream, saves bandwidth and reduces traffic considerably. NMPS uses an intelligent machine-learning ABR system that allows it to load faster than legacy streaming technologies and adapt to highest quality of streaming. This makes NMPS avoid data loss and recover missing stream while operating.',
  },
].map((obj, index) => {
  if (Array.isArray(obj.text)) {
    return (
      <>
        <h2 key={`title-${index}`} className="TechArticleTitle">
          {obj.title}
        </h2>
        <p key={`text-${index}`} className="TechArticleText">
          {obj.text.map((text, index) =>
            index !== 0 ? (
              <div key={`d-${index}`} >
                <br />
                <br />
                {text}
              </div>
            ) : (
              text
            )
          )}
        </p>
      </>
    );
  }
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

const OneProtocol = (props) => {
  let { history } = props;
  if (isGoFromPreviousSlide()) {
    history = null;
  }
  return (
    <TechWrapper
      nextLink={<Link to="/one-player" />}
      previousLink={<Link to="/" />}
      lockPrevious={true}
      currentNumber={'01'}
      history={history}
      image={<div className={'icon_one_protocol'}></div>}
      title={<h1 className="TechTitle">One Protocol</h1>}
    >
      <p className="TechSubTitle">
       {' '}
      </p>
      {renTextData}
    </TechWrapper>
  );
}

export default OneProtocol;
