import React from 'react';
import PropTypes from 'prop-types';
import NewNameForm from './NewNameForm';

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
          -------------------
          <NewNameForm 
            addName={this.props.addName}
            contestId={this.props._id} />
        </div>
        <div className='home-link link' onClick={this.props.contestListClick}>
          Contest list
        </div>
      </div>
    );
  }

}


Contest.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nameIds: PropTypes.array.isRequired,
  fetchNames: PropTypes.func.isRequired,
  lookupName: PropTypes.func.isRequired,
  addName: PropTypes.func.isRequired,
  contestListClick: PropTypes.func.isRequired
};

export default Contest;