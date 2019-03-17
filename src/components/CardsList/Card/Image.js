import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';

const styles = theme => ({
	image: {
		position: 'relative',
	},
	root: {
		height: '150px',
	},
	child: {
		position: "absolute",
		top: '10px',
		left: '10px',
		color: '#fff'
	}
});

class Image extends Component {
	render() {
		const { data, children, classes: { image, root, child } } = this.props;
		return (
			<div className={image}>
				<CardMedia component='div' image={data[0]} className={root}/>
				<div className={child}>
					{children}
				</div>
			</div>
		)
	}
}

Image.propTypes = {
	data: PropTypes.array.isRequired,
	children: PropTypes.array,
	classes: PropTypes.object
};

export default withStyles(styles)(Image);