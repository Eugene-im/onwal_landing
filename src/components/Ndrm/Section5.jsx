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


class Section5 extends React.Component {

  render() {

    return (
      <>
        <div className="ndrm-section-5 container_section">
          <div className="container_section short">
            <h2>
              Nettr DRM Specification
            </h2>

            <div className="row wrapper-contents">

              {/* ----------------------------------------------------- */}
              <div className="col contents">
                <h4>Operating Systems</h4>

                <div className="contents__list">
                  <div className="row">
                    <div className="col">Windows 7/8/10 (x86/x64)</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>

                  <div className="row">
                    <div className="col">OSX</div><div className="col"><i className="icon icon-check"></i></div>
                  </div>

                  <div className="row">
                    <div className="col">Linux 4.0+</div><div className="col"><i className="icon icon-check"></i></div>
                  </div>

                  <div className="row">
                    <div className="col">iOS</div><div className="col"><i className="icon icon-check"></i></div>
                  </div>

                  <div className="row">
                    <div className="col">Android / Android TV</div><div className="col"><i className="icon icon-check"></i></div>
                  </div>
                </div>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                <h4>Streaming Formats (Online/Offline)</h4>

                <div className="contents__list">
                  <div className="row">
                    <div className="col">NMPS</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>

                  <div className="row">
                    <div className="col">HLS</div><div className="col">Customized solution </div>
                  </div>

                  <div className="row">
                    <div className="col">MPEG-Dash</div><div className="col">Customized solution</div>
                  </div>
                </div>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                <h4>Video / Audio / Subtitle</h4>

                <div className="contents__list">

                  <div className="row">
                    <div className="col">Video codecs</div><div className="col">Any</div>
                  </div>
                  <div className="row">
                    <div className="col">Audio codecs</div><div className="col">Any</div>
                  </div>
                  <div className="row">
                    <div className="col">Containers</div><div className="col">Any</div>
                  </div>
                  <div className="row">
                    <div className="col">Private codecs integration</div><div className="col"><i className="icon icon-check"></i></div>
                  </div>
                  <div className="row">
                    <div className="col">Video resolutions</div><div className="col">SD/HD/UHD+</div>
                  </div>
                  <div className="row">
                    <div className="col">Audio sample rate</div><div className="col">44-352 KHz</div>
                  </div>
                  <div className="row">
                    <div className="col">HD audio bitstream</div><div className="col">Yes</div>
                  </div>
                  <div className="row">
                    <div className="col">HDR Processing by NUSP</div><div className="col">For non HDR displays only</div>
                  </div>
                  <div className="row">
                    <div className="col">Multi Language support</div><div className="col"><i className="icon icon-check"></i></div>
                  </div>
                  <div className="row">
                    <div className="col">360 video interactive support</div><div className="col"><i className="icon icon-check"></i></div>
                  </div>
                  <div className="row">
                    <div className="col">Customize subtitle</div><div className="col"><i className="icon icon-check"></i></div>
                  </div>
                  <div className="row">
                    <div className="col">Subtitle formats</div><div className="col">Subtitle formats DVB, PGS, RealText, WebVTT, SRT, SSA/ASS</div>
                  </div>
                  <div className="row">
                    <div className="col">Ad Technologies</div><div className="col"><i className="icon icon-check"></i></div>
                  </div>
                  <div className="row">
                    <div className="col">Secure Ad Stitching</div><div className="col">NADX, VAST</div>
                  </div>



                </div>



              </div>

              {/* ----------------------------------------------------- */}
              <div className="col contents">

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                <h4>SDK Features</h4>

                <div className="contents__list">

                  <div className="row">
                    <div className="col">DRM version selection</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>

                  <div className="row">
                    <div className="col">DRM client version selection</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>

                  <div className="row">
                    <div className="col">Quality control</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>

                  <div className="row">
                    <div className="col">NMPS version control</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>

                  <div className="row">
                    <div className="col">Control NMPS media type</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>

                  <div className="row">
                    <div className="col">Control stream type</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>

                  <div className="row">
                    <div className="col">Advanced license models</div><div className="col">Subscription, TV/Radio, Rental, Purchase, Live, PPV, SMT, FMT, Trailer.</div>
                  </div>

                  <div className="row">
                    <div className="col">Secure Media Path</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">NDRM level selection</div><div className="col">Software / Hardware TEE </div>
                  </div>
                  <div className="row">
                    <div className="col">Geography restriction</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Demography restriction</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Control playback count</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Control device playback</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Platform control</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Device architecture control</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">OS specific control</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Lite access (Offline View)</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Streaming cache control</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Display control</div><div className="col">HDCP, DPCP, Analog</div>
                  </div>
                  <div className="row">
                    <div className="col">Trusted clock</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Audio control</div><div className="col">Output port, Audio formats Pass-through, Decoding level</div>
                  </div>
                  <div className="row">
                    <div className="col">Anti-debugging</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Anti-tampering</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Root detection</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Integrity checking</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                  <div className="row">
                    <div className="col">Development</div><div className="col"><i className="icon icon-check"></i> </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }

}


export default Section5;
