import React, { Component } from "react";
import DataTables from "material-ui-datatables";
import Detail from "./Detail";
const TABLE_COLUMNS = [
  {
    key: "pid",
    label: "Patient Id"
  },
  {
    key: "name",
    label: "Patient Name"
  },
  {
    key: "date",
    label: "Study Date"
  },
  {
    key: "modality",
    label: "Modality"
  },
  {
    key: "description",
    label: "Study Description"
  }
];

const TABLE_DATA = [
  {
    pid: "1343444342334",
    name: "Kevin",
    date: "20171216",
    modality: "MR",
    description: "CHEST",
    data: "http://xxx",
    dcmFileUrl:
      "https://raw.githubusercontent.com/cornerstonejs/cornerstoneWADOImageLoader/master/testImages/CT0012.fragmented_no_bot_jpeg_baseline.51.dcm"
  },
  {
    pid: "443444342334",
    name: "Float",
    date: "20171204",
    modality: "CT",
    description: "CHEST",
    data: "http://xXXXxx"
  },
  {
    pid: "91343342334",
    name: "Rob",
    date: "20171206",
    modality: "DX",
    description: "BRAIN",
    data: "http://xxXx"
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
