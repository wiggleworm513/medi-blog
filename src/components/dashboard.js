import React, { Component } from "react";

import ViewEntries from "./viewentries";


export default class Dashboard extends Component{
  constructor(props){
    super(props);
  }

render(){
  return (
    <div>
      This is your dashboard.
      <ViewEntries {...this.props} user={this.props.user} firebase={this.props.firebase}/>
    </div>
  )
}

}
