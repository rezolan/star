import React, { Component } from 'react';
import Card from './Card';

const CardsList = ({ cards, currentTemplate }) => {
	const { cardsList } = cards;
	console.log('currentTemplate', currentTemplate);
	const template = [
		{
			"component": "IMAGE",
			"field": "images"
		},
		{
			"component": "ADDRESS",
			"field": "full_address"
		},
		{
			"component": "PRICE",
			"field": "price"
		},
		{
			"component": "AREA",
			"field": "area"
		}
	];
	return (
			<div className="cards-list">
				{cardsList.map(card => <Card data={card} currentTemplate={template} key={card.id}/>)}
			</div>
		)
};

export default CardsList;