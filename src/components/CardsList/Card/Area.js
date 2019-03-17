import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
	theme,
	area: {
		padding: '20px 0 0',
	},
});

const Area = ({ data, classes: { area } }) => {
	return (
		<div className={area}>
			{ data } sq.fr.
		</div>
	)
};

Area.propTypes = {
	data: PropTypes.number.isRequired,
	classes: PropTypes.object
};

export default withStyles(styles)(Area);