import React, { Component } from "react";

export default class AddEntry extends Component{
  constructor(props){
    super(props);
    this.state = {
      eventType: "",
      eventDetails: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = this.props.firebase.database().ref("entries");
    const item = {
      uuid: this.props.user.uid,
      eventType: this.state.eventType,
      eventDetails: this.state.eventDetails,
      eventDate: Date()
    };
    itemsRef.push(item);
    this.setState({
      eventType: "",
      eventDetails: ""
    })
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Health Event</h2>
        <input
          type="text"
          name="eventType"
          placeholder="Event Type (EX: Migraine, Stomach Issues, etc;)"
          onChange={this.handleChange}
          value={this.state.eventType}
          />
          <input
            type="textarea"
            name="eventDetails"
            placeholder="Event Details (EX: What were you doing before the event?)"
            onChange={this.handleChange}
            value={this.state.eventDetails}
            />
            <button>Add Health Event</button>
      </form>
    );
  }

}
