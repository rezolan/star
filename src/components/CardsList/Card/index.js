import React, {PureComponent} from 'react';
import componentsConverter from '../../../constants/componentsConverner';

const Card = (props) => {
	const { currentTemplate: { template }, data } = props;
	console.log('props', props);
	return (
		<div className="card" style={{border: '1px solid'}}>
			{template ? template.map((entity, index) => {
				const { component, field } = entity;
				const ComponentType = componentsConverter[component];
				return (
					<ComponentType
						key={index}
						data={data[field]}
						type={entity.component}>
						{entity.children ? entity.children.map((child, index) => {
							const { component, field } = child;
							const ComponentType = componentsConverter[component];
							return (
								<ComponentType
									data={data[field]}
									type={component}
									key={index}/>);
						}) : null}
					</ComponentType>
				)
			}): null}
		</div>
	)
};
export default Card;