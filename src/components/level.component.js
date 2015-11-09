import React, { PropTypes } from 'react'
import { Field } from './field.component'
import { seedRandom } from '../seed-random'

export var Level = React.createClass({
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
  componentDidMount: function() {
    var fields = this._initializeFields(this.props.level);
    this.setState({ fields: fields.concat([]) });
  },
  _initializeFields: function(level) {
    var fieldCount = this.props.width * this.props.height;
    var fields = [];
    var myRandomizer = seedRandom(level.seed, level.stones.length);
    for (var i = 0; i < fieldCount; i++) {
      var stone = level.stones[myRandomizer.next()];
      fields.push({ id: i, stone: stone, state: 0 });
    }
    return fields;
  },
  _handleFieldClick: function(field) {
    field.state += 1;
    this.setState({ fields: this.state.fields });
  },
  render: function() {
    var createFields = function(field, index) {
      return (
        <Field key={ field.id } field={ field } onFieldClick={ this._handleFieldClick } />
      );
    }.bind(this);
    return (
      <div className="level">{ this.state.fields.map(createFields) }</div>
    );
  }
});
