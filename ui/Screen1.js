import React from "react";
import { View, Button, FlatList } from "react-native";
import AppContextView from "../contexts/views/AppContextView";
import AppAction from "../contexts/actions/AppAction";

class Child1 extends React.PureComponent {
  render() {
    return (
      <View>
        <Button
          title="Get user list"
          onPress={() => {
            // Hàm này bạn có thể gọi bất kỳ ở đâu
            AppAction.getUsers();
          }}
        />
        <FlatList data={this.props.userList}/>
      </View>
    );
  }
}

export default class Screen1 extends AppContextView {
  render() {
    let { userList } = this.context;
    return <Child1 userList={userList} />;
  }
}
