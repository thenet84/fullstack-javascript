import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest'
  };
  componentDidMount(){
    console.log('Did mount');
  }

  componentWillUnmount(){
    console.log('Will unmount');
  }
  
  render(){
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
  
        </div>
      </div>
    );
  }
}

export default App;
