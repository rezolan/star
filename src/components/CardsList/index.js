import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const mapStateToProps = ({ cards }) => ({ cards });
class CardsList extends Component {
	render() {
		console.log(1111, this.props);
		return (
			<div className="cards-list">
			</div>
		)
	}
}

export default connect(mapStateToProps)(CardsList);