import React, { Component } from "react";
import DataTables from "material-ui-datatables";
import Detail from "./Detail";
const TABLE_COLUMNS = [
  {
    key: "name",
    label: "Dessert (100g serving)"
  },
  {
    key: "calories",
    label: "Calories"
  }
];

const TABLE_DATA = [
  {
    name: "Frozen yogurt",
    calories: "159",
    fat: "6.0",
    carbs: "24"
  },
  {
    name: "Ice cream sandwich",
    calories: "159",
    fat: "6.0",
    carbs: "24"
  }
];

export default class Table extends Component {
  state = {
    entity: {}
  };
  handleFilterValueChange = value => {
    // your filter logic
  };

  handleSortOrderChange = (key, order) => {
    // your sort logic
  };

  handleCellClick = (row, column, entity) => {
    console.warn("handleCellClick", row, column, entity);
    this.setState({
      entity
    });
  };

  render() {
    return (
      <div>
        <DataTables
          height={"auto"}
          selectable={false}
          showRowHover={true}
          columns={TABLE_COLUMNS}
          data={TABLE_DATA}
          showCheckboxes={false}
          onCellClick={this.handleCellClick}
          onCellDoubleClick={this.handleCellDoubleClick}
          onFilterValueChange={this.handleFilterValueChange}
          onSortOrderChange={this.handleSortOrderChange}
          page={1}
          count={100}
        />
        <Detail entity={this.state.entity} />
      </div>
    );
  }
}
