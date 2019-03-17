import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { styles } from './Price.styles';

const Price = ({ data, isChild, classes: { child } }) => (
	<div className={isChild ? child : null}>
		${ `${data}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
	</div>
);

Price.propTypes = {
	data: PropTypes.number.isRequired,
	isChild: PropTypes.bool,
	classes: PropTypes.object
};

export default withStyles(styles)(Price);