import React from 'react';
import PropTypes from 'prop-types';

const Address = ({ data }) => {
	return (
		<h4>
			{ data }
		</h4>
	)
};

Address.propTypes = {
	data: PropTypes.string.isRequired
};

export default Address;