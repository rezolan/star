import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid/Grid';
import componentsConverter from '../../../constants/componentsConverner';

const styles = theme => ({
	card: {
		border: '1px solid gray',
		padding: theme.spacing.unit * 2,
		width: '100%'
	},
	container: {
		height: '100%'
	}
});

const Card = ({ data, currentTemplate: { template }, classes: { card, container } }) => {
	return (
		<Paper className={card}>
			<Grid
				className={container}
				container
				direction="column"
				justify="space-between"
				alignItems="stretch">
				{template ? template.map((entity, index) => {
					const { component, field } = entity;
					const ComponentType = componentsConverter[component];
					return (
						<Fragment key={index}>
							{data[field] ? (<ComponentType
								data={data[field]}
								type={entity.component}>
								{entity.children ? entity.children.map((child, index) => {
									const { component, field } = child;
									const ComponentType = componentsConverter[component];
									return (
										<ComponentType
											data={data[field]}
											type={component}
											isChild={true}
											key={index}/>);
								}) : null}
							</ComponentType>) : null}
						</Fragment>
					)
				}): null}
			</Grid>
		</Paper>
	)
};

Card.propTypes = {
	data: PropTypes.object.isRequired,
	currentTemplate: PropTypes.object.isRequired,
	classes: PropTypes.object

};

export default withStyles(styles)(Card);