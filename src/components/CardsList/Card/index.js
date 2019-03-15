import React, {PureComponent} from 'react';
import Address from './Address';
import Area from './Area';
import Image from './Image';
import Price from './Price';

const Card = (props) => {
	const { currentTemplate: { template }, data } = props;
	const converter = {
		AREA: props => <Area {...props}/>,
		IMAGE: props => <Image {...props}/>,
		ADDRESS: props => <Address {...props}/>,
		PRICE: props => <Price {...props}/>
	};
	console.log('props', props);
	return (
		<div className="card" style={{border: '1px solid'}}>
			{template ? template.map((entity, index) => {
				const { component, field } = entity;
				const ComponentType = converter[entity.component];
				return (
					<ComponentType key={index} data={data[field]}/>
				)
			}): null}
		</div>
	)
};
export default Card;