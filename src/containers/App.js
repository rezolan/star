import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
// import { bindActionCreators } from 'redux';
import { fetchCards } from '../actions';

const mapDispatchToProps = dispatch => ({ fetchCards: () => dispatch(fetchCards()) });
class App extends Component {
  componentDidMount() {
		console.log(this.props.fetchCards());
	}

	render() {
    return (
      <div className="App">
        <CardsList/>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
