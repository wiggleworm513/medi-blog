import React, { Component } from "react";
import Form from "react-jsonschema-form";

const schema = {
  title: "Contact Us",
  type: "object",
  required: ["subject", "details", "email"],
  properties: {
    subject: {
      type: "string",
      title: "Subject"
    },
    details: {
      type: "string",
      title: "Details"
    },
    email: {
      type: "string",
      title: "Email Address"
    }
  }
};

const uiSchema = {
  subject: {
    "ui:widget": "text"
  },
  details: {
    "ui:widget": "textarea",
    "ui:placeholder": "Please enter the details."
  },
  email: {
    "ui:widget": "text",
    "ui:placeholder":
      "Please enter you email address."
  }
};

export default class Contact extends Component {

  handleSubmit(){
    //Submit the form data to firebase ??  
  }

  render() {
    return (
      <Form
         schema={schema}
         uiSchema={uiSchema}
         noHtml5validate
         onSubmit={console.log}
         showErrorList={true}
       />
    );
  }
}
