import React, { Component } from "react";

export default class SickerList extends Component {
  state = {
    list: [
      {
        PatientName: "Pacs",
        PatientId: "343342334",
        StudyDate: "20171208",
        Modality: "MR",
        StudyDescription: "CHEST",
        data:
          "http://www.ikea.com/gb/en/images/products/myttinge-picture-love__0455526_pe603579_s5.jpg"
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
    let f111 = () => 5;
    let result = f111();
    console.log(result);
    console.warn("componentDidMount");
  }

  render() {
    return {
      /*
      <div className="">
        <ul>
          {this.state.list.map(item => {
            return (
              <li>
                <h2>{item.PatientName}</h2>
              </li>
            );
          })}
        </ul>
        </div>*/
    };
  }
}
