import React, { PropTypes } from 'react'

export var Field = React.createClass({
  propTypes: {
    field: PropTypes.object.isRequired,
    onFieldClick: PropTypes.func
  },
  getInitialState() {
    return {
      count: 0
    }
  },
  _handleClick(event) {
    var newCount = this.state.count+1;
    this.setState({ count: newCount })
    this.props.onFieldClick(newCount);
  },
  render() {
    var styles = {
      width: "10%",
      height: "30px",
      backgroundColor: this.props.field.stone.color
    };
    var content = [this.props.field.stone.id, "/", this.state.count].join('');
    return (
      <div className="field" style={ styles } onClick={ this._handleClick }>{ content }</div>
    );
  }
});
