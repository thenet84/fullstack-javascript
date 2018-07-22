import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const color = Math.random() > 0.5 ? 'green' : 'red';

const App = (props) => {
  return (
    <h2 className='text-center' style={{color: color}}>
      {props.headerMessage} -- {Math.random()}
    </h2>
  );
};

App.propTypes = {
  headerMessage: PropTypes.string
};

App.defaultProps = {
  headerMessage: 'Hello'
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
