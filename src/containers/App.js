import React, { PureComponent } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
import { fetchCards, fetchTemplates, changeTemplate } from '../actions';
import TemplatesList from '../components/TemplatesList';

class App extends PureComponent {

  componentDidMount() {
		this.props.fetchCards();
		this.props.fetchTemplates();
		console.log(this.props.changeTemplate);
	}
	render() {
  	const { cards, templates, changeTemplate } = this.props;
		console.log(this.props);
		return (
      <div className="App">
				{!cards.isLoading && !templates.isLoading ?
					<>
						<TemplatesList
							templates={templates}
							data={cards.cardsList[0]}
							changeTemplate={changeTemplate}/>
						<CardsList
							cards={cards}
							currentTemplate={templates.templatesList[0]}/>
					</>
					 : null}
      </div>
    );
  }
}

const mapStateToProps = ({ cards, templates }) => ({ cards, templates });
const mapDispatchToProps = dispatch => ({
	fetchCards: () => dispatch(fetchCards()),
	fetchTemplates: () => dispatch(fetchTemplates()),
	changeTemplate: (id) => dispatch(changeTemplate(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
