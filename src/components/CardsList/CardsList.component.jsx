import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { Card } from './Card';

const CardsList = ({ currentTemplate, cards: { cardsList } }) => (
	<Grid
		container
		spacing={8}
		alignItems="stretch">
		{cardsList.map(card => {
			return (
				<Grid
					xs={12}
					md={4}
					item
					container
					alignItems="stretch"
					key={card.id}>
					<Card data={card} currentTemplate={currentTemplate}/>
				</Grid>)})
		}
	</Grid>
);

CardsList.propTypes = {
	cards: PropTypes.object.isRequired,
	currentTemplate: PropTypes.object.isRequired
};

export default CardsList;