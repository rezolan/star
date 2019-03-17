import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import { componentsConverter } from '../../../constants/componentsConverner';
import { styles } from './Card.styles';

const Card = ({ data, isActive, currentTemplate: { template }, classes: { card, container, acive } }) => (
	<Paper
		className={card}
		style={isActive ? {backgroundColor: '#bfbfbf'}: null}>
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
	isActive: PropTypes.bool,
	currentTemplate: PropTypes.object.isRequired,
	classes: PropTypes.object

};

export default withStyles(styles)(Card);