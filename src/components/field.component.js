"use strict";

var React = require('react');

var Field = React.createClass({
  propTypes: {
    field: React.PropTypes.object,
    onFieldClick: React.PropTypes.func
  },
  _handleClick: function(event) {
    this.props.onFieldClick(this.props.field);
  },
  render: function() {
    var styles = {
      width: "10%",
      height: "30px",
      backgroundColor: this.props.field.stone.color
    };
    var content = [this.props.field.stone.id, "/", this.props.field.state].join('');
    return (
      <div className="field" style={ styles } onClick={ this._handleClick }>{ content }</div>
    );
  }
});

module.exports = Field;
