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

const TechTable = ({ title, data }) => {

  const renData = data.map((obj, key) => {
    return (
        <div key={key} className='SpecificationLine'>
          <div className="left">{obj.title}</div>
          <div className="right">{obj.value === 'arrow' ? <span className="check-arrow"/> : obj.value}</div>
        </div>
    );
  });

  return (
      <>
        <h3 className="SpecificationSubTitle">{title}</h3>
        <div className='SpecificationBlock'>
          {renData}
        </div>
      </>
  );
};

export default TechTable;
