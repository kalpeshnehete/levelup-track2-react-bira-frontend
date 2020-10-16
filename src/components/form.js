import React from 'react';
import axios from 'axios';

export default class IssuesList extends React.Component {
  state = {
    short_id: '',description:'',priority:'',status:'',
  }

  handleChange = event => {
    this.setState({ short_id: event.target.value }),
    this.setState({ description: event.target.value }),
    this.setState({ priority: event.target.value }),
    this.setState({ status: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const issue = {
      short_id: this.state.short_id,
      description: this.state.description,
      priority: this.state.priority,
      status: this.state.status,
    };

    axios.post('http://localhost:8000/api/v1/issues/', { issue })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            short_id:
            <input type="text" name="short_id" onChange={this.handleChange} />
          </label>
          <label>
            description:
            <input type="text" name="description" onChange={this.handleChange} />
          </label>
          <label>
            priority:
            <input type="text" name="priority" onChange={this.handleChange} />
          </label>
          <label>
            status:
            <input type="text" name="status" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
export default IssuesList;