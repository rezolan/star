import React, { PureComponent } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
import { fetchCards, fetchTemplates } from '../actions';
import TemplatesList from '../components/TemplatesList';

class App extends PureComponent {
  componentDidMount() {
		this.props.fetchCards();
		this.props.fetchTemplates();
		console.log(11111, this.props);
	}
	render() {
  	const { cards, templates } = this.props;
		console.log(('templates', templates));
		return (
      <div className="App">
				<TemplatesList templates={templates} cards={cards}/>
        <CardsList cards={cards} currentTemplate={templates.templatesList[0]}/>
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
