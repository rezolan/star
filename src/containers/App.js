import React, { PureComponent } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
import { fetchCards, fetchTemplates } from '../actions';

class App extends PureComponent {
  componentDidMount() {
		this.props.fetchCards();
		this.props.fetchTemplates();
		console.log(11111, this.props);
	}
	render() {
  	const { cards } = this.props;
    return (
      <div className="App">
        <CardsList cards={cards}/>
      </div>
    );
  }
}

const mapStateToProps = ({ cards, templates }) => ({ cards, templates });
const mapDispatchToProps = dispatch => ({
	fetchCards: () => dispatch(fetchCards()),
	fetchTemplates: () => dispatch(fetchTemplates())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
