import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest',
    contests: this.props.initialContests
  };

  componentDidMount(){
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);
    
  }

  componentWillUnmount(){
    //console.log('Will unmount');
  }

  fetchContest = (contestId) =>{
    pushState(
      {currentContestId: contestId},
      '/contest/'+contestId
    );
  }
  
  render(){
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <ContestList 
          onContestClick = {this.fetchContest}
          contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
