import React from "react";
import { View, Button } from "react-native";
import AppContextView from "../contexts/views/AppContextView";
import AppAction from "../contexts/actions/AppAction";

class Child2 extends React.PureComponent {
  render() {
    return (
      <View>
        <Button
          title="Get user list"
          onPress={() => {
            AppAction.getUsers();
          }}
        />
        <FlatList data={this.props.postList} />
      </View>
    );
  }
}

export default class Screen1 extends AppContextView {
  render() {
    let { postList } = this.context;
    return <Child1 postList={postList} />;
  }
}
