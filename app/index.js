import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from './actions';

import User from './models/User';

import styles from './styles.android';

type State = {
  isLoading: boolean,
  usersList: Array<User>
};

type Props = {
  isLoading: boolean,
  users: Array<User>,
  actions: {
    show_users: () => State,
    add_users: (user: User) => State,
    edit_users: (user_id: number, user: User) => State
  }
};

class Index extends React.Component<Props, void> {

  addNewUser = (): mixed => {
    this.props.actions.add_users(new User(12, '12', 12));
  }

  render(): React$Element<any> {

    const { add_users, show_users, edit_users } = this.props.actions;

    return (
      <View style={styles.container}>
        {
          this.props.users.length ? (
            this.props.users.map((person: User, i: number): any => (
              <View key={i} >
                <Text>Name: {person.fullname}</Text>
                <Text>Age: {person.age}</Text>
              </View>))
          ) : (
            <View>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
              <Text>{[1, 2].length}</Text>
            </View>
          )
        }

        {/* Function */}
        <Button onPress={this.addNewUser} title="Add New User">Add New User</Button>

        {/* inline */}
        <Button onPress={(): mixed => add_users(new User(5555, '5555', 5555))} title="Add New User">Add New User</Button>

      </View>
    );
  }
}

function mapStateToProps(state: State): Object {
  return {
    isLoading: state.users.isLoading,
    users: state.users.usersList
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
  // return {
  //   actions: {
  //     add_users: (user: User) => {
  //       dispatch(ActionCreators.add_users(user));
  //     },
  //     edit_users: (user_id: number, user: User) => {
  //       dispatch(ActionCreators.add_users(user_id, user));
  //     },
  //     show_users: () => {
  //       dispatch(ActionCreators.show_users());
  //     }
  //   }
  // };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
