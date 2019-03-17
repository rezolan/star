import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import PropTypes from 'prop-types';
import { styles } from './Image.styles';
import { noImage } from '../../../../constants/images';

const Image  = ({ data, children, classes: { image, root, child } }) => (
	<div className={image}>
		<CardMedia
			component='div'
			image={data[0] || noImage}
			className={root}/>
		<div className={child}>
			{children}
		</div>
	</div>
);

Image.propTypes = {
	data: PropTypes.array.isRequired,
	children: PropTypes.array,
	classes: PropTypes.object
};

export default withStyles(styles)(Image);