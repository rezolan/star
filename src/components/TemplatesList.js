import React from 'react';
import Card from './CardsList/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});

const TemplatesList = ({ templates, data, changeTemplate }) => {
	const { templatesList } = templates;
	return (
		<div className="templates-list">
			<h1>Choose the template</h1>
			<Grid container spacing={8}>
				{templatesList.map(temp => (
					<Grid
						xs={12}
						md={4}
						item
						onClick={() => changeTemplate(temp.id)}
						key={temp.id}>
						<Card
							data={data}
							currentTemplate={temp}/>
					</Grid>))}
			</Grid>
			<h2>End</h2>
		</div>
	)
};

export default withStyles(styles)(TemplatesList);