import React from 'react';
import * as api from '../api';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest',
    contests: this.props.initialContests
  };

  componentDidMount(){
    api.fetchContestList().then(contests => {
      this.setState({
        contests: contests
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
    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        constest: {
          ...this.state.contests,
          [contestId]: contest
        }
      });
    });
  };
  currentContest(){
    return this.state.contests[this.state.currentContestId];
  }

  currentContent(){
    if(this.state.currentContestId){
      return <Contest {...this.currentContest()} />;
    }
    return <ContestList 
      onContestClick = {this.fetchContest}
      contests={this.state.contests} />;
  }

  render(){
    return (
      <div>
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
