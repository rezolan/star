import React, {Fragment} from 'react';
import componentsConverter from '../../../constants/componentsConverner';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid/Grid';

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

const Card = (props) => {
	const { currentTemplate: { template }, data, classes: { card, container } } = props;
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
export default withStyles(styles)(Card);