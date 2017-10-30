import React from 'react';
import { Text, View, Button, ListView, ScrollView, ActivityIndicator } from 'react-native';
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
    fetch_users: () => State,
    add_users: (user: User) => State,
    edit_users: (user_id: number, user: User) => State
  }
};

class Index extends React.Component<Props, void> {

  constructor(props: any) {
    super(props);

    setTimeout(() => {
      this.props.actions.fetch_users();
    }, 1000);

  }

  componentWillReceiveProps() {
    
  }

  addNewUser = (): mixed => {
    this.props.actions.add_users(new User(this.getRndInteger(1, 100), `Demo User ${this.getRndInteger(1, 100)}`, this.getRndInteger(20, 60)));
  }

  getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render(): React$Element<any> {

    if (this.props.isLoading) {
      return (
        <ActivityIndicator size="large"
          style={styles.activityIndicator} />
      );
    }

    return (
      <View style={styles.mainview}>
        <ScrollView>
          <View style={styles.container}>
          <Button onPress={this.addNewUser}
                    title="Add New User"
                    style={{ marginTop: 100 }} />

            { this.props.users.length > 0 ?
              (
                <View>
                  <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>List Of Staffs</Text>

                  {this.props.users.map((person: User, i: number): any => (
                    <View key={i} >
                      <Text>{person.fullname} is {person.age} years old.</Text>
                    </View>))
                  }
                </View>
              ) : (
                <View style={{ marginTop: 20 }}>
                  <Text>Please Add New User</Text>
                </View>
              )
            }

            {/* inline */}
            {/* <Button onPress={(): mixed => add_users(new User(5555, '5555', 5555))}
                    title="Add New User">Add New User</Button> */}
          </View>
        </ScrollView>
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
