import React, { Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import './App.css';

const styles = theme =>({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080
  }
})

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
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

