import React from 'react';
import Card from './CardsList/Card';

const TemplatesList = ({ templates, cards }) => {
	const { templatesList, isLoading } = templates;
	const { cardsList } = cards;
	console.log('isLoading', cards);
	return (
		<div className="templates-list">
			<h1>Choose the template</h1>
			{cardsList[0] ? templatesList.map(temp => {
				return <Card data={cardsList[0]} currentTemplate={temp.template} key={temp.id}/>
			}): null}
			<h2>End</h2>
		</div>
	)
};

export default TemplatesList;