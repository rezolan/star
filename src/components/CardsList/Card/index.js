import React, {PureComponent} from 'react';
import componentsConverter from '../../../constants/componentsConverner';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	card: {
		border: '1px solid gray',
		padding: theme.spacing.unit * 2,
	},
});

const Card = (props) => {
	const { currentTemplate: { template }, data, classes } = props;
	console.log('props', props);
	return (
		<div className={classes.card}>
			{template ? template.map((entity, index) => {
				const { component, field } = entity;
				const ComponentType = componentsConverter[component];
				return (
					<ComponentType
						key={index}
						data={data[field]}
						type={entity.component}>
						{entity.children ? entity.children.map((child, index) => {
							const { component, field } = child;
							const ComponentType = componentsConverter[component];
							return (
								<ComponentType
									data={data[field]}
									type={component}
									key={index}/>);
						}) : null}
					</ComponentType>
				)
			}): null}
		</div>
	)
};
export default withStyles(styles)(Card);