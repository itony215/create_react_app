import React, { Component } from "react";
export default class SickerList extends Component {
  state = {
    list: [
      {
        PatientName: "Red",
        PatientId: "343342334",
        StudyDate: "20171208",
        Modality: "MR",
        StudyDescription: "CHEST",
        data:
          "http://www.ikea.com/gb/en/images/products/myttinge-picture-love__0455526_pe603579_s5.jpg"
      },
      {
        PatientName: "Green",
        PatientId: "1343444342334",
        StudyDate: "20171200ww",
        Modality: "MR2",
        StudyDescription: "CHssEST",
        data: "http://xxx"
      }
    ]
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.warn("componentWillMount");
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }

  render() {
    return (
      <div className="">
        <ul>
          {this.state.list.map(item => {
            return (
              <li>
                <h2>{item.PatientName}</h2>
                <h2>{item.PatientId}</h2>
                <h2>{item.StudyDate}</h2>
                <h2>{item.Modality}</h2>
                <h2>{item.StudyDescription}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
