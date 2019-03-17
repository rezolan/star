import React from 'react';
import { Area } from '../components/CardsList/Card/Area';
import { Image } from '../components/CardsList/Card/Image';
import { Address } from '../components/CardsList/Card/Address';
import { Price } from '../components/CardsList/Card/Price';

export const componentsConverter = {
	AREA: props => <Area {...props}/>,
	IMAGE: props => <Image {...props}/>,
	ADDRESS: props => <Address {...props}/>,
	PRICE: props => <Price {...props}/>
};
