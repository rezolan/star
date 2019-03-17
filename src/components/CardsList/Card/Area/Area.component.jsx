import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { styles } from './Area.styles';


const Area = ({ data, classes: { area } }) => (
	<div className={area}>
		{ data } sq.fr.
	</div>
);

Area.propTypes = {
	data: PropTypes.number.isRequired,
	classes: PropTypes.object
};

export default withStyles(styles)(Area);