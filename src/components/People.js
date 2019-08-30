import React, { Component } from 'react';

let people = [
  {
    name: 'John',
    id: 1
  },
  {
    name: 'Ariel',
    id: 2
  }
];

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people,
      originalPeople: people
    };
  }

  setPeople = people => {
    this.setState({ people });
  };

  render() {
    return this.props.render({
      people: this.state.people,
      setPeople: this.setPeople,
      originalPeople: this.state.originalPeople
    });
  }
}
