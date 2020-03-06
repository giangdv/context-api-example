import AppProvider from "../providers/AppProvider";
import LocalStorage from "../../helpers/LocalStorage";
import Navigations from "../../helpers/Navigations";
import AsyncStorage from "@react-native-community/async-storage";

const AppAction = {
  getUsers: async () => {
    let data = await fetch("xxxx");
    // Todo....
    AppProvider.instance.setState({ userList: data });
  },

  getPosts: async () => {
    let data = await fetch("xxxx");
    // Todo....
    AppProvider.instance.setState({ postList: data });
  },

  getUserDetail: async () => {
    let token = LocalStorage.token;
    if (!token) {
      let res = await fetch("api/login");

      // Success
      if (res.token) {
        AsyncStorage.setItem("token", token);
        LocalStorage.token = res.token;
      }
    }

    // Not exist token
    if (!LocalStorage.token) {
      // Todo...
      return;
    }

    // Fetch user data
    let userDetail = await fetch("api/get-user-detail");
    // Todo...

    // Navigate
    Navigations.navigate("Home");
  }
};

export default AppAction;
