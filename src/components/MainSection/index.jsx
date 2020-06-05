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
import './index.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { swiper } from '../../shared/tools/Swipe';

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      animationState: 'revert',
      slides: [
        {
          text: 'Life changing technologies to enjoy lossless audio and video',
          header: '',
          class: 'MainSection-features-wrapper',
          classBackground: 'MainSectionBackground',
          button: {
            class: 'RequestTrialButton',
            title: 'Request Trial',
            url: '/request-trial',
          },
        },
        {
          text: 'The Full Prospective',
          header: 'Beyond Tomorrow',
          class: 'hide',
          classBackground: 'MainSectionBackground2',
          button: {
            class: 'RequestTrialButton',
            title: 'Request Trial',
            url: '/request-trial',
          },
        },
        {
          text:
            'we developed the most advanced streaming and content delivery and management technologies',
          header: 'Nettr is Ready <br /> for 5G Technology',
          class: 'hide',
          classBackground: 'MainSectionBackground3',
          button: {
            class: 'RequestTrialButton',
            title: 'Request Trial',
            url: '/request-trial',
          },
        },
        {
          text: 'Streaming Solutions',
          header: 'Customized',
          class: 'hide',
          classBackground: 'MainSectionBackground4',
          button: {
            class: 'RequestTrialButton',
            title: 'Request Trial',
            url: '/request-trial',
          },
        },
      ],
      currentSlide: {
        text: 'Life changing technologies to enjoy lossless audio and video1',
        header: '',
        class: 'MainSection-features-wrapper',
        classBackground: 'MainSectionBackground',
        button: {
          class: 'RequestTrialButton',
          title: 'Request Trial',
          url: '',
        },
      },
      currentIndex: 0,
      intervalId: null,
      showArrowsClass: 'show-arrows-class',
    };
  }

  render() {
    return (
      <div className="main-slider">
        {this.state.slides.map((elm, i) => {
          const container = (
            <section
              id="main"
              className={`parallax-group containerWrapper MainSection-container ${this.active(i)} ${
                this.state.showArrowsClass
              }`}
              onMouseOver={this.showArrrow.bind(this)}
              onMouseOut={this.hideArrow.bind(this)}
              key={`s-${i}`}
            >
              <div className={`parallax-back ${elm.classBackground} disable-parallax`}></div>
              <div className="parallax-content contentWrapper MainSection-content">
                <div className={`${elm.class} ${this.textAnim('toUp', true)}`}></div>
                <div
                  className={`MainSection-title-features ${this.indexClass()} ${this.textAnim(
                    'fromLtoR'
                  )}`}
                  dangerouslySetInnerHTML={{ __html: elm.header }}
                ></div>
                <p
                  className={`MainSection-text ${this.indexClass()} ${this.textAnim(
                    'fromRtoL'
                  )} ${this.main()}`}
                  onAnimationEnd={this.animationEnd.bind(this)}
                >
                  {elm.text}
                </p>
                <Link
                  to={`${elm.button.url}`}
                  className={`${elm.button.class} styledButton shadow MainSection-button`}
                >
                  {elm.button.title}
                </Link>
              </div>
              <div className="slider-nav">
                <div
                  className={'slider-nav-left arrow'}
                  onClick={() => this.previousSlide()}
                  onMouseOver={this.stopTimer.bind(this)}
                  onMouseOut={this.startTimerAnimation.bind(this)}
                ></div>

                <div
                  className={'slider-nav-right arrow'}
                  onClick={() => this.nextSlide()}
                  onMouseOver={this.stopTimer.bind(this)}
                  onMouseOut={this.startTimerAnimation.bind(this)}
                ></div>
              </div>

              <div className="slider-nav__indicators">
                <div className="slider-nav__indicators-row">
                  <div
                    className={`slider-nav__indicator ${this.active(0)}`}
                    onClick={e => this.selectSideByIndex(0)}
                  ></div>
                  <div
                    className={`slider-nav__indicator ${this.active(1)}`}
                    onClick={e => this.selectSideByIndex(1)}
                  ></div>
                  <div
                    className={`slider-nav__indicator ${this.active(2)}`}
                    onClick={e => this.selectSideByIndex(2)}
                  ></div>
                  <div
                    className={`slider-nav__indicator ${this.active(3)}`}
                    onClick={e => this.selectSideByIndex(3)}
                  ></div>
                </div>
              </div>
            </section>
          );

          return container;
        })}
      </div>
    );
  }

  showArrrow() {
    this.setState({ showArrowsClass: 'show-arrows-class' });
  }
  hideArrow() {
    this.setState({ showArrowsClass: '' });
  }

  textAnim(nameClass, isHeader) {
    nameClass = this.state.currentIndex === 0 && !isHeader ? 'toUpSlow' : nameClass;
    return this.state.animationState ? nameClass : '';
    // return '';
  }

  animationEnd(e) {
    this.setState({ animationState: false });
  }

  active(index) {
    return this.state.currentIndex === index ? 'active' : '';
  }

  main() {
    return this.state.currentIndex === 0 ? 'main' : '';
  }

  indexClass() {
    return `slide-${this.state.currentIndex + 1}`;
  }

  previousSlide() {
    let val = this.state.currentIndex;
    const len = this.state.slides.length - 1;
    const selectIndex = --val < 0 ? len : val;
    this.selectSideByIndex(selectIndex);
  }

  selectSideByIndex(index) {
    this.setState({ currentIndex: index });
    this.setState({ currentSlide: this.state.slides[index] });
    this.setState({ animationState: true });
  }

  nextSlide() {
    let val = this.state.currentIndex;
    const len = this.state.slides.length - 1;
    const selectIndex = val + 1 <= len ? val + 1 : 0;
    this.selectSideByIndex(selectIndex);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    this.nextSlide();
  }

  componentDidMount() {
    window.addEventListener('load', event => {
      this.startTimerAnimation();
    });
    swiper({
      left: () => {
        this.previousSlide();
      },
      right: () => {
        this.nextSlide();
      },
    });
  }

  startTimerAnimation() {
    var intervalId = setInterval(this.timer.bind(this), 10000);
    this.setState({ intervalId: intervalId });
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
  }
}

export default MainSection;
