import { React } from 'react';
import './style.css';
import context from '../../core/context';
import config from '../../core/config';

const selectBox = () =>
	<select
		className="select-style"
		name="selectBox"
		value={ context.state.theme }
		onChange={ (evt) => context.actions.setTheme(evt.target.value) }
	>
		{ config.boxTheme.map((theme) =>
			<option
				key={ theme }
				value={ theme }
			>
				{ theme }
			</option>) }
	</select>;

export default selectBox;
