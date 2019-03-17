import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardsList } from '../components/CardsList';
import { TemplatesList } from '../components/TemplatesList';
import { fetchCards, fetchTemplates, changeTemplate } from '../actions';


class App extends PureComponent {
	componentDidMount() {
		this.props.fetchCards();
		this.props.fetchTemplates();
	}
	render() {
		const { cards, templates, changeTemplate } = this.props;
		return (
			<div className="App">
				{!cards.isLoading && !templates.isLoading ?
					cards.error || templates.error ?
						<h1>Something went wrong</h1> :
						<>
							<TemplatesList
								templates={templates}
								data={cards.cardsList[0]}
								changeTemplate={changeTemplate}/>
							<CardsList
								cards={cards}
								currentTemplate={templates.currentTemplate}/>
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

App.propTypes = {
	cards: PropTypes.object.isRequired,
	templates: PropTypes.object.isRequired,
	fetchCards: PropTypes.func.isRequired,
	fetchTemplates: PropTypes.func.isRequired,
	changeTemplate: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
