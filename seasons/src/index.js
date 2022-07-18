import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: '' };
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
      return <SeasonDisplay lat={this.state.lat}  />
<<<<<<< HEAD
      }
  
=======
    }

    return <Loader  textMessage = "Waiting For Location Approving"/>
>>>>>>> 24cdbccc8b9eacc7c1688e8b2e069568781dd946
  }


ReactDOM.render(<App />, document.querySelector('#root'))