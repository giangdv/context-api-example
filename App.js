import React from "react";
import Screen1 from "./ui/Screen1";
import Screen2 from "./ui/Screen2";
import AppProvider from "./contexts/providers/AppProvider";
import LocalStorage from "./helpers/LocalStorage";

export default class App extends React.Component {
  componentDidMount() {
    LocalStorage.init();
  }

  render() {
    return (
      <AppProvider>
        <Screen1 />
        <Screen2 />
      </AppProvider>
    );
  }
}
