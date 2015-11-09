(function() {
  'use strict';

  var React = require('react');
  var ReactDOM = require('react-dom');

  //Components
  var Level = require('./components/level.component');

  var red = { id: 1, color: "red", image: "http://" };
  var blue = { id: 2, color: "blue", image: "http://" };
  var green = { id: 3, color: "green", image: "http://" };
  var yellow = { id: 4, color: "yellow", image: "http://" };
  var orange = { id: 5, color: "orange", image: "http://" };
  var grey = { id: 6, color: "grey", image: "http://" };
  var pink = { id: 7, color: "pink", image: "http://" };

  var LEVELS = [
    { id: 1, seed: 12345, stones: [red, blue, green, yellow, orange, grey, pink] }
  ];

  ReactDOM.render(
  	<Level level={ LEVELS[0] } width={ 10 } height={ 5 } />,
      document.getElementById('container')
  );
})();
