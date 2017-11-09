/**
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, Button, ScrollView, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from "react-redux";
import ActionCreators from './actions';

import User from './models/User';
import styles from './styles.android';

/**
 * State Return Type
 */
type IState = {
  isLoading: boolean,
  usersList: Array<User>
};


class Index extends Component {

  /**
   * Default Props
   */
  props: {
      isLoading: boolean,
      users: Array<User>,
      actions: {
          fetch_users: () => IState,
          add_users: (user: User) => IState,
          edit_users: (user_id: number, user: User) => IState
      }
  };

  static defaultProps : {
      isLoading: true,
      users: []
  };

  constructor(props: any) {
    super(props);

    // Delay for fetch users
    setTimeout(() => {
      props.actions.fetch_users();
    }, 1500);

  }

  // When props updated
  componentWillReceiveProps() {

  }

  // ES6 Function
  addNewUser = (): mixed => {
    this.props.actions.add_users(new User(this.getRndInteger(1, 100), `Demo User ${this.getRndInteger(1, 100)}`, this.getRndInteger(20, 60)));
  };

  /**
   * Generate Random Integer
   *
   * @param min
   * @param max
   * @return number
   */
  getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render(): React$Element<any> {

    // IsLoading Screen
    if (this.props.isLoading) {
      return <ActivityIndicator size="large" style={styles.centering} />;
    }

    // Render Users Lists
    return (
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.container}>
          <Button onPress={this.addNewUser}
                    style={{ marginTop: 100 }}
                    title="Add New User"
                    />

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

function mapStateToProps(state: any): Object {
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
