import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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

export default withStyles(styles)(Price);