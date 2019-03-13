import React, {Component} from 'react';
import Address from './Address';
import Area from './Area';
import Image from './Image';
import Price from './Price';


export default class Index extends Component {
	render() {
		return (
			<div className="card">
				<Image/>
				<Address/>
				<Price/>
				<Area/>
			</div>
		)
	}
}