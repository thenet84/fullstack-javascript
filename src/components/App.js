import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  
  static propTypes = {
    initialData : PropTypes.object.isRequired
  };
  state = this.props.initialData;

  componentDidMount(){
    /*api.fetchContestList().then(contests => {
      this.setState({
        contests: contests
      });
    })
      .catch(console.error);*/
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
        currentContestId: contest.id,
        constest: {
          ...this.state.contests,
          [contestId]: contest
        }
      });
    });
  };

  pageHeader(){
    if(this.state.currentContestId){
      return this.currentContest().contestName;
    }
    return 'Naming Contest';
  }

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
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
