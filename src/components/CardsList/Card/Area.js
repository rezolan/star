import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	theme,
	area: {
		padding: '20px 0 0',
	},
});

const Area = ({ data, classes: { area, theme } }) => {
	return (
		<div className={area}>
			{ data } sq.fr.
		</div>
	)
};

export default withStyles(styles)(Area);