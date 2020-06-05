import React from 'react';
import './index.scss';
import TechWrapper from '../../shared/components/TechWrapper';

function Page404() {
  return (
    <TechWrapper lockToolbar={true} fullscreen={false} back={false}>
      <div className="page-404__body">
        <div className="page-404__body-icon"></div>
        <div className="page-404__body-content">
          <h1 className="page-404__body-content__title">Sorry, page not found</h1>
          <h2 className="page-404__body-content__subtitle">Let's try from the start</h2>
          <div className="page-404__body-button">
            <button
              id="RequestSubmit"
              className="styledButton RequestTrialP-submit"
              type="submit"
              name="Submit"
            >
              {' '}
              Back Home
            </button>
          </div>
        </div>
      </div>
    </TechWrapper>
  );
}

export default Page404;
