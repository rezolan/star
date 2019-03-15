import React from 'react';
import Card from './CardsList/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const TemplatesList = ({ templates, data, changeTemplate }) => {
	const { templatesList } = templates;
	return (
		<div className="templates-list">
			<h1>Choose the template</h1>
			<Grid container spacing={24}>
				{templatesList.map(temp => (
					<div
						onClick={() => changeTemplate(temp.id)}
						key={temp.id}>
						<Card
							data={data}
							currentTemplate={temp}/>
					</div>))}
			</Grid>
			<h2>End</h2>
		</div>
	)
};

export default TemplatesList;