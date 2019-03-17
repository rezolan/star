import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
	child: {
		backgroundColor: 'rgba(0,0,0,0.39)',
		padding: '5px'
	}
});

const Price = ({ data, isChild, classes: { child } }) => {
	return (
		<div className={isChild ? child : null}>${ `${data}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }</div>
	)
};

Price.propTypes = {
	data: PropTypes.number.isRequired,
	isChild: PropTypes.bool,
	classes: PropTypes.object
};

export default withStyles(styles)(Price);