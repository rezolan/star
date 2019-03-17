import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Grid from '@material-ui/core/Grid/Grid';

const CardsList = ({ cards, currentTemplate }) => {
	const { cardsList } = cards;
	return (
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
		)
};

CardsList.propTypes = {
	cards: PropTypes.object.isRequired,
	currentTemplate: PropTypes.object.isRequired
};

export default CardsList;