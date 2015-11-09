"use strict";

var React = require('react');
var Field = require('./field.component');
var seedRandom = require('./../seed-random');

var Level = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    level: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      points: 0,
      fields: []
    };
  },
  __initializeFields: function(level) {
    var fieldCount = this.props.width * this.props.height;
    var fields = [];
    var myRandomizer = seedRandom(level.seed, level.stones.length);
    for (var i = 0; i < fieldCount; i++) {
      var stone = level.stones[myRandomizer.next()];
      fields.push({ id: i, stone: stone, state: 0 });
    }
    return fields;
  },
  componentDidMount: function() {
    var fields = this.__initializeFields(this.props.level);
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
        <Field key={ field.id } field={ field } onFieldClick={ this.handleFieldClick } />
      );
    }.bind(this);
    return (
      <div className="level">{ this.state.fields.map(createFields) }</div>
    );
  }
});


module.exports = Level;
