import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

import data from '../testData';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest',
    contests: []
  };

  componentDidMount(){
    this.setState({
      contests: data.contests
    });
  }

  componentWillUnmount(){
    //console.log('Will unmount');
  }
  
  render(){
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
