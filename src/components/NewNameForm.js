import React from 'react';

class NewNameForm extends React.Component{

  render(){
    return (
      <div>
        <input type='text'
          placeholder='New name here'/>
        <button type='submit'>Submit</button>
      </div>
    );
  }
}

export default NewNameForm;