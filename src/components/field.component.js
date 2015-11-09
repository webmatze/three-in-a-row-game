"use strict";

var React = require('react');

var Field = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    onFieldClick: React.PropTypes.func,
    stone: React.PropTypes.object,
    state: React.PropTypes.number
  },
  _handleClick: function(event) {
    this.props.onFieldClick(this.props.id);
  },
  render: function() {
    var styles = {
      width: "10%",
      height: "30px",
      backgroundColor: this.props.stone.color
    };
    var content = [this.props.stone.id, "/", this.props.state].join('');
    return (
      <div className="field" style={ styles } onClick={ this._handleClick }>{ content }</div>
    );
  }
});

module.exports = Field;
