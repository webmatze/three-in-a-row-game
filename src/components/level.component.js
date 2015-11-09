import React, { PropTypes } from 'react'
import { Field } from './field.component'
import { seedRandom } from '../seed-random'

export var Level = React.createClass({
  propTypes: {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    level: PropTypes.shape({
      id: PropTypes.number.isRequired,
      seed: PropTypes.number.isRequired,
      stones: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired
  },
  getInitialState() {
    return {
      points: 0,
      fields: []
    };
  },
  componentDidMount() {
    var fields = this._initializeFields(this.props.level);
    this.setState({ fields: fields.concat([]) });
  },
  _initializeFields(level) {
    var fieldCount = this.props.width * this.props.height;
    var fields = [];
    var myRandomizer = seedRandom(level.seed, level.stones.length);
    for (var i = 0; i < fieldCount; i++) {
      var stone = level.stones[myRandomizer.next()];
      fields.push({ id: i, stone: stone, state: 0 });
    }
    return fields;
  },
  _handleFieldClick(field) {
    field.state += 1;
    this.setState({ fields: this.state.fields });
  },
  render() {
    var createFields = (field, index) => {
      return (
        <Field key={ field.id } field={ field } onFieldClick={ this._handleFieldClick } />
      );
    };
    return (
      <div className="level">{ this.state.fields.map(createFields) }</div>
    );
  }
});
