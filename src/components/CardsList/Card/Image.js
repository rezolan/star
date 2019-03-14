import React, {Component} from 'react';

export default class Image extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className="image">
				{ data[0] }
			</div>
		)
	}
}