import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/1',
          'name': 'Sungwoong Pyeon',
          'birthday': '930621',
          'gender': 'Male',
          'job': 'Student',
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/2',
          'name': 'Yago Santos',
          'birthday': '920505',
          'gender': 'Male',
          'job': 'Student',
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/3',
          'name': 'Alex',
          'birthday': '900404',
          'gender': 'Male',
          'job': 'Student',
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }

      </div>
    );
  }
}

export default App;

