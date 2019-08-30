import React from 'react';
import StateTracker from './StateTracker';

export default function MyComponent(props) {
  return (
    <StateTracker
      render={obj => {
        return (
          <div>
            <p>{props.title}</p>
            <input
              value={obj.value}
              onChange={obj.handleChange}
              name="name"
              style={{ border: '1px solid black' }}
            />
            {obj.value}
          </div>
        );
      }}
    />
  );
}
