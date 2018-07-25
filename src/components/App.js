import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestList from './ContestList';


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
  
  render(){
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
