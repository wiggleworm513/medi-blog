import React, { Component } from "react";

import AddEntry from "./addentry";

function l_pad(data, pad_length, pad_string)
{
  return (Array(pad_length).join(pad_string || "") + data).slice(
    -pad_length
  );
}

export default class ViewEntries extends Component{
  constructor(props){
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount(){
      const itemsRef = this.props.firebase.database().ref("entries");
      itemsRef
        .orderByChild('uuid')
        .equalTo(this.props.user.uid)
        .on("value", snapshot => {
          let entries = snapshot.val();
          let newState = [];
          for(let item in entries){
            let timestamp = new Date(entries[item].eventDate);
            let day = l_pad(timestamp.getDate(), 2, "0");
            let month = l_pad(timestamp.getMonth() + 1, 2, "0");
            let year = 1900 + timestamp.getYear();

            let hour = l_pad(timestamp.getHours(), 2, "0");
            let minute = l_pad(timestamp.getMinutes(), 2, "0");
            let second = l_pad(timestamp.getSeconds(), 2, "0");

            let meridian = "AM";

            if(hour > 12)
            {
              hour -= 12;
              meridian = "PM";
            }

            newState.push({
                id: item,
                details: entries[item].eventDetails,
                date: month + "/" + day + "/" + year + " (@ " + hour + ":" + minute + ":" + second + " " + meridian + ")",
                type: entries[item].eventType
            });
          }
          this.setState({
            entries: newState
          });
        });
  }

  render(){
    return (
      <div>
        <h2>My Health Events</h2>
        <div>
          {this.state.entries.map(item => {
            return (
              <span key={item.id}>
                {item.date} - {item.type} - {item.details}
              </span>
            );
          })}
        </div>
        <div>
          <AddEntry user={this.props.user} firebase={this.props.firebase} />
        </div>
      </div>
    );
  }

}
