import React, {Component} from 'react';

export default class Image extends Component {
	render() {
		const { data, children } = this.props;
		return (
			<div className="image">
				{children}
				{ data[0] }
			</div>
		)
	}
}