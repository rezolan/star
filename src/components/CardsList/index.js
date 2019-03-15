import React, { Component } from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid/Grid';

const CardsList = ({ cards, currentTemplate }) => {
	const { cardsList } = cards;
	return (
			<Grid container spacing={8}>
				{cardsList.map(card => {
					return (
						<Grid
							xs={12}
							md={4}
							item
							key={card.id}>
							<Card data={card} currentTemplate={currentTemplate}/>
						</Grid>)})
				}
			</Grid>
		)
};

export default CardsList;