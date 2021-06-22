import { React } from 'react';
import './App.css';
import Pendulum from './components/pendulum';
import Logo from './components/logo';

const App = () =>
	<div className="App">
		<div>{ Pendulum() }</div>
		<div>{ Logo() }</div>
	</div>
;

export default App;
