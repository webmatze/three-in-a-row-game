import React, { PropTypes } from 'react'

export var Field = React.createClass({
  propTypes: {
    field: PropTypes.object,
    onFieldClick: PropTypes.func
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
