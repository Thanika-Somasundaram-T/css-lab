import { React } from 'react';
import config from '../../core/config';
import context from '../../core/context';

const { randomNumber } = config;

// eslint-disable-next-line complexity
const boxes = (variable) =>
	<div
		// key={ (fixed - variable) + 1 }
		// eslint-disable-next-line no-magic-numbers
		className={ `treasure-box ${ context.state.theme }-${ variable % 2 !== 0 ? 'one' : 'two' } ` }
	>
		{ variable === 1
			? randomNumber
			: boxes(variable - 1) }
	</div>
;

const InnerBoxes = () =>
	boxes(randomNumber);

export default InnerBoxes;
