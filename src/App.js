import { React } from 'react';
import './App.css';
// import Pendulum from './components/pendulum';
// import Logo from './components/logo';
import TreasureBox from './components/treasure-box';

const App = () =>
	<div className="App">
		<div>{ TreasureBox() }</div>
	</div>
;

export default App;

// <div>{ Pendulum() }</div>
// <div>{ Logo() }</div>
