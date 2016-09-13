import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

//Components
import Level from './components/level.component'

const RED = { id: 1, color: "red", image: "http://" };
const BLUE = { id: 2, color: "blue", image: "http://" };
const GREEN = { id: 3, color: "green", image: "http://" };
const YELLOW = { id: 4, color: "yellow", image: "http://" };
const ORANGE = { id: 5, color: "orange", image: "http://" };
const GREY = { id: 6, color: "grey", image: "http://" };
const PINK = { id: 7, color: "pink", image: "http://" };

const LEVELS = [
  { id: 1, seed: 12345, stones: [RED, BLUE, GREEN, YELLOW, ORANGE, GREY, PINK] }
];

ReactDOM.render(
	<Level level={ LEVELS[0] } width={ 10 } height={ 5 } />,
    document.getElementById('container')
);
