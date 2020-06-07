import React from 'react';
import { Link } from 'react-router-dom';
import { isGoFromPreviousSlide } from '../../shared/tools/HistoryHeleper';

const OneHardware = (props) =>{
  let { history } = props;
  if (isGoFromPreviousSlide()) {
    history = null;
  }
  return (
    <>
        <div className="white__back">
            
        </div>
    </>
  );
}

export default OneHardware;
