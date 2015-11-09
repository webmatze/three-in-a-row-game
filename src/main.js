(function() {
  'use strict';

  var React = require('react');
  var ReactDOM = require('react-dom');
  var seedRandom = require('./seed-random');

  var STONES = [
    { id: 1, color: "red", image: "http://" },
    { id: 2, color: "blue", image: "http://" },
    { id: 3, color: "green", image: "http://" },
    { id: 4, color: "yellow", image: "http://" },
    { id: 5, color: "orange", image: "http://" },
    { id: 6, color: "grey", image: "http://" },
    { id: 7, color: "pink", image: "http://" }
  ];
  var LEVELS = [
    { id: 1, seed: 12345, stones: [1, 2, 3, 4, 5, 6, 7] }
  ];

  var Field = React.createClass({
    handleClick: function(event) {
      this.props.onFieldClick(this.props.id);
    },
    render: function() {
      var stone = STONES.find(function(s) { return s.id == this.props.stone; }.bind(this));
      var styles = {
        width: "10%",
        height: "30px",
        backgroundColor: stone.color
      };
      var content = [stone.id, "/", this.props.state].join('');
      return (
        <div className="field" style={styles} onClick={this.handleClick}>{ content }</div>
      );
    }
  });

  var Level = React.createClass({
    __initializeFields: function(level) {
      var fieldCount = this.props.width * this.props.height;
      var fields = [];
      var myRandomizer = seedRandom(level.seed, level.stones.length);
      for (var i = 0; i < fieldCount; i++) {
        var stoneId = level.stones[myRandomizer.next()];
        fields.push({ id: i, stone: stoneId, state: 0 });
      }
      return fields;
    },
    getInitialState: function() {
      return {
        points: 0,
        fields: []
      };
    },
    componentDidMount: function() {
      var levelId = this.props.id;
      var level = LEVELS.find(function(l) {
        return l.id == levelId;
      });
      var fields = this.__initializeFields(level);
      this.setState({ fields: fields.concat([]) });
    },
    handleFieldClick: function(fieldId) {
      var field = this.state.fields.find(function(f){ return f.id == fieldId; });
      field.state += 1;
      this.setState({ fields: this.state.fields });
    },
    render: function() {
      var createFields = function(field, index) {
         return (
           <Field key={ field.id } id={ field.id } stone={ field.stone } state={ field.state } onFieldClick={ this.handleFieldClick } />
         );
      }.bind(this);
      return (
        <div className="level">{ this.state.fields.map(createFields) }</div>
      );
    }
  });

  ReactDOM.render(
  	<Level id="1" width="10" height="5" />,
      document.getElementById('container')
  );
})();
