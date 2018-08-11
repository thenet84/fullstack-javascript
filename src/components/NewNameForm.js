import React from 'react';
import PropTypes from 'prop-types';

class NewNameForm extends React.Component{
  constructor(){
    super();
    this.input = React.createRef();
  }

  handleSubmit = event =>{
    event.preventDefault();
    this.props.addName(this.input.current.value, this.props.contestId);
    this.input.current.value = '';
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text'
          placeholder='New name here'
          ref={this.input}/>
        <button type='submit'>Submit</button>
      </form>
    );
  } 
}

NewNameForm.propTypes = {
  contestId: PropTypes.string.isRequired,
  addName: PropTypes.func.isRequired,
};

export default NewNameForm;