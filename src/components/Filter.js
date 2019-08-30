import React, { Component } from 'react';
import People from './People';

export default function Wrapper() {
  return (
    <People
      render={obj => {
        return <Filter {...obj} />;
      }}
    />
  );
}

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      let filtered;
      if (this.state.search)
        filtered = this.props.originalPeople.filter(
          p =>
            p.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
      else filtered = this.props.originalPeople;
      this.props.setPeople(filtered);
    });
  };

  render() {
    return (
      <div>
        <div>
          <p>
            Filter:
            <input
              value={this.state.search}
              onChange={this.handleChange}
              name="search"
              style={{ border: '1px solid black' }}
            />
          </p>
          {this.props.people.map(p => {
            return <p key={p.id}>{p.name}</p>;
          })}
        </div>
      </div>
    );
  }
}
