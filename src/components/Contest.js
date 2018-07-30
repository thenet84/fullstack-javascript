import React from 'react';
import PropTypes from 'prop-types';


const Contest = ({description, contestListClick}) => (
  <div>
    <div className='contest-description'>
      {description}
    </div>
    <div className='home-link link' onClick={contestListClick}>
      Contest list
    </div>
  </div>
);

Contest.propTypes = {
  description : PropTypes.string.isRequired,
  contestListClick : PropTypes.func.isRequired
};

export default Contest;