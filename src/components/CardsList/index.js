import React, { Component } from 'react';
import Card from './Card';

const CardsList = ({ cards, currentTemplate }) => {
	const { cardsList } = cards;
	return (
			<div className="cards-list">
				{cardsList.map(card => <Card data={card} currentTemplate={currentTemplate} key={card.id}/>)}
			</div>
		)
};

export default CardsList;