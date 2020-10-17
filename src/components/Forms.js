
import React, { Component } from "react";
import axios from "axios";

class Forms extends Component {
  state = {
    short_id: "",
    title:"",
    description: "",
    priority:"",
    status:"",
    created_by:"",
    assignee:""
  };

  onShort_idChange = e => {
    this.setState({
      short_id: e.target.value
    });
  };

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  onPriorityChange = e => {
    this.setState({
      priority: e.target.value
    });
  };

  onStatusChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  onCreated_byChange = e => {
    this.setState({
      created_by: e.target.value
    });
  };

  onAssigneeChange = e => {
    this.setState({
      assignee: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      short_id: this.state.short_id.to,
      title:this.state.title,
      description: this.state.description,
      priority: this.state.priority,
      status: this.state.status,
      created_by:this.state.created_by,
      assignee:this.state.assignee
    };

    axios
      .post("http://localhost:8000/api/v1/issues/", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="main">
        <form className="forms" onSubmit={this.handleSubmit}>
        <label for="Short_id">Id</label>
          <input type="text"
            placeholder="Short_id" name="Short_id" value={this.state.short_id}
            onChange={this.onShort_idChange} required/>
        <label for="Title">Title</label>
          <input type="text"
            placeholder="Title" value={this.state.title}
            onChange={this.onTitleChange} />
        <label for="Description">Description</label>
          <input type="text"
            placeholder="Description" value={this.state.description}
            onChange={this.onDescriptionChange} required/>
        <label for="Priority">Priority</label>
          <input type="text" oninput="this.value = this.value.toUpperCase()"
            placeholder="Priority"  value={this.state.priority}
            onChange={this.onPriorityChange} required/>
        <label for="Status">Status</label>
          <input type="text" oninput="this.value = this.value.toUpperCase()"
            placeholder="Status"  value={this.state.status}
            onChange={this.onStatusChange} required/>
            <label for="Created_by">Created_by</label>
          <input type="text"
            placeholder="Created_by" value={this.state.created_by}
            onChange={this.onCreated_byChange} />
            <label for="Assignee">Assignee</label>
          <input type="text"
            placeholder="Assignee" value={this.state.assignee}
            onChange={this.onAssigneeChange} 
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Forms;