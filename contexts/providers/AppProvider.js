import React from "react";

export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
  static instance;

  constructor() {
    super();
    this.state = {
      userList: [],
      postList: []
    };
    AppProvider.instance = this;
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
