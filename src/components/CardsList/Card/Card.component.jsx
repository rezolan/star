import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import { componentsConverter } from '../../../constants/componentsConverner';
import { styles } from './Card.styles';

const Card = ({ data, currentTemplate: { template }, classes: { card, container } }) => (
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
						{data[field] ? (
							<ComponentType
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
);

Card.propTypes = {
	data: PropTypes.object.isRequired,
	currentTemplate: PropTypes.object.isRequired,
	classes: PropTypes.object

};

export default withStyles(styles)(Card);