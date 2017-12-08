import React, { Component } from "react";
export default class SickerList extends Component {
  state = {
    list: [
      {
        name: "Red",
        data:
          "http://www.ikea.com/gb/en/images/products/myttinge-picture-love__0455526_pe603579_s5.jpg"
      },
      {
        name: "Green",
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
                <h2>{item.name}</h2>
                <img width={200} height={200} src={item.data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
