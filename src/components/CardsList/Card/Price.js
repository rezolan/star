import React from 'react';

const Price = props => {
	return (
		<div>{props.currency} {props.price}</div>
	)
}

export default Price;