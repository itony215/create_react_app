import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Detail extends Component {
  static propType = {
    entity: PropTypes.object
  };
  render() {
    const { entity } = this.props;
    return (
      <div>
        <h3>{`Detail ${entity.name}`}</h3>
      </div>
    );
  }
}
