import React, { Component } from 'react';
import axios from 'axios'
import {withRouter, Link} from 'react-router-dom'

class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
    
  }

  componentDidMount() {
    axios
    .get(
      `http://localhost:3005/students?class=${this.props.match.params.class}`
    )
    .then(results => {
      this.setState({
        students: results.data
      });
    });
  }

  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/students/${student.id}`} key={i}>
      <h3 key={i}>{student.first_name} {student.last_name}</h3>
      </Link>
    ))

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
      {students}
      </div>
    )
  }
}

export default withRouter(ClassList)