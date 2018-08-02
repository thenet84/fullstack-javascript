import React from 'react';
import PropTypes from 'prop-types';

class Contest extends React.Component{
  componentDidMount(){
    this.props.fetchNames(this.props.nameIds);
  }

  render(){
    return(
      <div>
        <div className='contest-description'>
          {this.props.description}
        </div>
        <div>
          <ul>
            {this.props.nameIds.map(nameId =>
              <li key={nameId}>
                {this.props.lookupName(nameId).name}
              </li>
            )}
          </ul>
        </div>
        <div className='home-link link' onClick={this.props.contestListClick}>
          Contest list
        </div>
      </div>
    );
  }

}


Contest.propTypes = {
  description: PropTypes.string.isRequired,
  fetchNames: PropTypes.func.isRequired,
  lookupName: PropTypes.func.isRequired,
  nameIds: PropTypes.array.isRequired,
  contestListClick: PropTypes.func.isRequired
};

export default Contest;